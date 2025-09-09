import { useOptimizedImageUrl } from "@/hooks";
import marcoNormativoPlaceholder from '@/assets/placeholder/marcoNormativo.png';
import { useSettings } from "@/hooks/useSettings";
import { Mail } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Email = () => {
  const { siteSettings } = useSettings();
  const { imageUrl: backgroundEmailImageUrl } = useOptimizedImageUrl(siteSettings?.background_email_image, marcoNormativoPlaceholder);
  return (
    <section className="relative bg-cover bg-center  py-32 md:py-24 h-[450px]"
        style={{
          backgroundImage: `url(${backgroundEmailImageUrl})`,
        }}
      >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-title mb-1">
            Sé parte del cambio climático
          </h2>
          <p className="text-md text-red-600">
            Entérate de las acciones climáticas y oportunidades para construir un mejor futuro
          </p>
        </div>
        <div className="flex flex-row gap-4 mb-8 justify-center items-center w-full">
          <div className="relative w-96 bg-white rounded-md">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="email"
              placeholder="Correo electrónico"
              className="pl-10 w-full"
            />
          </div>
          
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8"
          >
            Suscríbete
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Email;