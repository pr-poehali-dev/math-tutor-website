
import { 
  School, 
  GraduationCap, 
  BookOpen,
  Brain
} from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

const services = [
  {
    icon: <School size={24} />,
    title: "Школьная программа",
    description: "Помощь с домашними заданиями, объяснение текущего материала, подготовка к контрольным работам",
    price: "от 1500 ₽",
    features: ["Алгебра и геометрия", "Все классы (5-11)", "Улучшение оценок"]
  },
  {
    icon: <GraduationCap size={24} />,
    title: "Подготовка к ОГЭ/ЕГЭ",
    description: "Комплексная подготовка к государственным экзаменам с учетом всех последних требований",
    price: "от 2000 ₽",
    features: ["Разбор всех типов заданий", "Тренировочные тесты", "Стратегии решения"]
  },
  {
    icon: <BookOpen size={24} />,
    title: "Олимпиадная математика",
    description: "Подготовка к математическим олимпиадам различного уровня, решение нестандартных задач",
    price: "от 2500 ₽",
    features: ["Развитие мышления", "Нестандартные задачи", "Индивидуальная программа"]
  },
  {
    icon: <Brain size={24} />,
    title: "Высшая математика",
    description: "Помощь студентам с высшей математикой: матанализ, линейная алгебра, теория вероятностей",
    price: "от 2000 ₽",
    features: ["Подготовка к сессии", "Решение задач", "Объяснение теории"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold font-playfair mb-4">
            Мои <span className="text-math-primary">услуги</span>
          </h2>
          <p className="text-gray-700">
            Выберите подходящий формат занятий в зависимости от ваших целей и потребностей
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-math-light rounded-lg flex items-center justify-center mb-4 text-math-primary">
                  {service.icon}
                </div>
                <CardTitle className="font-playfair">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="font-bold text-2xl text-math-primary mb-4">
                  {service.price}
                  <span className="text-sm text-gray-500 font-normal ml-1">/ 60 мин</span>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-math-primary">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Записаться</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-6 bg-math-light/30 rounded-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Бесплатный пробный урок</h3>
              <p className="text-gray-700">
                Запишитесь на бесплатное 30-минутное занятие, чтобы познакомиться и определить уровень знаний
              </p>
            </div>
            <Button size="lg">Записаться на пробный урок</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
