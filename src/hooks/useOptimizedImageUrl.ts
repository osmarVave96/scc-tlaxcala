import { useMemo, useCallback } from 'react';
import { buildImageUrl } from '@/lib/utils';

/**
 * Hook optimizado que evita re-renders innecesarios
 * usando useMemo para la URL de la imagen
 * @param imagePath - Ruta de la imagen desde la API
 * @param fallbackUrl - URL de fallback si no hay imagen
 * @returns URL completa de la imagen
 */
export const useOptimizedImageUrl = (imagePath?: string | null, fallbackUrl?: string) => {
  // Memoizar la URL para evitar recálculos innecesarios
  const imageUrl = useMemo(() => {
    return buildImageUrl(imagePath, fallbackUrl);
  }, [imagePath, fallbackUrl]);

  // Memoizar el handler de error para evitar recreaciones
  const handleImageError = useCallback((e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    if (target.src !== fallbackUrl) {
      target.src = fallbackUrl || '';
    }
  }, [fallbackUrl]);

  return {
    imageUrl,
    handleImageError
  };
};
