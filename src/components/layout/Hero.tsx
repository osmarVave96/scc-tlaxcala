import { memo, useCallback, useMemo } from 'react';
import { Button } from '../ui/button'
import { Play } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useOptimizedImageUrl } from '@/hooks'
import errorImage from '@/assets/placeholder/error.png';

interface HeroProps {
  headerData?: {
    title1: string;
    title2: string;
    title2_color: string;
    title3: string;
    button_action_text: string;
    button_action_url: string;
    video_internal: string | null;
    image_internal: string;
  } | null;
}

const Hero = memo<HeroProps>(({ headerData }) => {
  const { t } = useTranslation()
  const { imageUrl: heroImageUrl } = useOptimizedImageUrl(headerData?.image_internal, errorImage)
  
  const handleButtonClick = useCallback(() => {
    if (headerData?.button_action_url) {
      window.open(headerData.button_action_url, "_blank", "noopener,noreferrer");
    }
  }, [headerData?.button_action_url]);

  const titleStyles = useMemo(() => {
    const title = headerData?.title2 || headerData?.title1 || '';
    const isLongTitle = title.length > 100;
    
    return {
      containerClass: isLongTitle ? 'max-w-4xl' : 'max-w-xl',
      titleClass: isLongTitle 
        ? 'text-2xl md:text-5xl font-bold mb-6 leading-tight'
        : 'text-4xl md:text-5xl font-bold mb-6 leading-tight'
    };
  }, [headerData?.title2, headerData?.title1]);

  if (!headerData) {
    return (
      <section className="relative bg-gradient-to-r from-green-800 to-green-600 text-white">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroImageUrl})` }}>
          <div className="relative container mx-auto px-4 py-24 md:py-32">
            <div className="max-w-xl">
              <div className="mb-4">
                <span className="text-sm font-medium px-3 text-white">
                  CLIMA Y CAMBIO CLIMÁTICO
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: '#77BB2A' }}>
                Cargando...
              </h1>
              <p className="text-md md:text-xl mb-8 text-white/90">
                Cargando contenido...
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  return (
    <section className="relative bg-gradient-to-r h-[700px] from-green-800 to-green-600 text-white">
      <div className="absolute inset-0 bg-black/60" />
      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImageUrl})`,
          height: '700px',
        }}
      >
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className={titleStyles.containerClass}>
            <div className="mb-4">
              <span className="text-sm font-medium px-3 text-white">
                {headerData.title1}
              </span>
            </div>
            <h1 className={titleStyles.titleClass} style={{ color: headerData.title2_color || '#77BB2A' }}>
              {headerData.title2 || headerData.title1}
            </h1>
            <p className="text-md md:text-xl mb-8 text-white/90">
              {headerData.title3}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 cursor-pointer"
                onClick={handleButtonClick}
              >
                {headerData.button_action_text || t("home.hero.getStarted")}
              </Button>
              {headerData.video_internal && (
                <div className="flex items-center gap-2">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="rounded-full bg-red-500 text-white hover:text-green-800 h-11 w-11 p-0 items-center justify-center cursor-pointer"
                    style={{ borderRadius: "50%" }}
                  >
                    <Play className="h-5 w-5" />
                  </Button>
                  {t("home.hero.watchVideo")}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
});

Hero.displayName = 'Hero';

export default Hero;