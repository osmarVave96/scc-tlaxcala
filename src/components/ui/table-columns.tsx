import HoverChip from './hover-chip';
import { StatusBadge } from './status-badge';
import { TableColumn, TableRowData } from './table';

export function buildDefaultColumns<T extends TableRowData>(): TableColumn<T>[] {
  return [
    { key: 'avance', header: 'Avance', className: 'w-[40%]' },
    { key: 'fecha', header: 'Fecha' },
    {
      key: 'aporte',
      header: 'Aporte al PACET',
      render: (row: T) => (
        <div className="flex flex-wrap gap-2">
          {row.aporte.map((chip, index) => (
            <HoverChip key={index} label={chip.label} info={chip.info} />
          ))}
        </div>
      ),
    },
    { key: 'medida', header: 'Medida' },
    {
      key: 'status',
      header: 'Estatus',
      render: (row: T) => <StatusBadge status={row.status} />,
      className: 'text-right',
    },
  ];
}


