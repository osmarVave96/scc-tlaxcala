import { memo, useMemo, useState, useCallback, useEffect, useRef } from "react";
import { IItemsSectionCards, IPaccet, ItemPaccet } from "@/types/settings";
import { Pie, PieChart, ResponsiveContainer } from "recharts";
import { Separator } from "../ui/separator";
import greenPower from "@/assets/svg/green-powersvg.svg";
import { getApiBaseUrl } from "@/config/environment";
import { Chip } from '../ui/Chip';


interface PieLabelProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  payload: IPaccet;
}

const RADIAN = Math.PI / 180;

interface SectionChartProps {
    idSection?: number | string;
    id?: number | string;
    sectionClassName?: string;
    dataSection?: IPaccet[];
}

export const Chart = ({ id, idSection = 'section-chart', sectionClassName = '', dataSection = [] }: SectionChartProps) => {
    const data = useMemo<IPaccet[]>(() => {
      const base: IPaccet[] = dataSection?.length > 0 ? dataSection : [
         
        { title: 'Eje 3', icon: greenPower, color: '#8689A1', hoverColor: '#77B82E', value: 20, id: 2, items: [], description1: '', description2: '', order: 3 },
        { title: 'Eje 2', icon: greenPower, color: '#D0B787', hoverColor: '#77B82E', value: 20, id: 1, items: [], description1: '', description2: '', order: 2 },
        { title: 'Eje 1', icon: greenPower, color: '#D0B787', hoverColor: '#77B82E', value: 20, id: 1, items: [
          {
            "id": 10,
            "title": "Medida 6",
            "description": "lorem ipsumm",
            "order": 6,
            "paccet": 5
          },
          {
            "id": 9,
            "title": "Medida 5",
            "description": "lorem ipsumm",
            "order": 5,
            "paccet": 5
          },
          {
            "id": 8,
            "title": "Medida 4",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, ab temporibus aliquam tenetur maxime magnam, quibusdam labore tempore similique dignissimos sunt dolore totam aliquid vel velit voluptate incidunt sit laboriosam.",
            "order": 4,
            "paccet": 5
          },
          {
            "id": 7,
            "title": "Medida 3",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dolor nemo quo veritatis vitae officia exercitationem. Quis quisquam ratione totam at delectus deserunt quaerat et, debitis veritatis quas consequuntur! Quam?",
            "order": 3,
            "paccet": 5
          },
          {
            "id": 6,
            "title": "Medida 2",
            "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad a, expedita saepe soluta vitae quidem nostrum, necessitatibus optio omnis molestiae repellendus culpa laudantium sint ipsum? Recusandae deserunt expedita sapiente ipsa.",
            "order": 2,
            "paccet": 5
          },
          {
            "id": 5,
            "title": "Medida 1.1",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ab, dolorem vero vel nesciunt omnis odio nostrum architecto asperiores repudiandae ipsa animi blanditiis enim quisquam doloremque eaque facere? Sapiente, beatae.",
            "order": 1,
            "paccet": 5
          },
          {
            "id": 4,
            "title": "Medida 1",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, vitae sed obcaecati delectus perferendis amet distinctio maiores sint ipsam, impedit fuga, recusandae laboriosam quo? Quasi dolorem unde minima quod quos!",
            "order": 0,
            "paccet": 5
          },
          {
            "id": 11,
            "title": "Medida 7",
            "description": "lorem ipsumm",
            "order": 7,
            "paccet": 5
          },
          {
            "id": 12,
            "title": "Medida 8",
            "description": "lorem ipsum dolor",
            "order": 8,
            "paccet": 5
          },
          {
            "id": 13,
            "title": "Medida 9",
            "description": "Text 2",
            "order": 9,
            "paccet": 5
          },
    ], 
    description1: 'Regulación, control y reducción como criterios de mitigación de emisiones de gases y compuestos de efecto invernadero en el Estado de Tlaxcala', 
    description2: 'Fortalecer la transparencia, la rendición de cuentas y la inclusión de la ciudadanía en la toma de decisiones. Se promueve un gobierno abierto, eficiente y cercano a la gente.', 
    order: 1 },
   
        { title: 'Eje 7', icon: greenPower, color: '#D0B787', hoverColor: '#77B82E', value: 20, id: 7, items: [], description1: '', description2: '', order: 7 },
        { title: 'Eje 6', icon: greenPower, color: '#8689A1', hoverColor: '#77B82E', value: 20, id: 6, items: [], description1: '', description2: '', order: 6 },
        { title: 'Eje 5', icon: greenPower, color: '#D0B787', hoverColor: '#77B82E', value: 20, id: 5, items: [], description1: '', description2: '', order: 5 },
        { title: 'Eje 4', icon: greenPower, color: '#8689A1', hoverColor: '#77B82E', value: 20, id: 4, items: [], description1: '', description2: '', order: 4 },
      ];

      const mapped = base.map((item) => ({
        ...item,
        icon: `${getApiBaseUrl()}${item.icon}` || greenPower,
        color: item.color || '#D0B787',
        hoverColor: item.hoverColor || '#77B82E',
        value: item.value || 20,
        items: (item.items || []).slice().sort((a, b) => (a.order ?? 0) - (b.order ?? 0)),
      }));

      // Custom arrangement (0-based orders in API):
      // - index 2 -> order 0
      // - index 1 -> order 1
      // - index 0 -> order 2
      // - last index -> order 3
      // - remaining orders (>=4) placed ascending while filling indices from right to left

      const pool = mapped
        .slice()
        .sort((a, b) => (a.order ?? Number.MAX_SAFE_INTEGER) - (b.order ?? Number.MAX_SAFE_INTEGER));

      const takeByOrder = (ord: number) => {
        const idx = pool.findIndex((it) => (it.order ?? -1) === ord);
        if (idx >= 0) {
          const [it] = pool.splice(idx, 1);
          return it;
        }
        return undefined;
      };

      const result: IPaccet[] = new Array(mapped.length);
      if (result.length >= 3) result[2] = takeByOrder(0) as IPaccet | undefined as IPaccet;
      if (result.length >= 2) result[1] = takeByOrder(1) as IPaccet | undefined as IPaccet;
      if (result.length >= 1) result[0] = takeByOrder(2) as IPaccet | undefined as IPaccet;
      if (result.length >= 1) result[result.length - 1] = takeByOrder(3) as IPaccet | undefined as IPaccet;

      // Fill remaining slots from right to left with ascending orders (>=4)
      let writeIdx = result.length - 2; // start before last
      for (const it of pool) {
        // find the next empty slot moving leftwards, but skip indices < 3 reserved area
        while (writeIdx >= 3 && result[writeIdx] !== undefined) {
          writeIdx--;
        }
        if (writeIdx >= 3) {
          result[writeIdx] = it;
          writeIdx--;
        } else {
          // If there are still empty slots in 0..2 due to missing orders, fill them left-to-right
          const fallbackIdx = result.findIndex((v) => v === undefined);
          if (fallbackIdx !== -1) {
            result[fallbackIdx] = it;
          } else {
            // As a last resort (shouldn't happen), push to the end
            result.push(it);
          }
        }
      }

      return result.filter((v) => v !== undefined);
    }, [dataSection]);
  
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(2);
    const [selectedChips, setSelectedChips] = useState<ItemPaccet[] | []>([]);
    const [selectedChip, setSelectedChip] = useState<ItemPaccet | null>(null);
    const chipsContainerRef = useRef<HTMLDivElement | null>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);
  
    const handleChipClick = useCallback((chip: ItemPaccet) => {
      setSelectedChip(chip);
    }, []);
    useEffect(() => {
      if (selectedIndex !== null) {
        setSelectedChips(data[selectedIndex].items?.sort((a, b) => a.order - b.order));
        setSelectedChip(data[selectedIndex].items?.[0] || null);
      }
    }, [selectedIndex, data]);
  
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
      setSelectedIndex(index);
    }, []);
  
    const scrollChips = useCallback((direction: 'left' | 'right') => {
      const container = chipsContainerRef.current;
      if (!container) return;
      const scrollAmount = Math.max(container.clientWidth * 0.6, 240);
      container.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }, []);
  
    const updateScrollButtons = useCallback(() => {
      const container = chipsContainerRef.current;
      if (!container) return;
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
    }, []);
  
    useEffect(() => {
      updateScrollButtons();
    }, [selectedChips, updateScrollButtons]);
  
    useEffect(() => {
      const onResize = () => updateScrollButtons();
      window.addEventListener('resize', onResize);
      return () => window.removeEventListener('resize', onResize);
    }, [updateScrollButtons]);
  
    const renderSliceLabel = useCallback((props: PieLabelProps) => {
      const { cx, cy, midAngle, innerRadius, outerRadius, payload } = props;
      const radius = innerRadius + (outerRadius - innerRadius) * 0.4;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);
      const rotation = -midAngle + 90;
      return (
        <g transform={`translate(${x},${y}) rotate(${rotation})`} pointerEvents="none" textAnchor="middle">
          <text dy="12" fill="#FFFFFF" fontSize="12" fontWeight={600}>
            {payload.title}
          </text>
          <image href={payload.icon} width="25" height="25" x={-11} y={-28} />
        </g>
      );
    }, []);
  
    return (
      <section id={idSection?.toString()} className={sectionClassName}>
          <div className="container mx-auto px-4 text-center py-8 md:py-16">
              <div id={`section-content-${id}`} className="flex flex-col lg:flex-row justify-center  items-center gap-8 max-w-6xl mx-auto ">
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
                        <h3 className="text-2xl font-bold text-[#77BB2A] max-w-[705px] w-full leading-8">
                          {data[selectedIndex].title}
                        </h3>
                        <h4 className="text-xl font-bold text-[#572772] max-w-[705px] w-full leading-8">
                          {data[selectedIndex].description1}
                        </h4>
                        <Separator />
                        <div className="w-full relative">
                          { canScrollLeft && <button
                            type="button"
                            aria-label="Desplazar izquierda"
                            onClick={() => scrollChips('left')}
                            className={`${canScrollLeft ? '' : 'hidden'} absolute left-0 top-1/2 -translate-y-1/2 z-10 h-7 w-7 rounded-full border bg-white/80 text-[#572772] hover:bg-[#FDFCF1] flex items-center justify-center`}
                          >
                            ‹
                          </button>}
                          <div
                            ref={chipsContainerRef}
                            className={`flex flex-row flex-nowrap items-center gap-4 overflow-x-auto no-scrollbar scroll-smooth ${canScrollLeft || canScrollRight ? 'px-9' : ''}`}
                            onScroll={updateScrollButtons}
                          >
                            {selectedChips?.map((chip) => (
                              <Chip
                                key={chip.id}
                                label={chip.title}
                                section={chip as unknown as IItemsSectionCards}
                                eventClick={handleChipClick as unknown as (section: IItemsSectionCards) => void}
                                isSelected={chip.id === selectedChip?.id}
                              />
                            ))}
                          </div>
                          <button
                            type="button"
                            aria-label="Desplazar derecha"
                            onClick={() => scrollChips('right')}
                            className={`${canScrollRight ? '' : 'hidden'} absolute right-0 top-1/2 -translate-y-1/2 z-10 h-7 w-7 rounded-full border bg-white/80 text-[#572772] hover:bg-[#FDFCF1] flex items-center justify-center`}
                          >
                            ›
                          </button>
                        </div>
                        <p className="font-light text-base leading-[29px] text-paragraph whitespace-pre-line">
                          {selectedChip?.description}
                        </p>
                      </div>
                  )}
              </div>
          </div>
      </section>
    );
};

export const SectionChart = memo( Chart);
