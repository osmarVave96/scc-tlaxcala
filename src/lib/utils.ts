import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { getApiBaseUrl } from "@/config/environment"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Builds a complete image URL from a relative path
 * @param imagePath - The relative image path from the API
 * @param fallbackUrl - Optional fallback URL if imagePath is empty or invalid
 * @returns Complete image URL or fallback URL
 */
export function buildImageUrl(imagePath?: string | null, fallbackUrl?: string): string {
  // If no image path is provided, return fallback or empty string
  if (!imagePath || imagePath.trim() === '') {
    return fallbackUrl || '';
  }

  // If the path is already a complete URL, return it as is
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }

  // If the path starts with a slash, remove it to avoid double slashes
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  
  // Build the complete URL using the API base URL
  return `${getApiBaseUrl()}${cleanPath}`;
}
