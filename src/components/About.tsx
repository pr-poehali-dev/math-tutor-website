
import { CheckCircle } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-math-dark mb-4">
            Обо <span className="text-math-primary">мне</span>
          </h2>
          <div className="w-24 h-1 bg-math-primary mx-auto"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-5/12 animate-fade-in" style={{animationDelay: "0.2s"}}>
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Елена - преподаватель математики" 
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </div>
              
              {/* Декоративная рамка */}
              <div className="absolute inset-0 border-4 border-math-primary rounded-lg -translate-x-5 translate-y-5 z-0"></div>
              
              {/* Опыт */}
              <div className="absolute -right-10 -bottom-10 bg-math-primary text-white p-6 rounded-lg shadow-lg z-20 transform rotate-3">
                <p className="text-4xl font-bold">12+</p>
                <p className="text-lg">лет опыта</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-7/12 animate-fade-in" style={{animationDelay: "0.4s"}}>
            <h3 className="text-2xl md:text-3xl font-playfair font-bold text-math-dark mb-6">
              Елена Петрова
            </h3>
            <h4 className="text-lg text-math-primary font-medium mb-4">
              Репетитор по математике высшей категории
            </h4>
            <p className="text-gray-700 mb-6">
              Я преподаю математику уже более 12 лет и за это время помогла сотням учеников не только улучшить оценки, но и по-настоящему полюбить этот предмет. Имею высшее педагогическое образование, степень кандидата физико-математических наук и постоянно совершенствую свои методики преподавания.
            </p>
            <p className="text-gray-700 mb-8">
              Мой подход основан на индивидуальном планировании занятий, поиске оптимального стиля обучения для каждого ученика и созданию дружественной, но продуктивной атмосферы. Я верю, что каждый способен освоить математику при правильном подходе!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-6 w-6 text-math-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Кандидат физико-математических наук</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-6 w-6 text-math-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Автор методических пособий</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-6 w-6 text-math-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Эксперт ЕГЭ и ОГЭ</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-6 w-6 text-math-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Опыт работы с любым уровнем подготовки</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
