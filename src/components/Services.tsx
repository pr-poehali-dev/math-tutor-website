
import { GraduationCap, Users, Calculator, Clock, Award, Presentation } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "Школьная математика (5-9 класс)",
      description: "Помощь в освоении школьной программы, подготовка к контрольным и самостоятельным работам.",
      icon: <Calculator className="h-10 w-10 text-math-primary" />,
      price: "от 800 ₽/час",
      popular: false
    },
    {
      title: "Подготовка к ОГЭ",
      description: "Комплексная подготовка к ОГЭ по математике, разбор типовых заданий и сложных тем.",
      icon: <Award className="h-10 w-10 text-math-primary" />,
      price: "от 1000 ₽/час",
      popular: true
    },
    {
      title: "Подготовка к ЕГЭ",
      description: "Интенсивная подготовка к ЕГЭ с углубленным изучением сложных заданий части 2.",
      icon: <GraduationCap className="h-10 w-10 text-math-primary" />,
      price: "от 1200 ₽/час",
      popular: false
    },
    {
      title: "Занятия в мини-группах",
      description: "Занятия в группах до 3-4 человек для более доступной стоимости обучения.",
      icon: <Users className="h-10 w-10 text-math-primary" />,
      price: "от 600 ₽/час",
      popular: false
    },
    {
      title: "Интенсивные курсы",
      description: "Краткосрочные интенсивы для быстрого повышения уровня перед контрольными и экзаменами.",
      icon: <Clock className="h-10 w-10 text-math-primary" />,
      price: "от 5000 ₽/курс",
      popular: false
    },
    {
      title: "Олимпиадная математика",
      description: "Подготовка к математическим олимпиадам различного уровня, решение нестандартных задач.",
      icon: <Presentation className="h-10 w-10 text-math-primary" />,
      price: "от 1500 ₽/час",
      popular: false
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-math-dark mb-4">
            Мои <span className="text-math-primary">услуги</span>
          </h2>
          <div className="w-24 h-1 bg-math-primary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-700 text-lg">
            Я предлагаю широкий спектр услуг по обучению математике, 
            учитывая индивидуальные потребности и цели каждого ученика.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className={`overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 animate-fade-in ${service.popular ? 'border-math-primary' : ''}`} style={{animationDelay: `${0.1 * index}s`}}>
              {service.popular && (
                <div className="bg-math-primary text-white text-sm font-bold py-1 text-center">
                  Популярный выбор
                </div>
              )}
              <CardHeader className="pt-6">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between items-center border-t pt-4">
                <p className="text-lg font-bold text-math-primary">{service.price}</p>
                <Button variant="outline" className="border-math-primary text-math-primary hover:bg-math-light">
                  Подробнее
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-math-primary hover:bg-math-secondary text-white px-8 py-6 text-lg">
            Записаться на занятие
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
