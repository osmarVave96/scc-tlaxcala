import { memo, useMemo, useState, useCallback } from "react";
import { OptimizedImageDisplay } from "../ui/optimized-image-display";
import { IItemsSectionCards } from "@/types/settings";
import { useSettings } from "@/hooks/useSettings";
import { Pie, PieChart, ResponsiveContainer } from "recharts";
import { Separator } from "../ui/separator";
import greenPower from "@/assets/svg/green-powersvg.svg";

type DataItem = {
  name: string;
  icon: string;
  color: string;
  hoverColor: string;
  value: number;
  fill?: string;
};

interface PieLabelProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  payload: DataItem;
}

const RADIAN = Math.PI / 180;

interface SectionChartProps {
    idSection?: number | string;
    id?: number | string;
    subsections?: Array<IItemsSectionCards>;
    section?: string;
    title_1?: string;
    title_2?: string;
    title_3?: string;
    boton_texto?: string;
    button_text?: string;
    button_action_url?: string;
    button1_action_url?: string;
    button_text1?: string;
    button2_action_url?: string;
    button_text2?: string;
    withBackground?: boolean;
    withIcon?: boolean;
    withSubsections?: boolean;
    sectionClassName?: string;
}

const SectionChartComponent = ({ id, withIcon = false, idSection = 'section-chart', sectionClassName = '', title_1 = '', title_2 = '', title_3 = '' }: SectionChartProps) => {
  const { siteSettings } = useSettings();
  const data = useMemo<DataItem[]>(() => ([
      { name: 'Eje 3', icon: greenPower, color: '#D0B787', hoverColor: '#77B82E', value: 20 },
      { name: 'Eje 2', icon: greenPower, color: '#8689A1', hoverColor: '#77B82E', value: 20 },
      { name: 'Eje 1', icon: greenPower, color: '#D0B787', hoverColor: '#77B82E', value: 20 },
      { name: 'Eje 7', icon: greenPower, color: '#D0B787', hoverColor: '#77B82E', value: 20 },
      { name: 'Eje 6', icon: greenPower, color: '#8689A1', hoverColor: '#77B82E', value: 20 },
      { name: 'Eje 5', icon: greenPower, color: '#D0B787', hoverColor: '#77B82E', value: 20 },
      { name: 'Eje 4', icon: greenPower, color: '#8689A1', hoverColor: '#77B82E', value: 20 },
  ]), []);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(2);

  const chartData = useMemo(() => {
    return data.map((item, index) => ({
      ...item,
      fill:
        index === selectedIndex || index === hoveredIndex
          ? item.hoverColor
          : item.color,
    }));
  }, [data, hoveredIndex, selectedIndex]);

  const handleMouseEnter = useCallback((_: unknown, index: number) => {
    setHoveredIndex(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredIndex(null);
  }, []);

  const handleClick = useCallback((_: unknown, index: number) => {
    console.log('index', index);
    setSelectedIndex(index);
  }, []);

  const renderSliceLabel = useCallback((props: PieLabelProps) => {
    const { cx, cy, midAngle, innerRadius, outerRadius, payload } = props;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.4;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    const rotation = -midAngle + 90;
    return (
      <g transform={`translate(${x},${y}) rotate(${rotation})`} pointerEvents="none" textAnchor="middle">
        <text dy="12" fill="#FFFFFF" fontSize="12" fontWeight={600}>
          {payload.name}
        </text>
        <image href={payload.icon} width="25" height="25" x={-11} y={-28} />
      </g>
    );
  }, []);

  return (
    <section id={idSection?.toString()} className={sectionClassName}>
        {withIcon && (
        <div className="flex flex-row gap-4 justify-center items-center pt-8">
            <OptimizedImageDisplay imagePath={siteSettings?.icon1} alt={title_1} className="w-20 h-20" />
        </div>
        )}
        <div className="container mx-auto px-4 text-center py-16 md:py-24">
            <div className="text-center mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-title mb-4">{title_1}</h2>
            </div>

            <div className="mb-5">
                {title_2 && <p className="text-xl text-subtitle max-w-3xl mx-auto mb-4">{title_2}</p>}
                {title_3 && <p className="text-lg text-paragraph max-w-4xl mx-auto">{title_3}</p>}
            </div>


            <div id={`section-content-${id}`} className="flex flex-col lg:flex-row justify-center  items-center gap-8 max-w-6xl mx-auto mt-12">
                <div className="flex flex-col items-center gap-4 flex-shrink-0">
                    <div className="relative w-[320px] h-[320px] sm:w-[360px] sm:h-[360px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={chartData}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={85}
                                    outerRadius={150}
                                    stroke="#ffffff"
                                    strokeWidth={1}
                                    isAnimationActive={false}
                                    labelLine={false}
                                    label={renderSliceLabel}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    onClick={handleClick}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <p className="text-center font-bold text-[#F7931E] leading-6 w-44 sm:w-52">
                                Da click en
                                <br />
                                el eje que
                                <br />
                                quieres consultar
                            </p>
                        </div>
                    </div>
                </div>
                {typeof selectedIndex === 'number' && (
                    <div className="flex flex-col justify-start items-start gap-6 text-left flex-1 max-w-2xl">
                        <h3 className="text-2xl font-bold text-[#572772] max-w-[705px] mx-auto leading-8" style={{ fontFamily: 'Poppins' }}>
                            {data[selectedIndex].name}
                        </h3>
                        <h4 className="text-xl font-bold text-[#572772] max-w-[705px] mx-auto leading-8" style={{ fontFamily: 'Poppins' }}>
                            Regulación, control y reducción como criterios de mitigación de emisiones de gases y compuestos de efecto invernadero en el Estado de Tlaxcala
                        </h4>
                        <Separator />
                        <p className="font-light text-base leading-[29px] text-paragraph whitespace-pre-line">
                            Fortalecer la transparencia, la rendición de cuentas y la inclusión de la ciudadanía en la toma de decisiones. Se promueve un gobierno abierto, eficiente y cercano a la gente.
                        </p>
                    </div>
                )}
            </div>
        </div>
    </section>
  );
};


export const SectionChart = memo( SectionChartComponent);