import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-playfair font-bold text-math-primary">Математика</span>
            <span className="ml-1 text-2xl font-playfair text-gray-700">с Еленой</span>
          </div>
          
          {/* Desktop menu */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover-underline text-gray-700 hover:text-math-primary px-3 py-2 text-sm font-medium">
              Главная
            </a>
            <a href="#about" className="hover-underline text-gray-700 hover:text-math-primary px-3 py-2 text-sm font-medium">
              Обо мне
            </a>
            <a href="#services" className="hover-underline text-gray-700 hover:text-math-primary px-3 py-2 text-sm font-medium">
              Услуги
            </a>
            <a href="#testimonials" className="hover-underline text-gray-700 hover:text-math-primary px-3 py-2 text-sm font-medium">
              Отзывы
            </a>
            <a href="#contact" className="hover-underline text-gray-700 hover:text-math-primary px-3 py-2 text-sm font-medium">
              Контакты
            </a>
          </nav>
          
          <div className="hidden md:flex">
            <Button className="bg-math-primary hover:bg-math-secondary text-white">
              Записаться на урок
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMobileMenu}
              aria-label={mobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white pb-3 px-4">
          <div className="flex flex-col space-y-2">
            <a href="#home" className="text-gray-700 hover:bg-math-light hover:text-math-primary px-3 py-2 rounded-md font-medium">
              Главная
            </a>
            <a href="#about" className="text-gray-700 hover:bg-math-light hover:text-math-primary px-3 py-2 rounded-md font-medium">
              Обо мне
            </a>
            <a href="#services" className="text-gray-700 hover:bg-math-light hover:text-math-primary px-3 py-2 rounded-md font-medium">
              Услуги
            </a>
            <a href="#testimonials" className="text-gray-700 hover:bg-math-light hover:text-math-primary px-3 py-2 rounded-md font-medium">
              Отзывы
            </a>
            <a href="#contact" className="text-gray-700 hover:bg-math-light hover:text-math-primary px-3 py-2 rounded-md font-medium">
              Контакты
            </a>
            <Button className="bg-math-primary hover:bg-math-secondary text-white w-full mt-2">
              Записаться на урок
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
