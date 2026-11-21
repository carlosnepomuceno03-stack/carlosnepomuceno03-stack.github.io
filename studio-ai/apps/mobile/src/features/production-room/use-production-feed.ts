import { useEffect, useRef, useState } from 'react';
import { demoSnapshot, type FeedSnapshot } from './feed';

/**
 * Fonte de estados da Sala de Produção.
 * Etapa 1: somente roteiro de demonstração (pode ser pausado). Etapa 3: assinatura em tempo real
 * de `agent_tasks` do projeto selecionado.
 */
export function useProductionFeed(running: boolean): FeedSnapshot & { elapsedMs: number; restart: () => void } {
  const [elapsedMs, setElapsed] = useState(0);
  const startRef = useRef(Date.now());
  const pausedAtRef = useRef<number | null>(null);

  useEffect(() => {
    if (!running) {
      pausedAtRef.current = Date.now();
      return;
    }
    if (pausedAtRef.current != null) {
      startRef.current += Date.now() - pausedAtRef.current;
      pausedAtRef.current = null;
    }
    const id = setInterval(() => setElapsed(Date.now() - startRef.current), 500);
    return () => clearInterval(id);
  }, [running]);

  const restart = () => {
    startRef.current = Date.now();
    pausedAtRef.current = running ? null : Date.now();
    setElapsed(0);
  };

  return { ...demoSnapshot(elapsedMs), elapsedMs, restart };
}
