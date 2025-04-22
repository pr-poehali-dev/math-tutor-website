import { GraduationCap, Award, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-playfair font-bold text-math-dark sm:text-4xl">
            Обо мне
          </h2>
          <div className="mt-2 h-1 w-20 bg-math-primary mx-auto"></div>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Мой опыт и индивидуальный подход помогут вашему ребенку полюбить математику
          </p>
        </div>
        
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <div className="relative">
              <img 
                src="/placeholder.svg" 
                alt="Елена - репетитор по математике" 
                className="rounded-lg shadow-lg max-w-full"
              />
              <div className="absolute -bottom-5 -right-5 bg-math-primary p-3 rounded-lg shadow-lg hidden md:block">
                <p className="text-white font-semibold">Елена Петрова</p>
                <p className="text-white text-sm">Математик с 8-летним стажем</p>
              </div>
            </div>
          </div>
          
          <div className="mt-10 lg:mt-0">
            <h3 className="text-2xl font-bold text-math-dark mb-4">
              Помогаю детям влюбиться в математику и достигать высоких результатов
            </h3>
            
            <p className="text-gray-600 mb-6">
              Здравствуйте! Меня зовут Елена, я репетитор по математике с опытом работы более 8 лет. 
              Окончила физико-математический факультет с отличием. Работала в лицее с математическим 
              уклоном, имею большой опыт подготовки к ОГЭ и ЕГЭ.
            </p>
            
            <p className="text-gray-600 mb-6">
              Мой подход к обучению основан на индивидуальных особенностях каждого ученика. 
              Я считаю, что математика может быть увлекательной и понятной для всех, 
              нужно лишь найти правильный подход к ребенку.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <Card className="border-math-light hover:border-math-primary transition-colors">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-math-light flex items-center justify-center mb-3">
                    <GraduationCap className="h-6 w-6 text-math-primary" />
                  </div>
                  <h4 className="font-bold">Образование</h4>
                  <p className="text-sm text-gray-600 mt-1">Высшее математическое</p>
                </CardContent>
              </Card>
              
              <Card className="border-math-light hover:border-math-primary transition-colors">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-math-light flex items-center justify-center mb-3">
                    <Award className="h-6 w-6 text-math-primary" />
                  </div>
                  <h4 className="font-bold">Стаж</h4>
                  <p className="text-sm text-gray-600 mt-1">Более 8 лет</p>
                </CardContent>
              </Card>
              
              <Card className="border-math-light hover:border-math-primary transition-colors">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-math-light flex items-center justify-center mb-3">
                    <BookOpen className="h-6 w-6 text-math-primary" />
                  </div>
                  <h4 className="font-bold">Методика</h4>
                  <p className="text-sm text-gray-600 mt-1">Индивидуальный подход</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
