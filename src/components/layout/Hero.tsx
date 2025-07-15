import { Button } from '../ui/button'
import { Play } from 'lucide-react'
import { useTranslation } from 'react-i18next'

interface HeroProps {
  title: string
  subtitle: string
  image: string
  hasMedia?: boolean
  buttonText?: string
  buttonLink?: string
}

const Hero = ({ title, subtitle, image, hasMedia = false, buttonText, buttonLink }: HeroProps) => {
  const { t } = useTranslation()
  
  return (
    <section className="relative bg-gradient-to-r from-green-800 to-green-600 text-white">
      <div className="absolute inset-0 bg-black/40" />
      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: hasMedia ? `url(${image})` : "url('/api/placeholder/1200/600')",
        }}
      >
        {/* <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-700/80" /> */}
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-xl">
            <div className="mb-4">
              <span className="text-sm font-medium px-3  text-white">
                CLIMA Y CAMBIO CLIMÁTICO
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight ">
              {title}
            </h1>
            <p className="text-md md:text-xl mb-8 text-white/90">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8"
                onClick={() => {
                  if (buttonLink) {
                    window.location.href = buttonLink
                  }
                }}
              >
                {buttonText || t("home.hero.getStarted")}
              </Button>
              {hasMedia && (
              <div className="flex items-center gap-2">
                <Button
                  size="lg"
                  variant="secondary"
                  className="rounded-full bg-red-500 text-white hover:text-green-800 h-11 w-11 p-0 items-center justify-center"
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
}

export default Hero