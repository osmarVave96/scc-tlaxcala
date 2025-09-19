import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { OptimizedImageDisplay } from './optimized-image-display';

type CarouselItem = {
  id: string | number;
  title: string;
  imagePath?: string | null;
  linkHref?: string | null;
};

interface CarouselProps {
  items: CarouselItem[];
  className?: string;
  intervalMs?: number; // default 5000
  height?: number; // px height of the slide (default 420)
}

export const Carousel: React.FC<CarouselProps> = ({
  items,
  className = '',
  intervalMs = 5000,
  height = 420,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isHoveringRef = useRef(false);
  const timerRef = useRef<number | null>(null);
  const slidesCount = items.length;

  const goTo = useCallback((index: number) => {
    if (slidesCount === 0) return;
    const nextIndex = (index + slidesCount) % slidesCount;
    setActiveIndex(nextIndex);
  }, [slidesCount]);

  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  // Autoplay with pause on hover
  useEffect(() => {
    if (slidesCount <= 1) return;
    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      if (!isHoveringRef.current) {
        goNext();
      }
    }, intervalMs);
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [activeIndex, intervalMs, goNext, slidesCount]);

  const onMouseEnter = useCallback(() => {
    isHoveringRef.current = true;
  }, []);
  const onMouseLeave = useCallback(() => {
    isHoveringRef.current = false;
  }, []);

  // Keyboard navigation
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!containerRef.current) return;
      if (!containerRef.current.matches(':focus-within')) return;
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [goNext, goPrev]);

  const trackStyle = useMemo<React.CSSProperties>(() => ({
    display: 'flex',
    transform: `translateX(-${activeIndex * 100}%)`,
    transition: 'transform 600ms ease',
  }), [activeIndex]);

  if (slidesCount === 0) return null;

  return (
    <div
      ref={containerRef}
      className={`relative w-full select-none ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      aria-roledescription="carousel"
      tabIndex={0}
    >
      {/* Slides */}
      <div className="overflow-hidden rounded-2xl">
        <div style={trackStyle}>
          {items.map((item) => (
            <div key={item.id} className="shrink-0 grow-0 min-w-full relative group" style={{ height }}>
              <OptimizedImageDisplay
                fallbackUrl={item.imagePath || ''}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/45 transition-colors duration-300 group-hover:bg-black/60" />
              {/* Content */}
              <div className="absolute inset-0 flex items-end">
                <div className="w-full p-6 md:p-10">
                  {item.linkHref ? (
                    <a href={item.linkHref} target="_blank" rel="noreferrer" className="block">
                      <h2 className="text-2xl md:text-3xl font-semibold text-white/90 drop-shadow-md transition-transform duration-300 group-hover:-translate-y-0.5">
                        {item.title}
                      </h2>
                    </a>
                  ) : (
                    <h2 className="text-2xl md:text-3xl font-semibold text-white/90 drop-shadow-md transition-transform duration-300 group-hover:-translate-y-0.5">
                      {item.title}
                    </h2>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Prev / Next buttons */}
      {slidesCount > 1 && (
        <>
          <button
            aria-label="Previous slide"
            className="absolute left-2 top-1/2 -translate-y-1/2 grid place-items-center h-12 w-12 rounded-full bg-white/70 hover:bg-white text-gray-900 shadow cursor-pointer"
            onClick={goPrev}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            aria-label="Next slide"
            className="absolute right-2 top-1/2 -translate-y-1/2 grid place-items-center h-12 w-12 rounded-full bg-white/70 hover:bg-white text-gray-900 shadow cursor-pointer"
            onClick={goNext}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}

      {/* Dots */}
      {slidesCount > 1 && (
        <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              aria-label={`Ir al slide ${i + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                i === activeIndex ? 'bg-white w-6' : 'bg-white/60 hover:bg-white/80'
              }`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;