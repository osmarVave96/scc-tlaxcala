import { useState } from "react";
import { Play, Pause } from "lucide-react";

interface MediaDisplayProps {
  src: string;
  alt: string;
  type: "image" | "video";
  title?: string;
  subtitle?: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
}

export const MediaDisplay = ({
  src,
  alt,
  type,
  title,
  subtitle,
  className = "",
  autoPlay = false,
  loop = false,
  muted = true,
}: MediaDisplayProps) => {
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  const togglePlay = () => {
    const videoElement = document.getElementById(
      `video-${src}`
    ) as HTMLVideoElement;
    if (videoElement) {
      if (isPlaying) {
        videoElement.pause();
      } else {
        videoElement.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  if (type === "video") {
    return (
      <div className={`relative overflow-hidden rounded-lg ${className}`}>
        <video
          id={`video-${src}`}
          src={src}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          className="w-full h-full object-cover"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <button
            onClick={togglePlay}
            className="bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors"
          >
            {isPlaying ? (
              <Pause className="h-6 w-6 text-white" />
            ) : (
              <Play className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
        {(title || subtitle) && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            {title && (
              <h3 className="text-white font-semibold mb-1">{title}</h3>
            )}
            {subtitle && (
              <p className="text-white/80 text-sm">{subtitle}</p>
            )}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
      {(title || subtitle) && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          {title && (
            <h3 className="text-white font-semibold mb-1">{title}</h3>
          )}
          {subtitle && (
            <p className="text-white/80 text-sm">{subtitle}</p>
          )}
        </div>
      )}
    </div>
  );
}; 