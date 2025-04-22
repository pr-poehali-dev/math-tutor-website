
import { 
  GraduationCap, 
  Clock, 
  Trophy, 
  BookOpen 
} from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 bg-math-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold font-playfair mb-4">
            Обо <span className="text-math-primary">мне</span>
          </h2>
          <p className="text-gray-700">
            Преподаватель математики с многолетним опытом и индивидуальным подходом к каждому ученику
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="w-full lg:w-2/5">
            <div className="relative">
              <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/placeholder.svg"
                  alt="Репетитор по математике"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-3">
                  <GraduationCap className="text-math-primary" size={24} />
                  <div>
                    <p className="font-bold">Магистр математики</p>
                    <p className="text-sm text-gray-600">МГУ им. Ломоносова</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-3/5 space-y-6">
            <h3 className="text-2xl font-bold font-playfair">
              Анна Петрова
            </h3>
            <p className="text-gray-700">
              Я помогаю школьникам и студентам понять и полюбить математику уже более 10 лет. 
              Мой подход основан на том, чтобы сделать сложные математические концепции понятными и 
              увлекательными, адаптируя методики под индивидуальные особенности каждого ученика.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-4">
                <div className="bg-math-primary/10 p-3 rounded-full">
                  <GraduationCap className="text-math-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Образование</h4>
                  <p className="text-gray-700">Магистр математики, победитель олимпиад</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-math-primary/10 p-3 rounded-full">
                  <Clock className="text-math-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Опыт</h4>
                  <p className="text-gray-700">10+ лет преподавания математики школьникам и студентам</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-math-primary/10 p-3 rounded-full">
                  <Trophy className="text-math-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Достижения</h4>
                  <p className="text-gray-700">100+ учеников поступили в ведущие вузы страны</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-math-primary/10 p-3 rounded-full">
                  <BookOpen className="text-math-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Методика</h4>
                  <p className="text-gray-700">Индивидуальный подход и интерактивное обучение</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
