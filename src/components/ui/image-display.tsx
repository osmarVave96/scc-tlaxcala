import React, { memo, useCallback } from 'react';
import { useImageUrl } from '@/hooks';
import marcoNormativoPlaceholder from '@/assets/placeholder/marcoNormativo.png';

interface ImageDisplayProps {
  imagePath?: string | null;
  alt?: string;
  className?: string;
  fallbackUrl?: string;
  props?: React.ImgHTMLAttributes<HTMLImageElement>;
}

/**
 * Componente optimizado que muestra imágenes usando el hook useImageUrl
 * para manejar imágenes de forma consistente en toda la aplicación
 */
export const ImageDisplay = memo<ImageDisplayProps>(({
  imagePath,
  alt = 'Image',
  className = '',
  fallbackUrl = marcoNormativoPlaceholder,
  props
}) => {
  const imageUrl = useImageUrl(imagePath, fallbackUrl);

  const handleError = useCallback((e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    // Fallback a imagen por defecto si la imagen falla al cargar
    const target = e.target as HTMLImageElement;
    if (target.src !== fallbackUrl) {
      target.src = fallbackUrl;
    }
  }, [fallbackUrl]);

  return (
    <img
      src={imageUrl}
      alt={alt}
      className={className}
      onError={handleError}
      loading="lazy"
      {...props}
    />
  );
});

ImageDisplay.displayName = 'ImageDisplay';
