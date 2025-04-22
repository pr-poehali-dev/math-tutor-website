import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ирина Сергеева",
    role: "Мама ученика 9 класса",
    content: "Елена помогла моему сыну подготовиться к ОГЭ по математике. Он всегда испытывал трудности с точными науками, но благодаря Елене не только сдал экзамен на 5, но и полюбил математику. Очень благодарны за профессионализм и терпение!",
    avatar: "/placeholder.svg"
  },
  {
    name: "Дмитрий Ковалев",
    role: "Ученик 11 класса",
    content: "Занимаюсь с Еленой уже второй год. Готовлюсь к ЕГЭ по профильной математике. Объясняет доступно и понятно даже самые сложные темы. Уверен, что смогу поступить в технический вуз благодаря нашим занятиям.",
    avatar: "/placeholder.svg"
  },
  {
    name: "Ольга Петрова",
    role: "Мама ученицы 7 класса",
    content: "Моя дочь начала заниматься с Еленой, когда появились проблемы с алгеброй в школе. Буквально за несколько месяцев она смогла не только догнать программу, но и стала одной из лучших в классе. Елена находит подход к детям и делает математику интересной!",
    avatar: "/placeholder.svg"
  },
  {
    name: "Антон Соколов",
    role: "Ученик 10 класса",
    content: "Благодаря Елене я смог подтянуть геометрию и алгебру. Теперь я не боюсь контрольных работ и с уверенностью смотрю в будущее. Елена всегда объясняет материал так, что все становится понятно с первого раза.",
    avatar: "/placeholder.svg"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [startX, setStartX] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Обработчики свайпа для мобильных устройств
  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;
    
    if (Math.abs(diff) > 50) { // минимальное расстояние для свайпа
      if (diff > 0) {
        // Свайп влево
        handleNext();
      } else {
        // Свайп вправо
        handlePrev();
      }
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-playfair font-bold text-math-dark sm:text-4xl">
            Отзывы учеников и родителей
          </h2>
          <div className="mt-2 h-1 w-20 bg-math-primary mx-auto"></div>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Что говорят те, кто уже занимается со мной
          </p>
        </div>
        
        <div 
          className="relative mx-auto max-w-4xl" 
          onTouchStart={handleTouchStart} 
          onTouchEnd={handleTouchEnd}
        >
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full px-4">
                  <Card className="border-math-light">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row gap-6 items-center">
                        <div className="flex-shrink-0">
                          <div className="relative">
                            <img 
                              src={testimonial.avatar} 
                              alt={testimonial.name}
                              className="w-24 h-24 rounded-full object-cover border-4 border-math-light"
                            />
                            <div className="absolute -top-2 -left-2 bg-math-primary p-1 rounded-full">
                              <Quote className="h-4 w-4 text-white" />
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <p className="text-gray-600 italic mb-4">{testimonial.content}</p>
                          <div>
                            <p className="font-bold text-math-dark">{testimonial.name}</p>
                            <p className="text-sm text-gray-500">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          {/* Навигация */}
          <button 
            onClick={handlePrev}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 bg-white border border-math-light rounded-full p-2 shadow-md hover:bg-math-light focus:outline-none"
            aria-label="Предыдущий отзыв"
          >
            <ChevronLeft className="h-6 w-6 text-math-primary" />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 bg-white border border-math-light rounded-full p-2 shadow-md hover:bg-math-light focus:outline-none"
            aria-label="Следующий отзыв"
          >
            <ChevronRight className="h-6 w-6 text-math-primary" />
          </button>
          
          {/* Индикаторы */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === activeIndex ? "bg-math-primary" : "bg-gray-300"
                }`}
                aria-label={`Перейти к отзыву ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
