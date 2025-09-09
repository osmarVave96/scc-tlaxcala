import { useMemo } from 'react';
import { buildImageUrl } from '@/lib/utils';

/**
 * Hook optimizado para manejar URLs de imágenes de forma consistente
 * @param imagePath - Ruta de la imagen desde la API
 * @param fallbackUrl - URL de fallback si no hay imagen
 * @returns URL completa de la imagen
 */
export const useImageUrl = (imagePath?: string | null, fallbackUrl?: string) => {
  return useMemo(() => {
    return buildImageUrl(imagePath, fallbackUrl);
  }, [imagePath, fallbackUrl]);
};
