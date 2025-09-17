import { IItemsSectionCards } from "@/types/settings";
import { Chip } from '../ui/Chip';
import { Button } from "../ui/button"
import { useCallback, useMemo, memo, useState, useEffect } from "react";
import { OptimizedImageDisplay } from "../ui/optimized-image-display";
import { useSettings } from "@/hooks/useSettings";


interface SectionChipsProps {
  idSection?: number | string;
  id?: number | string;
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
  withSubsections?: boolean;
}

const SectionChipsComponent = ({ idSection, id, title_1, title_2, title_3, items, button_text, boton_texto, button_action_url, withBackground = false, withIcon = false, withSubsections = false}: SectionChipsProps) => {
    const { siteSettings } = useSettings();
    const [subsections, setSubsections] = useState<IItemsSectionCards | null>(null);
    // Memoizar classNames dinámicos
    const sectionClassName = useMemo(() => {
        return `${withBackground ? 'bg-gray-100' : ''}`;
    }, [withBackground]);

    const handleButtonClick = useCallback(() => {
        if (subsections?.button_action_url) {
            window.open(subsections?.button_action_url, "_blank", "noopener,noreferrer");
        }
    }, [subsections?.button_action_url]);

    useEffect(() => {
        if (withSubsections) {
            setSubsections(items?.[0] || null);
        }
    }, [items]);

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
                <div className=" flex flex-row justify-center items-center gap-4 mb-8">
                    {items?.map((chip) => (
                        <Chip key={chip.id} label={chip.title}
                        section={chip}
                        eventClick={withSubsections ? setSubsections : undefined}
                        isSelected={chip.id === subsections?.id}
                        id={chip.action_redirect || `section-content-${id}`} />
                    ))}
                </div>

                {/* Sección navegable para mostrar cuando se hace clic en chips */}
                {withSubsections && (
                    <div id={`section-content-${id}`} className="flex flex-col lg:flex-row justify-center  items-center gap-8 max-w-6xl mx-auto mt-12">
                        <div className="flex flex-col items-center gap-4 flex-shrink-0">
                            <OptimizedImageDisplay imagePath={subsections?.image} alt={subsections?.title} className="w-48 h-48 lg:w-56 lg:h-56 rounded-full object-cover" />
                        </div>
                        <div className="flex flex-col justify-start items-start gap-6 text-left flex-1 max-w-2xl">
                            <p className="font-light text-base leading-[29px] text-paragraph whitespace-pre-line">
                                {subsections?.description}
                            </p>
                            {(subsections?.button_text || subsections?.boton_texto) && subsections?.button_action_url && (
                                <Button 
                                    size="lg" 
                                    className="bg-white border border-orange-500 text-orange-500 px-8 py-3  hover:bg-[#FDFCF1]  cursor-pointer mt-6 rounded-md  hover:text-[#F08018] transition-colors duration-200 w-full" 
                                    onClick={handleButtonClick}
                                >
                                    {subsections?.button_text || subsections?.boton_texto}
                                </Button>
                            )}
                        </div>
                    </div>
                )}
                {(button_text || boton_texto) && button_action_url && (
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
    );
}

// Memoizar el componente para evitar re-renders innecesarios
export const SectionChips = memo(SectionChipsComponent);