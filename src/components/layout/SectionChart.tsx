import { useSettings } from "@/hooks";
import { memo, useMemo } from "react";
import { OptimizedImageDisplay } from "../ui/optimized-image-display";
import { Chart } from "../ui/chart";
import { IPaccet } from "@/types/settings";

interface SectionChartProps {
    idSection?: number | string;
    withIcon?: boolean;
    title_1?: string;
    dataSection?: IPaccet[];
    title_2?: string;
    title_3?: string;
    withBackground?: boolean;
}

const SectionChartComponent = ({ idSection, withIcon, title_1, dataSection, title_2, title_3, withBackground = false }: SectionChartProps) => {
    const { siteSettings } = useSettings();
    const sectionClassName = useMemo(() => {
        return `${withBackground ? 'bg-gray-100' : ''}`;
    }, [withBackground]);
  return (
    <section id={idSection?.toString()} className={sectionClassName}>
      {withIcon && (
        <div className="flex flex-row gap-4 justify-center items-center pt-8">
            <OptimizedImageDisplay imagePath={siteSettings?.icon1} alt={title_1} className="w-20 h-20" />
        </div>
      )}
      <div className="container mx-auto px-4 text-center py-8 md:py-10">
        <div className="text-center mb-2">
            <h2 className="text-4xl md:text-5xl font-bold text-title mb-4">{title_1}</h2>
        </div>

        <div className="mb-2">
            {title_2 && <p className="text-xl text-subtitle max-w-3xl mx-auto mb-4">{title_2}</p>}
            {title_3 && <p className="text-lg text-paragraph max-w-4xl mx-auto">{title_3}</p>}
        </div>
         <Chart dataSection={dataSection} />
      </div>
    </section>
  );
};

export const SectionChart = memo( SectionChartComponent);
