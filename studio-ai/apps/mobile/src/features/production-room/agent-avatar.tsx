import type { AgentId } from '@studio-ai/shared';
import Svg, { Circle, Ellipse, G, Path, Rect } from 'react-native-svg';

type Look = { bg: string; shirt: string; skin: string; hair: string };

export const AGENT_LOOKS: Record<AgentId, Look> = {
  director: { bg: '#2B2550', shirt: '#8F80FF', skin: '#C98E6B', hair: '#2A1B14' },
  research: { bg: '#123A4A', shirt: '#55B8FF', skin: '#F0C8A0', hair: '#6B3E1F' },
  art_direction: { bg: '#4A2335', shirt: '#FF7DA8', skin: '#8D5A3B', hair: '#151012' },
  production: { bg: '#3D3214', shirt: '#F5B544', skin: '#E3A97F', hair: '#3A2A20' },
  quality: { bg: '#14402E', shirt: '#3DD68C', skin: '#B97950', hair: '#0F0F0F' },
};

/** Personagens estilizados e neutros — amigáveis sem parecer infantis. */
export function AgentAvatar({ agentId, size = 56 }: { agentId: AgentId; size?: number }) {
  const c = AGENT_LOOKS[agentId];
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64" accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
      <Circle cx={32} cy={32} r={32} fill={c.bg} />
      {/* tronco */}
      <Path d="M12 64 C12 48 20 42 32 42 C44 42 52 48 52 64 Z" fill={c.shirt} />
      {/* pescoço e cabeça */}
      <Rect x={28} y={34} width={8} height={9} rx={3} fill={c.skin} />
      <Circle cx={32} cy={26} r={11} fill={c.skin} />
      {agentId === 'director' && (
        <G>
          <Path d="M21 24 C21 14 43 14 43 24 C41 18 23 18 21 24 Z" fill={c.hair} />
          {/* headset */}
          <Path d="M20 27 C20 12 44 12 44 27" stroke="#E6E6F0" strokeWidth={2} fill="none" />
          <Rect x={18} y={25} width={4} height={7} rx={2} fill="#E6E6F0" />
          <Path d="M20 31 C21 36 25 37 28 36" stroke="#E6E6F0" strokeWidth={1.5} fill="none" />
        </G>
      )}
      {agentId === 'research' && (
        <G>
          <Path d="M21 25 C20 13 44 13 43 25 C43 20 38 17 32 17 C26 17 21 20 21 25 Z" fill={c.hair} />
          {/* óculos */}
          <Circle cx={27.5} cy={27} r={3.6} stroke="#1B1B22" strokeWidth={1.6} fill="#FFFFFF33" />
          <Circle cx={36.5} cy={27} r={3.6} stroke="#1B1B22" strokeWidth={1.6} fill="#FFFFFF33" />
          <Path d="M31 27 L33 27" stroke="#1B1B22" strokeWidth={1.6} />
        </G>
      )}
      {agentId === 'art_direction' && (
        <G>
          <Path d="M21 27 C19 18 26 15 32 15 C40 15 45 19 43 29 C42 22 37 20 32 20 C27 20 23 22 21 27 Z" fill={c.hair} />
          {/* boina */}
          <Ellipse cx={30} cy={15.5} rx={12} ry={4.5} fill="#1B1B22" />
          <Circle cx={30} cy={11.5} r={1.6} fill="#1B1B22" />
        </G>
      )}
      {agentId === 'production' && (
        <G>
          <Path d="M21 23 C21 15 43 15 43 23 Z" fill={c.hair} />
          {/* boné */}
          <Path d="M21 22 C21 13 43 13 43 22 Z" fill="#2A2E39" />
          <Rect x={30} y={20} width={17} height={3} rx={1.5} fill="#2A2E39" />
        </G>
      )}
      {agentId === 'quality' && (
        <G>
          <Path d="M21 24 C21 14 43 14 43 24 L43 22 C40 18 24 18 21 22 Z" fill={c.hair} />
          {/* viseira de inspeção */}
          <Rect x={22} y={23.5} width={20} height={6} rx={3} fill="#3DD68C" opacity={0.85} />
        </G>
      )}
      {/* olhos (escondidos sob óculos/viseira quando houver) */}
      {agentId !== 'quality' && (
        <G>
          <Circle cx={27.5} cy={27} r={1.3} fill="#1B1B22" />
          <Circle cx={36.5} cy={27} r={1.3} fill="#1B1B22" />
        </G>
      )}
      <Path d="M29 32 C31 33.5 33 33.5 35 32" stroke="#1B1B22" strokeWidth={1.3} fill="none" strokeLinecap="round" />
    </Svg>
  );
}
