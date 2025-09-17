import { memo, useCallback } from 'react';
import { IItemsSectionCards } from "@/types/settings";
import { OptimizedImageDisplay } from "./optimized-image-display";
import { Button } from './button';

interface InfoCardProps extends IItemsSectionCards {
  className?: string;
  button_text?: string;
  boton_texto?: string;
  button_action_url?: string;
}

export const InfoCard = memo<InfoCardProps>(({ 
  title = "", 
  description = "", 
  image, 
  className = "",
  button_text,
  boton_texto,
  button_action_url
}) => {
  const handleButtonClick = useCallback(() => {
    if (button_action_url) {
      window.open(button_action_url, "_blank", "noopener,noreferrer");
    }
  }, [button_action_url]);
  return (
    <div className={`bg-white rounded-xl shadow-sm self-center overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col ${className}`} style={{ maxWidth: '300px' }}>
      <div className="aspect-video relative">
        <OptimizedImageDisplay imagePath={image} alt={title} className="w-full h-32 sm:h-36 md:h-40 lg:h-44 xl:h-[180px]" />
      </div>
      <div className="pt-4 pb-2 px-4 flex flex-col">
        <h3 className="text-md font-semibold text-lg text-title-secondary mb-3 overflow-hidden leading-7 min-h-[56px] max-h-[56px]">{title}</h3>
        <p className="text-paragraph text-sm leading-5 overflow-hidden min-h-[60px] max-h-[60px]">{description}</p>
      </div>
      <div className="pt-2 pb-4 px-4 h-[72px] flex items-center"> 
        {(button_text || boton_texto) && button_action_url && (
          <Button 
            size="lg" 
            className="bg-white border border-orange-500 text-orange-500 px-8 py-3  hover:bg-[#FDFCF1]  cursor-pointer rounded-md  hover:text-[#F08018] transition-colors duration-200 w-full" 
            onClick={handleButtonClick}
          >
            {button_text || boton_texto}
          </Button>
        )}
      </div>
    </div>
  );
});

InfoCard.displayName = 'InfoCard'; 
