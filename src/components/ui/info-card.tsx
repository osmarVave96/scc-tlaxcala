import { MediaDisplay } from "./media-display";

interface InfoCardProps {
  title: string;
  description: string;
  media: {
    src: string;
    alt: string;
    type: "image" | "video";
  };
  className?: string;
}

export const InfoCard = ({ title, description, media, className = "" }: InfoCardProps) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${className}`}>
      <div className="aspect-video">
        <MediaDisplay
          src={media.src}
          alt={media.alt}
          type={media.type}
          className="w-full h-full"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}; 