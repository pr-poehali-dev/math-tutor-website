import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-r from-math-light to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold text-math-dark leading-tight">
              Увлекательная математика для каждого ребенка
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl">
              Индивидуальный подход, интерактивные занятия и глубокое понимание предмета - 
              ваш ребенок полюбит математику и добьется высоких результатов!
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button className="bg-math-primary hover:bg-math-secondary text-white text-lg px-8 py-6">
                Записаться на пробный урок
              </Button>
              <Button variant="outline" className="border-math-primary text-math-primary hover:bg-math-light text-lg px-8 py-6">
                Узнать больше
              </Button>
            </div>
            
            <div className="mt-10 grid grid-cols-3 gap-5 max-w-lg">
              <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm">
                <span className="text-3xl font-bold text-math-primary">8+</span>
                <span className="text-gray-600 text-sm text-center">лет опыта</span>
              </div>
              <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm">
                <span className="text-3xl font-bold text-math-primary">200+</span>
                <span className="text-gray-600 text-sm text-center">учеников</span>
              </div>
              <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm">
                <span className="text-3xl font-bold text-math-primary">95%</span>
                <span className="text-gray-600 text-sm text-center">сдали на 5</span>
              </div>
            </div>
          </div>
          
          <div className="mt-10 lg:mt-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <img 
                src="/placeholder.svg" 
                alt="Репетитор по математике" 
                className="rounded-lg shadow-xl max-w-full lg:max-w-lg mx-auto"
              />
              <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    <img src="/placeholder.svg" alt="Ученик" className="w-10 h-10 rounded-full border-2 border-white" />
                    <img src="/placeholder.svg" alt="Ученик" className="w-10 h-10 rounded-full border-2 border-white" />
                    <img src="/placeholder.svg" alt="Ученик" className="w-10 h-10 rounded-full border-2 border-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Присоединяйтесь!</p>
                    <div className="flex">
                      {"★★★★★".split("").map((star, i) => (
                        <span key={i} className="text-yellow-400">{star}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Декоративные элементы */}
      <div className="absolute top-20 right-10 opacity-10">
        <span className="text-8xl font-bold text-math-primary">π</span>
      </div>
      <div className="absolute bottom-10 left-10 opacity-10 hidden lg:block">
        <span className="text-6xl font-bold text-math-primary">∑</span>
      </div>
    </section>
  );
};

export default Hero;
