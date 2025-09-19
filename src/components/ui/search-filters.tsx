import React from 'react';
import { Input } from './input';

interface SearchFiltersProps {
  keyword: string;
  dependency: string;
  date: string;
  onChange: (patch: Partial<{ keyword: string; dependency: string; date: string }>) => void;
}

export const SearchFilters: React.FC<SearchFiltersProps> = ({ keyword, dependency, date, onChange }) => {
  return (
    <div className="flex w-full flex-col gap-3 sm:flex-row">
      <div className="flex-1">
        <Input
          placeholder="búsqueda por palabra clave"
          value={keyword}
          onChange={(e) => onChange({ keyword: e.target.value })}
          className="h-11 rounded-full border-gray-200 bg-white"
        />
      </div>
      <div className="flex-1">
        <Input
          placeholder="Dependencias"
          value={dependency}
          onChange={(e) => onChange({ dependency: e.target.value })}
          className="h-11 rounded-full border-gray-200 bg-white"
        />
      </div>
      <div className="w-48">
        <Input
          type="date"
          placeholder="MM/DD/YYYY"
          value={date}
          onChange={(e) => onChange({ date: e.target.value })}
          className="h-11 rounded-full border-gray-200 bg-white"
        />
      </div>
    </div>
  );
};


