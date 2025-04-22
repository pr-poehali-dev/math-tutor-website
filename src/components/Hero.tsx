
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="w-full md:w-1/2 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair text-math-dark">
              Открой мир <span className="text-math-primary">математики</span> с профессионалом
            </h1>
            <p className="text-lg text-gray-700 max-w-xl">
              Индивидуальный подход, повышение успеваемости и подготовка к экзаменам. 
              Превращаю сложные задачи в понятные решения.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2">
                Записаться на пробный урок <ArrowRight size={16} />
              </Button>
              <Button size="lg" variant="outline">
                Подробнее об услугах
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white overflow-hidden"
                  >
                    <img
                      src="/placeholder.svg"
                      alt={`Ученик ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-bold text-math-primary">100+</span> довольных учеников
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative animate-fade-in">
            <div className="aspect-[3/4] max-w-md mx-auto relative z-10 rounded-xl overflow-hidden shadow-xl">
              <img
                src="/placeholder.svg"
                alt="Репетитор по математике"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-5 -right-5 w-32 h-32 bg-math-light rounded-full -z-10"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-math-primary/20 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
