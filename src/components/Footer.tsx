
import { Facebook, Instagram, Youtube, Telegram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-math-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8 pb-8 border-b border-gray-700">
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-math-primary text-3xl">∑</span>
              <h2 className="text-2xl font-bold font-playfair text-white">МатПрофи</h2>
            </div>
            <p className="text-gray-300 mb-4">
              Индивидуальные занятия по математике для школьников и студентов. 
              Повышение успеваемости, подготовка к экзаменам, олимпиадная математика.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-math-primary transition-colors" 
                 aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-math-primary transition-colors" 
                 aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-math-primary transition-colors" 
                 aria-label="Youtube">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-math-primary transition-colors" 
                 aria-label="Telegram">
                <Telegram size={20} />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Навигация</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-math-primary transition-colors">Главная</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-math-primary transition-colors">Обо мне</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-math-primary transition-colors">Услуги</a></li>
                <li><a href="#testimonials" className="text-gray-300 hover:text-math-primary transition-colors">Отзывы</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-math-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Услуги</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-math-primary transition-colors">Школьная программа</a></li>
                <li><a href="#" className="text-gray-300 hover:text-math-primary transition-colors">Подготовка к ОГЭ/ЕГЭ</a></li>
                <li><a href="#" className="text-gray-300 hover:text-math-primary transition-colors">Олимпиадная математика</a></li>
                <li><a href="#" className="text-gray-300 hover:text-math-primary transition-colors">Высшая математика</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Контакты</h3>
              <ul className="space-y-2">
                <li className="text-gray-300">+7 (999) 123-45-67</li>
                <li className="text-gray-300">math.teacher@example.com</li>
                <li className="text-gray-300">г. Москва, ул. Примерная, д. 123</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 text-center text-gray-400 text-sm">
          <p>© {currentYear} МатПрофи. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
