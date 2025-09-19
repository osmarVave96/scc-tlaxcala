import { useMemo, useState } from 'react';
import { Table, TableRowData } from '@/components/ui/table';
import { SearchFilters } from '@/components/ui/search-filters';
import { Paginator } from '@/components/ui/paginator';
import { Separator } from '@/components/ui/separator';
import { buildDefaultColumns } from '@/components/ui/table-columns';

interface SectionTableProps<T extends TableRowData> {
  title: string;
  description?: string;
  rows: T[];
  pageSize?: number;
}

export const SectionTable = <T extends TableRowData>({ title, description, rows, pageSize = 7 }: SectionTableProps<T>) => {
  const [filters, setFilters] = useState({ keyword: '', dependency: '', date: '' });
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const term = filters.keyword.trim().toLowerCase();
    const dep = filters.dependency.trim().toLowerCase();
    const date = filters.date.trim();

    return rows.filter((r) => {
      const inKeyword = !term || `${r.avance} ${r.medida}`.toLowerCase().includes(term);
      const dependencyField = (r as unknown as { dependency?: string }).dependency;
      const inDep = !dep || dependencyField?.toLowerCase?.().includes(dep);
      const inDate = !date || r.fecha === date || r.fecha.startsWith(date);
      return inKeyword && inDep && inDate;
    });
  }, [rows, filters]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const start = (page - 1) * pageSize;
  const pageRows = filtered.slice(start, start + pageSize);

  const columns = useMemo(() => buildDefaultColumns<T>(), []);

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-bold text-title">{title}</h2>
        {description && <p className="mt-2 text-lg text-subtitle">{description}</p>}
      </div>

      <div className="mb-4">
        <p className="mb-2 text-sm text-paragraph">Filtra como quieres ver la información:</p>
        <SearchFilters
          keyword={filters.keyword}
          dependency={filters.dependency}
          date={filters.date}
          onChange={(patch: Partial<{ keyword: string; dependency: string; date: string }>) => {
            setPage(1);
            setFilters((f) => ({ ...f, ...patch }));
          }}
        />
      </div>

      <Table columns={columns} data={pageRows} />

      <div className="my-6">
        <Separator />
      </div>

      <Paginator page={page} totalPages={totalPages} onPageChange={setPage} />
    </section>
  );
};

export default SectionTable;


