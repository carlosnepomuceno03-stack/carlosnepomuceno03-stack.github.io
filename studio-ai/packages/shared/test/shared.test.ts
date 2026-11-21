import { describe, expect, it } from 'vitest';
import {
  API,
  BUILT_IN_FORMATS,
  FLOW_STEPS,
  NATIVE_AGENTS,
  aspectClass,
  canTransition,
  assertTransition,
  completedSteps,
  detectReferenceSource,
  newProject,
  validateDocument,
  walkLayers,
} from '../src';

const SHA = 'a'.repeat(64);

function baseDoc(overrides: Record<string, unknown> = {}) {
  return {
    schemaVersion: 1,
    id: 'doc_1',
    projectId: 'prj_1',
    revision: 1,
    name: 'Flyer principal',
    width: 1080,
    height: 1350,
    backgroundColor: '#0B0B10',
    fonts: [{ id: 'f_title', family: 'Inter', weight: 800 }],
    layers: [
      { id: 'bg', name: 'Fundo', type: 'background', x: 0, y: 0, width: 1080, height: 1350, color: '#111111' },
      { id: 'photo', name: 'Artista', type: 'image', role: 'photo', x: 0, y: 200, width: 1080, height: 900, assetId: 'ast_1', assetSha256: SHA, protected: true },
      {
        id: 'grp', name: 'Bloco de info', type: 'group', x: 80, y: 1100, width: 920, height: 200,
        children: [
          { id: 'title', name: 'Título', type: 'text', role: 'headline', x: 80, y: 1100, width: 920, height: 120, text: 'NOITE ELETRÔNICA', fontId: 'f_title', fontSize: 96, color: '#FFFFFF', required: true },
        ],
      },
    ],
    ...overrides,
  };
}

describe('documento gráfico', () => {
  it('aceita um documento válido e aplica padrões', () => {
    const r = validateDocument(baseDoc());
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    const photo = r.document.layers[1];
    expect(photo?.opacity).toBe(1);
    expect(photo?.constraints.keepAspectRatio).toBe(true);
    expect(r.document.approval.status).toBe('draft');
  });

  it('percorre camadas na ordem de pintura, incluindo grupos', () => {
    const r = validateDocument(baseDoc());
    if (!r.ok) throw new Error('inválido');
    expect([...walkLayers(r.document.layers)].map((l) => l.id)).toEqual(['bg', 'photo', 'grp', 'title']);
  });

  it('rejeita IDs duplicados, inclusive dentro de grupos', () => {
    const doc = baseDoc();
    (doc.layers[2] as { children: { id: string }[] }).children[0]!.id = 'photo';
    const r = validateDocument(doc);
    expect(r.ok).toBe(false);
    expect(r.issues.map((i) => i.code)).toContain('duplicate_layer_id');
  });

  it('rejeita fonte não declarada', () => {
    const r = validateDocument(baseDoc({ fonts: [] }));
    expect(r.ok).toBe(false);
    expect(r.issues.map((i) => i.code)).toContain('missing_font');
  });

  it('proíbe esticar recurso protegido', () => {
    const doc = baseDoc();
    (doc.layers[1] as Record<string, unknown>).fit = 'stretch';
    const r = validateDocument(doc);
    expect(r.ok).toBe(false);
    expect(r.issues.map((i) => i.code)).toContain('protected_distortion');
  });

  it('preserva e reporta efeitos não suportados em vez de descartá-los', () => {
    const doc = baseDoc();
    (doc.layers[1] as Record<string, unknown>).unsupportedEffects = [{ type: 'photoshop_bevel', raw: { depth: 3 } }];
    const r = validateDocument(doc);
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.issues).toHaveLength(1);
    expect(r.issues[0]?.code).toBe('unsupported_effect');
    expect(r.document.layers[1]?.unsupportedEffects[0]?.raw).toEqual({ depth: 3 });
  });

  it('rejeita cores e recortes inválidos', () => {
    expect(validateDocument(baseDoc({ backgroundColor: 'red' })).ok).toBe(false);
    const doc = baseDoc();
    (doc.layers[1] as Record<string, unknown>).crop = { x: 0.5, y: 0, width: 0.6, height: 1 };
    expect(validateDocument(doc).ok).toBe(false);
  });

  it('rejeita versão de esquema desconhecida', () => {
    expect(validateDocument(baseDoc({ schemaVersion: 2 })).ok).toBe(false);
  });
});

describe('estados', () => {
  it('permite apenas transições válidas', () => {
    expect(canTransition('not_started', 'in_progress')).toBe(true);
    expect(canTransition('in_progress', 'awaiting_user')).toBe(true);
    expect(canTransition('completed', 'in_progress')).toBe(false);
    expect(canTransition('cancelled', 'in_progress')).toBe(false);
    expect(() => assertTransition('not_started', 'completed')).toThrow();
  });
});

describe('formatos', () => {
  it('tem as dimensões exatas da especificação', () => {
    const dims = Object.fromEntries(BUILT_IN_FORMATS.map((f) => [f.id, [f.width, f.height]]));
    expect(dims).toEqual({ story: [1080, 1920], feed: [1080, 1440], sympla: [1600, 838], telao: [1920, 1080] });
  });
  it('classifica proporções', () => {
    expect(aspectClass(1080, 1920)).toBe('tall');
    expect(aspectClass(1080, 1440)).toBe('portrait');
    expect(aspectClass(1920, 1080)).toBe('landscape');
    expect(aspectClass(1600, 838)).toBe('wide');
  });
});

describe('projetos', () => {
  it('cria projeto com etapa inicial concluída e contagem real de progresso', () => {
    const p = newProject({ name: 'Festa de Verão', kind: 'event', eventDate: '2026-12-20' }, { id: 'p1', organizationId: 'o1', now: new Date('2026-11-21T10:00:00Z') });
    expect(p.currentStep).toBe('briefing');
    expect(completedSteps(p)).toEqual({ done: 1, total: FLOW_STEPS.length });
  });
  it('valida nome e data', () => {
    const opts = { id: 'p', organizationId: 'o', now: new Date() };
    expect(() => newProject({ name: ' ', kind: 'event' }, opts)).toThrow();
    expect(() => newProject({ name: 'Ok nome', kind: 'event', eventDate: '20/12/2026' }, opts)).toThrow();
  });
});

describe('referências', () => {
  it('identifica a origem do link sem acessar o conteúdo', () => {
    expect(detectReferenceSource('https://br.pinterest.com/pin/123')).toBe('pinterest_link');
    expect(detectReferenceSource('https://pin.it/abc')).toBe('pinterest_link');
    expect(detectReferenceSource('https://www.behance.net/gallery/1/x')).toBe('behance_link');
    expect(detectReferenceSource('https://evil-pinterest.com.example.org')).toBe('other_link');
    expect(detectReferenceSource('não é url')).toBe('other_link');
  });
});

describe('agentes e contratos', () => {
  it('tem os cinco agentes nativos com IDs únicos', () => {
    expect(new Set(NATIVE_AGENTS.map((a) => a.id)).size).toBe(5);
  });
  it('rotas de API têm caminhos únicos por método', () => {
    const keys = Object.values(API).map((r) => `${r.method} ${r.path}`);
    expect(new Set(keys).size).toBe(keys.length);
  });
});
