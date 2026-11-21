/**
 * Controle de uso por usuário (protege custo de CPU/armazenamento da hospedagem).
 * Janela deslizante em memória: suficiente para uma instância. Com várias instâncias, trocar por Redis/Postgres.
 */
export type LimitRule = { max: number; windowMs: number };
export type Limits = Record<'export' | 'preview' | 'upload' | 'write', LimitRule>;

export const DEFAULT_LIMITS: Limits = {
  export: { max: 30, windowMs: 60 * 60 * 1000 }, // 30 exportações (cada uma até 8 formatos) por hora
  preview: { max: 120, windowMs: 60 * 1000 },
  upload: { max: 60, windowMs: 60 * 60 * 1000 },
  write: { max: 300, windowMs: 60 * 1000 },
};

export class RateLimiter {
  private hits = new Map<string, number[]>();
  constructor(private readonly limits: Limits, private readonly now: () => number = Date.now) {}

  /** Retorna os segundos até liberar, ou 0 se permitido (e registra o uso). */
  take(kind: keyof Limits, key: string): number {
    const rule = this.limits[kind];
    const id = `${kind}:${key}`;
    const t = this.now();
    const recent = (this.hits.get(id) ?? []).filter((x) => t - x < rule.windowMs);
    if (recent.length >= rule.max) {
      this.hits.set(id, recent);
      return Math.ceil((rule.windowMs - (t - recent[0]!)) / 1000);
    }
    recent.push(t);
    this.hits.set(id, recent);
    return 0;
  }
}
