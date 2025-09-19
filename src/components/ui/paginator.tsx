import React from 'react';

interface PaginatorProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Paginator: React.FC<PaginatorProps> = ({ page, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const go = (p: number) => {
    const next = Math.min(Math.max(1, p), totalPages);
    if (next !== page) onPageChange(next);
  };

  return (
    <div className="flex items-center justify-center gap-2">
      <button
        onClick={() => go(page - 1)}
        className="rounded-full bg-[#F7931E] px-4 py-2 text-white disabled:opacity-50"
        disabled={page <= 1}
      >
        Ir a la anterior
      </button>
      <div className="flex items-center gap-1">
        {pages.map((p) => (
          <button
            key={p}
            onClick={() => go(p)}
            className={`h-8 w-8 rounded-md text-sm ${
              p === page ? 'bg-[#572772] text-white' : 'bg-white text-[#572772] border border-gray-300'
            }`}
          >
            {p}
          </button>
        ))}
      </div>
      <button
        onClick={() => go(page + 1)}
        className="rounded-full bg-[#F7931E] px-4 py-2 text-white disabled:opacity-50"
        disabled={page >= totalPages}
      >
        Ir a la siguiente
      </button>
    </div>
  );
};


