import { IItemsSectionCards } from "@/types/settings";
import { Chip } from '../ui/Chip';
import { Button } from "../ui/button"
import { useCallback, useMemo, memo } from "react";


interface SectionChipsProps {
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

const SectionChipsComponent = ({ id, title_1, title_2, title_3, items, button_text, boton_texto, button_action_url, withBackground = false}: SectionChipsProps) => {
    // Memoizar classNames dinámicos
    const sectionClassName = useMemo(() => {
        return `${withBackground ? 'bg-gray-100' : ''}`;
    }, [withBackground]);

    const handleButtonClick = useCallback(() => {
        if (button_action_url) {
            window.open(button_action_url, "_blank", "noopener,noreferrer");
        }
    }, [button_action_url]);

    return (
        <section id={id?.toString()} className={sectionClassName}>
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
                        <Chip key={chip.id} label={chip.title} />
                    ))}
                </div>

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