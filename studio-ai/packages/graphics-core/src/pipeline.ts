import type { FormatPreset, GraphicDocument, VisualIdentityContract } from '@studio-ai/shared';
import type { AssetSource } from './assets';
import { adaptDocument, type AdaptationIssue } from './adapt';
import { runQualityChecks, type QualityReport } from './checks';
import { renderDocument, type RenderResult } from './render';

export type ProducedMaterial = {
  format: FormatPreset;
  document: GraphicDocument;
  adaptationIssues: AdaptationIssue[];
  changes: string[];
  render: RenderResult | null;
  quality: QualityReport | null;
  /** `ready_for_review` só quando adaptação e verificações passaram; nunca aprovado automaticamente. */
  status: 'ready_for_review' | 'needs_review' | 'failed';
};

/** Adapta → renderiza → verifica, para um formato. Usado pelo worker e pelo CLI. */
export async function produceAdaptation(
  master: GraphicDocument,
  contract: VisualIdentityContract,
  format: FormatPreset,
  assets: AssetSource,
  opts: { id: string; now?: Date },
): Promise<ProducedMaterial> {
  const adapted = adaptDocument(master, contract, format, { id: opts.id });
  if (adapted.needsReview) {
    return { format, document: adapted.document, adaptationIssues: adapted.issues, changes: adapted.changes, render: null, quality: null, status: 'needs_review' };
  }
  try {
    const render = await renderDocument(adapted.document, assets);
    const quality = await runQualityChecks({ document: adapted.document, contract, format, png: render.png, render: render.context, assets, now: opts.now });
    return {
      format,
      document: adapted.document,
      adaptationIssues: adapted.issues,
      changes: adapted.changes,
      render,
      quality,
      status: quality.passed ? 'ready_for_review' : 'needs_review',
    };
  } catch (e) {
    return {
      format,
      document: adapted.document,
      adaptationIssues: [...adapted.issues, { severity: 'error', code: 'render_failed', message: (e as Error).message }],
      changes: adapted.changes,
      render: null,
      quality: null,
      status: 'failed',
    };
  }
}
