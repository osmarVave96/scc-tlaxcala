import React from 'react';

export interface HoverChipInfo {
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
}

interface HoverChipProps {
  label: string;
  info?: HoverChipInfo;
  className?: string;
}

const CHIP_COLOR = '#00B4CE';

export const HoverChip: React.FC<HoverChipProps> = ({ label, info, className = '' }) => {
  return (
    <div className={`relative inline-block group ${className}`}>
      <div
        className="px-2.5 py-1 rounded-full border text-sm select-none cursor-default"
        style={{ borderColor: CHIP_COLOR, color: CHIP_COLOR }}
      >
        {label}
      </div>

      {info && (
        <div className="absolute left-1/2 z-20 hidden -translate-x-1/2 pt-2 group-hover:block">
          <div className="w-64 rounded-lg border border-gray-200 bg-white p-4 shadow-xl">
            <h4 className="mb-1 text-sm font-semibold text-[#572772]">{info.title}</h4>
            <p className="mb-2 text-xs text-paragraph">{info.description}</p>
            {info.href && (
              <a
                href={info.href}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-medium"
                style={{ color: CHIP_COLOR }}
              >
                {info.linkLabel || 'Ver más...'}
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default HoverChip;


