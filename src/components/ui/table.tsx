import React from 'react';
import { HoverChipInfo } from './hover-chip';
import { StatusKind } from './status-badge';

export interface TableColumn<T> {
  key: string;
  header: string;
  render?: (row: T) => React.ReactNode;
  className?: string;
}

export interface TableRowData {
  avance: string;
  fecha: string;
  aporte: Array<{ label: string; info?: HoverChipInfo }>; // chips
  medida: string;
  status: StatusKind;
}

interface TableProps<T extends TableRowData> {
  columns: TableColumn<T>[];
  data: T[];
  emptyMessage?: string;
}

export function Table<T extends TableRowData>({ columns, data, emptyMessage = 'Sin resultados' }: TableProps<T>) {
  return (
    <div className="w-full overflow-x-auto rounded-xl border border-gray-200 bg-white">
      <table className="min-w-full table-auto text-left">
        <thead>
          <tr className="bg-gray-50 text-sm text-[#572772]">
            {columns.map((c) => (
              <th key={c.key} className={`px-4 py-3 font-semibold ${c.className || ''}`}>{c.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 && (
            <tr>
              <td colSpan={columns.length} className="px-4 py-8 text-center text-sm text-gray-500">{emptyMessage}</td>
            </tr>
          )}
          {data.map((row, idx) => (
            <tr key={idx} className="border-t border-gray-100 align-top">
              {columns.map((c) => (
                <td key={c.key} className={`px-4 py-4 text-sm text-paragraph ${c.className || ''}`}>
                  {c.render ? c.render(row) : (row as Record<string, unknown>)[c.key] as React.ReactNode}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
