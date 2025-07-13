import { useState } from "react";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { Button } from "../ui/button";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-transparent shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="font-bold text-gray-800">TLAXCALA</span>
            <span className="text-sm text-gray-600">2022 • 2027</span>
          </div>

                    {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-green-600 transition-colors">
              Inicio
            </a>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-green-600 transition-colors">
                Información
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Adaptación
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Mitigación
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Diagnósticos
                </a>
              </div>
            </div>
            <a href="/climate-governance" className="text-gray-700 hover:text-green-600 transition-colors">
              Gobernanza
            </a>
            <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">
              Agenda
            </a>
            <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">
              Políticas
            </a>
            <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">
              Participación
            </a>
            <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">
              Transparencia
            </a>
            <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white">
              Contacto
            </Button>
            <Button size="sm" className="bg-white text-orange-600">
              <Search className="h-4 w-4" />
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="/" className="block px-3 py-2 text-gray-700 hover:text-green-600">
                Inicio
              </a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-green-600">
                Información
              </a>
              <a href="/climate-governance" className="block px-3 py-2 text-gray-700 hover:text-green-600">
                Gobernanza
              </a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-green-600">
                Agenda
              </a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-green-600">
                Políticas
              </a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-green-600">
                Participación
              </a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-green-600">
                Transparencia
              </a>
              <div className="px-3 py-2">
                <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white w-full">
                  Contacto
                </Button>
                <Button size="sm" className="bg-white text-orange-600 w-full">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}; 