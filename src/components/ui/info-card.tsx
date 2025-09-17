import { memo } from 'react';
import { IItemsSectionCards } from "@/types/settings";
import { OptimizedImageDisplay } from "./optimized-image-display";

interface InfoCardProps extends IItemsSectionCards {
  className?: string;
}

export const InfoCard = memo<InfoCardProps>(({ 
  title = "", 
  description = "", 
  image, 
  className = "" 
}) => {
  return (
    <div className={`bg-white rounded-xl shadow-sm self-center overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col ${className}`} style={{ maxWidth: '300px' }}>
      <div className="aspect-video relative">
        <OptimizedImageDisplay imagePath={image} alt={title} className="w-full h-32 sm:h-36 md:h-40 lg:h-44 xl:h-[180px]" />
      </div>
      <div className="pt-4 pb-2 px-4 flex-1 flex flex-col">
        <h3 className="text-md font-semibold text-lg text-title-secondary mb-3">{title}</h3>
        <p className="text-paragraph text-sm leading-relaxed flex-1">{description}</p>
      </div>
    </div>
  );
});

InfoCard.displayName = 'InfoCard'; 
