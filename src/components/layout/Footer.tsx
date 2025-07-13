import { Facebook, Instagram, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="md:col-span-1">
            <div className="flex flex-col items-start">
              {/* Logo con flor multicolor */}
              <div className="mb-4">
                <div className="w-16 h-16 relative">
                  <svg viewBox="0 0 64 64" className="w-full h-full">
                    {/* Pétalos de la flor en diferentes colores */}
                    <path d="M32 16 L36 8 L40 16 L36 24 Z" fill="#e97142" />
                    <path d="M48 32 L56 28 L48 24 L40 28 Z" fill="#f4b942" />
                    <path d="M32 48 L28 56 L24 48 L28 40 Z" fill="#6ba6cd" />
                    <path d="M16 32 L8 36 L16 40 L24 36 Z" fill="#81c784" />
                    <path d="M44 20 L48 12 L52 20 L48 28 Z" fill="#ab47bc" />
                    <path d="M44 44 L52 48 L44 52 L36 48 Z" fill="#ef5350" />
                    <path d="M20 44 L12 48 L20 52 L28 48 Z" fill="#42a5f5" />
                    <path d="M20 20 L28 16 L20 12 L12 16 Z" fill="#66bb6a" />
                    {/* Centro de la flor */}
                    <circle cx="32" cy="32" r="8" fill="#ffd54f" />
                  </svg>
                </div>
              </div>
              
              <div className="text-left">
                <div className="font-bold text-2xl text-purple-700 mb-1">TLAXCALA</div>
                <div className="text-sm text-purple-600 font-medium">UNA NUEVA HISTORIA</div>
                <div className="text-sm text-purple-600 font-medium">2021 - 2027</div>
              </div>
            </div>
          </div>

          {/* Menú del sitio */}
          <div className="md:col-span-1">
            <h3 className="font-bold text-gray-800 mb-4">Menú del sitio</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="/" className="hover:text-purple-600 transition-colors">Inicio</a></li>
              <li><a href="/climate-governance" className="hover:text-purple-600 transition-colors">Gobernanza Climática</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Información Climática</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Agenda Climática</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Noticias</a></li>
            </ul>
          </div>

          {/* Recursos de apoyo */}
          <div className="md:col-span-1">
            <ul className="space-y-2 text-sm text-gray-600 mt-8 md:mt-0">
              <li><a href="#" className="hover:text-purple-600 transition-colors">Recursos de apoyo</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Información Legal</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Síguenos */}
          <div className="md:col-span-1">
            <h3 className="font-bold text-gray-800 mb-4">Síguenos:</h3>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white hover:from-purple-600 hover:to-pink-600 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-900 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6 text-sm text-gray-600">
              <a href="#" className="hover:text-purple-600 transition-colors">INFORMACIÓN LEGAL</a>
              <a href="#" className="hover:text-purple-600 transition-colors">AVISO DE PRIVACIDAD</a>
            </div>
            <div className="text-sm text-gray-600">
              TODOS LOS DERECHOS RESERVADOS ©{new Date().getFullYear()}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
