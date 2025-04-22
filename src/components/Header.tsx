
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-background/95 backdrop-blur-sm z-50 shadow-sm py-3">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="flex items-center gap-2">
          <span className="text-math-primary text-3xl">∑</span>
          <h1 className="text-2xl font-bold font-playfair text-math-primary">МатПрофи</h1>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="hover-underline font-medium">
            Обо мне
          </a>
          <a href="#services" className="hover-underline font-medium">
            Услуги
          </a>
          <a href="#testimonials" className="hover-underline font-medium">
            Отзывы
          </a>
          <a href="#contact" className="hover-underline font-medium">
            Контакты
          </a>
          <Button>Записаться</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-math-primary" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background shadow-md animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a 
              href="#about" 
              className="py-2 px-4 hover:bg-math-light rounded-md transition-colors"
              onClick={toggleMenu}
            >
              Обо мне
            </a>
            <a 
              href="#services" 
              className="py-2 px-4 hover:bg-math-light rounded-md transition-colors"
              onClick={toggleMenu}
            >
              Услуги
            </a>
            <a 
              href="#testimonials" 
              className="py-2 px-4 hover:bg-math-light rounded-md transition-colors"
              onClick={toggleMenu}
            >
              Отзывы
            </a>
            <a 
              href="#contact" 
              className="py-2 px-4 hover:bg-math-light rounded-md transition-colors"
              onClick={toggleMenu}
            >
              Контакты
            </a>
            <Button className="mt-2">Записаться</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
