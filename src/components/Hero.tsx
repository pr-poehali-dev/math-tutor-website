
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-r from-math-light to-white py-20 md:py-24">
      {/* Декоративные элементы */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-math-primary opacity-10 rounded-full -translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-math-secondary opacity-10 rounded-full translate-x-1/3 translate-y-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold text-math-dark mb-6">
              <span className="text-math-primary">Математика</span> стала проще
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Индивидуальные занятия и подготовка к экзаменам с опытным преподавателем. Помогу полюбить математику и достичь высоких результатов!
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-math-primary hover:bg-math-secondary text-white px-8 py-6 text-lg">
                Записаться на пробный урок
              </Button>
              <Button variant="outline" className="border-math-primary text-math-primary hover:bg-math-light px-8 py-6 text-lg">
                Узнать больше
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 relative animate-fade-in" style={{animationDelay: "0.3s"}}>
            <div className="relative">
              {/* Основное фото */}
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Елена - репетитор по математике" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
              
              {/* Декоративные формулы */}
              <div className="absolute -bottom-10 -left-10 z-0 bg-white p-4 rounded-lg shadow-lg transform -rotate-6 hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" 
                  alt="Математические формулы" 
                  className="w-full h-auto rounded"
                />
              </div>
              
              {/* Декоративные числа */}
              <div className="absolute -top-8 -right-8 z-0 bg-white p-3 rounded-lg shadow-lg transform rotate-12 hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&q=80" 
                  alt="Математические числа" 
                  className="w-full h-auto rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
