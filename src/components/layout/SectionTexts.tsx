import { IItemsSectionCards } from "@/types/settings";
import { useSettings } from "@/hooks/useSettings";
import { OptimizedImageDisplay } from "../ui/optimized-image-display"
import { ContentText } from "../ui/ContentText";
import { useCallback, useMemo, memo } from "react";
import { Button } from "../ui/button";


interface SectionTextsProps {
    id?: number;
    items?: Array<IItemsSectionCards>;
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
  }
  

const SectionTextsComponent = ({ id, title_1, title_2, title_3, items, button_text, boton_texto, button_action_url, withBackground = false, withIcon = false }: SectionTextsProps) => {
    const { siteSettings } = useSettings();

    // Memoizar el array ordenado para evitar re-sorting en cada render
    const sortedItems = useMemo(() => {
        return items?.sort((a, b) => a.order - b.order) || [];
    }, [items]);

    // Memoizar classNames dinámicos
    const sectionClassName = useMemo(() => {
        return `${withBackground ? 'bg-gray-100' : ''}`;
    }, [withBackground]);

    const containerClassName = useMemo(() => {
        return `container mx-auto px-4 text-center ${withIcon ? 'py-8 md:py-16' : 'py-16 md:py-24'}`;
    }, [withIcon]);

    const handleButtonClick = useCallback(() => {
        if (button_action_url) {
            window.open(button_action_url, "_blank", "noopener,noreferrer");
        }
    }, [button_action_url]);
    return (
        <section id={id?.toString()} className={sectionClassName}>
            {withIcon && (
                <div className="flex flex-row gap-4 justify-center items-center pt-8">
                    <OptimizedImageDisplay imagePath={siteSettings?.icon1} alt={title_1} className="w-20 h-20" />
                </div>
            )}
            <div className={containerClassName}>
                <div className="text-center mb-8">
                    <h2 className="text-4xl md:text-5xl font-bold text-title mb-4">{title_1}</h2>
                </div>

                <div className="mb-8">
                    {title_2 && <p className="text-xl text-subtitle max-w-3xl mx-auto mb-4">{title_2}</p>}
                </div>
        
                <div className="flex flex-row justify-center items-start pl-[10px] pr-[10.1406px] w-[1214.18px] h-[296px] flex-none order-2 mb-8 justify-items-center place-content-center gap-5 mx-auto max-w-6xl">
                    {sortedItems.map((card, index) => (
                        <ContentText 
                        key={`${card.title}-${index}`} 
                        {...card} 
                        title={card.title}
                        paragraph={card.description}
                        />
                    ))}
                </div>
                <div className="mb-8">
                    {title_3 && <h3 className="text-2xl font-bold text-[#572772] max-w-[705px] mx-auto leading-8" style={{ fontFamily: 'Poppins' }}>{title_3}</h3>}
                </div>

                {button_action_url && (
                    <Button 
                        size="lg" 
                        className="bg-orange-500 hover:bg-orange-600 text-white px-8 cursor-pointer" 
                        onClick={handleButtonClick}
                    >
                        {button_text || boton_texto}
                    </Button>
                )}
            </div>
        </section>
    )
}

// Memoizar el componente para evitar re-renders innecesarios
export const SectionTexts = memo(SectionTextsComponent);