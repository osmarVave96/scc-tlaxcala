import React, { memo, useCallback, useMemo } from 'react';
import { buildImageUrl } from '@/lib/utils';
import errorImage from '@/assets/placeholder/error.png';

interface OptimizedImageDisplayProps {
  imagePath?: string | null;
  alt?: string;
  className?: string;
  fallbackUrl?: string;
  props?: React.ImgHTMLAttributes<HTMLImageElement>;
}

/**
 * Componente optimizado que evita re-renders innecesarios
 * usando useMemo para la URL de la imagen y useCallback para los handlers
 */
export const OptimizedImageDisplay = memo<OptimizedImageDisplayProps>(({
  imagePath,
  alt = 'Image',
  className = '',
  fallbackUrl = errorImage,
  props
}) => {
  // Memoizar la URL de la imagen para evitar recálculos innecesarios
  const imageUrl = useMemo(() => {
    return buildImageUrl(imagePath, fallbackUrl);
  }, [imagePath, fallbackUrl]);

  // Memoizar el handler de error para evitar recreaciones
  const handleError = useCallback((e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    if (target.src !== fallbackUrl) {
      target.src = fallbackUrl;
    }
  }, [fallbackUrl]);

  // Memoizar las props del componente para evitar re-renders
  const imageProps = useMemo(() => ({
    src: imageUrl,
    alt,
    className,
    onError: handleError,
    loading: "lazy" as const,
    ...props
  }), [imageUrl, alt, className, handleError, props]);

  return <img {...imageProps} />;
});

OptimizedImageDisplay.displayName = 'OptimizedImageDisplay';
