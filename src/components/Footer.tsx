import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-math-dark text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <span className="text-xl font-playfair font-bold text-math-primary">Математика</span>
              <span className="ml-1 text-xl font-playfair">с Еленой</span>
            </div>
            <p className="text-gray-400 mb-4">
              Репетитор по математике с индивидуальным подходом к каждому ученику.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-math-primary">
                <span className="sr-only">VK</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm1.691 17.375h-1.8c-.678 0-.887-.569-2.109-1.8-1.062-1.027-1.524-1.169-1.785-1.169-.366 0-.469.105-.469.6v1.646c0 .42-.134.723-1.256.723-1.846 0-3.891-1.118-5.333-3.193C2.093 10.893 1.443 8.544 1.443 8.062c0-.257.1-.498.6-.498h1.8c.451 0 .616.257.8.879.879 2.532 2.346 4.74 2.952 4.74.227 0 .332-.105.332-.64V9.816c-.07-1.149-.707-1.245-.707-1.65 0-.198.166-.394.429-.394h2.823c.38 0 .521.198.521.671v3.667c0 .394.172.533.275.533.227 0 .416-.139.832-.562 1.29-1.453 2.207-3.689 2.207-3.689.123-.257.314-.496.793-.496h1.8c.54 0 .657.277.54.65-.227 1.055-2.444 4.193-2.444 4.193-.211.35-.289.509 0 .902.21.304.914.939 1.374 1.508.856 1.015 1.51 1.872 1.678 2.466.19.59-.125.895-.603.895z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-math-primary">
                <span className="sr-only">WhatsApp</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-math-primary">
                <span className="sr-only">Telegram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.132c-.175 1.887-.945 6.504-1.33 8.639-.165.891-.51 1.19-.834 1.219-.713.065-1.253-.472-1.944-.925-.108-.065-2.039-1.33-2.3-1.444-.261-.114-.566-.066-.793.151-.227.219-2.691 2.433-2.877 2.602-.188.17-.36.164-.538.029C6.761 18.277 5.175 17.8 3.81 16.373c-.25-.251-.072-.377.177-.595 1.079-.923 2.116-1.968 3.074-3.067.953-1.113.486-1.696.343-1.886a41.806 41.806 0 01-1.739-4.152c-.193-.633.06-.902.453-1.011.398-.111 6.341-2.498 6.791-2.65.448-.15.774-.03 1.098.38.326.41 4.186 3.252 4.33 3.43.143.179.391.731.164 1.31z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-math-primary">Главная</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-math-primary">Обо мне</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-math-primary">Услуги</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-math-primary">Отзывы</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-math-primary">Контакты</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-math-primary">Школьная математика</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-math-primary">Подготовка к ОГЭ</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-math-primary">Подготовка к ЕГЭ</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-math-primary">Занятия в группах</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-math-primary">Интенсивные курсы</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Время работы</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex justify-between">
                <span>Понедельник - Пятница</span>
                <span>09:00 - 20:00</span>
              </li>
              <li className="flex justify-between">
                <span>Суббота</span>
                <span>10:00 - 16:00</span>
              </li>
              <li className="flex justify-between">
                <span>Воскресенье</span>
                <span>Выходной</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p className="flex items-center justify-center">
            Создано с <Heart className="h-4 w-4 mx-1 text-math-primary" /> для любителей математики
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} Математика с Еленой. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
