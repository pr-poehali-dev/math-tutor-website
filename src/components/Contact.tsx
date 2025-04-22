
import { PhoneCall, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";

const Contact = () => {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold font-playfair mb-4">
            Свяжитесь <span className="text-math-primary">со мной</span>
          </h2>
          <p className="text-gray-700">
            Запишитесь на занятие или задайте интересующие вас вопросы
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold font-playfair">
              Контактная информация
            </h3>
            <p className="text-gray-700">
              Вы можете связаться со мной любым удобным способом или заполнить форму обратной связи
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-math-light p-3 rounded-full text-math-primary">
                  <PhoneCall size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Телефон</h4>
                  <p className="text-gray-700">+7 (999) 123-45-67</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-math-light p-3 rounded-full text-math-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Email</h4>
                  <p className="text-gray-700">math.teacher@example.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-math-light p-3 rounded-full text-math-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Адрес</h4>
                  <p className="text-gray-700">г. Москва, ул. Примерная, д. 123</p>
                  <p className="text-gray-700 text-sm">Возможны онлайн-занятия</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-math-light p-3 rounded-full text-math-primary">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Время работы</h4>
                  <p className="text-gray-700">Пн-Пт: 10:00 - 20:00</p>
                  <p className="text-gray-700">Сб: 10:00 - 16:00</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-math-light/30 rounded-xl">
              <h4 className="font-bold text-lg mb-2">Первое занятие бесплатно!</h4>
              <p className="text-gray-700">
                Запишитесь на бесплатное пробное занятие, чтобы оценить мой подход к обучению
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold font-playfair mb-6">
              Оставьте заявку
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя</Label>
                  <Input id="name" placeholder="Ваше имя" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" placeholder="+7 (___) ___-__-__" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="email@example.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Тема</Label>
                <Input id="subject" placeholder="Школьная математика, ЕГЭ, и т.д." />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Сообщение</Label>
                <Textarea
                  id="message"
                  placeholder="Опишите ваш запрос подробнее..."
                  rows={4}
                />
              </div>

              <Button className="w-full" size="lg">
                Отправить заявку
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
