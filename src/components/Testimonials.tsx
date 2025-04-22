
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";

const testimonials = [
  {
    id: 1,
    name: "Мария Иванова",
    role: "Ученица 11 класса",
    image: "/placeholder.svg",
    text: "Благодаря занятиям с Анной я смогла поднять свой уровень знаний по математике и успешно сдать ЕГЭ на 92 балла. Она объясняет очень понятно и всегда находит индивидуальный подход.",
    rating: 5,
  },
  {
    id: 2,
    name: "Дмитрий Петров",
    role: "Студент 1 курса",
    image: "/placeholder.svg",
    text: "Обратился за помощью при подготовке к сессии по высшей математике. Анна объяснила все так, что даже самые сложные темы стали понятными. Сдал экзамен на отлично!",
    rating: 5,
  },
  {
    id: 3,
    name: "Елена Смирнова",
    role: "Мама ученика 8 класса",
    image: "/placeholder.svg",
    text: "Мой сын всегда испытывал трудности с математикой. После нескольких месяцев занятий с Анной его оценки значительно улучшились, а главное - появился интерес к предмету.",
    rating: 5,
  },
  {
    id: 4,
    name: "Александр Козлов",
    role: "Участник олимпиад",
    image: "/placeholder.svg",
    text: "Благодаря Анне я смог подготовиться к олимпиаде по математике и занять призовое место. Её подход к нестандартным задачам и глубокое понимание предмета помогли мне развить математическое мышление.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemsPerView = 3;
  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  const goToPrev = () => {
    setActiveIndex((current) => (current > 0 ? current - 1 : 0));
  };

  const goToNext = () => {
    setActiveIndex((current) => (current < maxIndex ? current + 1 : maxIndex));
  };

  const visibleTestimonials = testimonials.slice(
    activeIndex,
    activeIndex + itemsPerView
  );

  return (
    <section id="testimonials" className="py-16 bg-math-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold font-playfair mb-4">
            Отзывы <span className="text-math-primary">учеников</span>
          </h2>
          <p className="text-gray-700">
            Что говорят мои ученики и их родители о наших занятиях
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:flex justify-between absolute -left-4 -right-4 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-white shadow-md pointer-events-auto"
              onClick={goToPrev}
              disabled={activeIndex === 0}
            >
              <ChevronLeft />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-white shadow-md pointer-events-auto"
              onClick={goToNext}
              disabled={activeIndex >= maxIndex}
            >
              <ChevronRight />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visibleTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="h-full transition-all duration-300 hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6">{testimonial.text}</p>
                </CardContent>
                <CardFooter className="border-t pt-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="flex justify-center gap-1 mt-8 md:hidden">
            <Button
              variant="outline"
              size="sm"
              onClick={goToPrev}
              disabled={activeIndex === 0}
            >
              <ChevronLeft size={16} />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={goToNext}
              disabled={activeIndex >= maxIndex}
            >
              <ChevronRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
