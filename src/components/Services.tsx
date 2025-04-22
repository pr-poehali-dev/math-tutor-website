import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Занятия для школьников 5-9 классов",
      description: "Помощь с домашними заданиями, подготовка к контрольным работам, объяснение сложных тем и заполнение пробелов в знаниях.",
      price: "от 800 ₽",
      duration: "60 минут",
      icon: "📚"
    },
    {
      title: "Подготовка к ОГЭ",
      description: "Систематическая подготовка к экзамену, разбор сложных заданий, отработка методов решения, регулярные тренировочные тесты.",
      price: "от 900 ₽",
      duration: "90 минут",
      icon: "📝"
    },
    {
      title: "Подготовка к ЕГЭ",
      description: "Индивидуальная программа подготовки, глубокий разбор сложных тем, стратегии решения заданий повышенной сложности.",
      price: "от 1200 ₽",
      duration: "90 минут",
      icon: "🎓"
    }
  ];

  return (
    <section id="services" className="py-20 bg-math-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-playfair font-bold text-math-dark sm:text-4xl">
            Мои услуги
          </h2>
          <div className="mt-2 h-1 w-20 bg-math-primary mx-auto"></div>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Выберите направление, которое подходит именно вам
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden border-transparent shadow-lg transition-transform hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-math-primary to-math-secondary p-6 flex justify-between items-center">
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  <span className="text-4xl">{service.icon}</span>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6 min-h-[100px]">{service.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Стоимость</p>
                      <p className="font-bold text-math-primary">{service.price}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Длительность</p>
                      <p className="font-bold">{service.duration}</p>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-math-primary hover:bg-math-secondary text-white">
                    Записаться
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-math-dark mb-4">
            Дополнительные услуги
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 max-w-4xl mx-auto">
            <div className="bg-white p-5 rounded-lg shadow-sm flex items-center">
              <span className="text-3xl mr-4">🏠</span>
              <div>
                <h4 className="font-bold">Занятия дома у ученика</h4>
                <p className="text-sm text-gray-600">по договоренности</p>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm flex items-center">
              <span className="text-3xl mr-4">👨‍👩‍👦</span>
              <div>
                <h4 className="font-bold">Занятия в мини-группах</h4>
                <p className="text-sm text-gray-600">2-3 человека</p>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm flex items-center">
              <span className="text-3xl mr-4">📅</span>
              <div>
                <h4 className="font-bold">Интенсивные курсы</h4>
                <p className="text-sm text-gray-600">перед экзаменами</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
