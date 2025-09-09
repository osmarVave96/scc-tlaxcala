import { memo, useCallback, useMemo } from 'react';
import { Button } from "../ui/button"
import { InfoCard } from "../ui/info-card"
import { ISectionCards } from "@/types/settings"
import { OptimizedImageDisplay } from "../ui/optimized-image-display";
import { useSettings } from '@/hooks/useSettings';
import { ArrowRightIcon } from 'lucide-react';

interface SectionCardsProps {
  cards?: ISectionCards;
  withBackground?: boolean;
  idSection?: string;
  withIcon?: boolean;
}

const SectionCards = memo<SectionCardsProps>(({ cards, withBackground = false, idSection = 'section-cards', withIcon = false }) => {
  const { siteSettings } = useSettings();

  // Memoizar el array ordenado para evitar re-sorting en cada render
  const sortedItems = useMemo(() => {
    return cards?.items?.sort((a, b) => a.order - b.order) || [];
  }, [cards?.items]);

  // Memoizar classNames dinámicos
  const sectionClassName = useMemo(() => {
    return `${withBackground ? 'bg-gray-100' : ''}`;
  }, [withBackground]);

  const containerClassName = useMemo(() => {
    return `container mx-auto px-4 text-center ${withIcon ? 'py-8 md:py-16' : 'py-16 md:py-24'}`;
  }, [withIcon]);

  const gridClassName = useMemo(() => {
    const itemsLength = sortedItems.length;
    return `grid grid-cols-1 md:grid-cols-3 ${itemsLength >= 4 ? 'lg:grid-cols-4' : `lg:grid-cols-${itemsLength || 1}`} mb-8 justify-items-center place-content-center gap-5 mx-auto max-w-6xl`;
  }, [sortedItems.length]);

  const handleButtonClick = useCallback(( url: string ) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  }, []);

  if (!cards) {
    return null;
  }

  return (
    <section id={idSection} className={sectionClassName}>
        {withIcon && (
            <div className="flex flex-row gap-4 justify-center items-center pt-8">
                <OptimizedImageDisplay imagePath={siteSettings?.icon1} alt={cards.title_1} className="w-20 h-20" />
            </div>
        )}
      <div className={containerClassName}>
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-title mb-4">{cards.title_1}</h2>
        </div>

        <div className="mb-8">
            {cards.title_2 && <p className="text-xl text-subtitle max-w-3xl mx-auto mb-4">{cards.title_2}</p>}
            {cards.title_3 && <p className="text-lg text-paragraph max-w-4xl mx-auto">{cards.title_3}</p>}
        </div>
        
        <div className={gridClassName}>
          {sortedItems.map((card, index) => (
            <InfoCard 
              key={`${card.title}-${index}`} 
              {...card} 
              image={card.image} 
            />
          ))}
        </div>

        {(cards.button_text || cards.boton_texto) && cards.button_action_url && (
          <Button 
            size="lg" 
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 cursor-pointer" 
            onClick={() => handleButtonClick(cards.button_action_url)}
          >
            {cards.button_text || cards.boton_texto}
          </Button>
        )}

        {
          (cards.button_text1 || cards.button1_action_url) && (
            <div className="flex flex-row justify-center items-center gap-4">
              <a onClick={() => handleButtonClick(cards.button1_action_url)} className="cursor-pointer w-[219px] h-6 font-normal text-lg leading-6 flex items-center text-[#4262FF]" style={{ fontFamily: 'Inter' }}>
                {cards.button_text1}
                <ArrowRightIcon className="w-4 h-4" />
              </a>
            </div>
          )
        }
      </div>
    </section>
  );
});

SectionCards.displayName = 'SectionCards';

export default SectionCards;