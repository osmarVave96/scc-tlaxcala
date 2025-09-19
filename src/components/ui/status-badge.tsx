import React from 'react';

type StatusKind = 'EN_PROCESO' | 'PROXIMAMENTE' | 'PAUSA' | 'FINALIZADO';

export interface StatusBadgeProps {
  status: StatusKind;
}

const BG_BY_STATUS: Record<StatusKind, string> = {
  EN_PROCESO: '#77BB2A33',
  PROXIMAMENTE: '#77BB2A33',
  PAUSA: '#AA182C33',
  FINALIZADO: '#00B4CE33',
};

const TEXT_BY_STATUS: Record<StatusKind, string> = {
  EN_PROCESO: 'En proceso',
  PROXIMAMENTE: 'Próximamente',
  PAUSA: 'Pausa',
  FINALIZADO: 'Finalizado',
};

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  return (
    <span
      className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
      style={{ backgroundColor: BG_BY_STATUS[status], color: '#1F2937' }}
    >
      {TEXT_BY_STATUS[status]}
    </span>
  );
};

export type { StatusKind };


