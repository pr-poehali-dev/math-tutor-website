import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, SendIcon } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-math-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-playfair font-bold text-math-dark sm:text-4xl">
            Свяжитесь со мной
          </h2>
          <div className="mt-2 h-1 w-20 bg-math-primary mx-auto"></div>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Запишитесь на бесплатную консультацию или задайте вопрос
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold text-math-dark mb-6">
              Есть вопросы или готовы начать?
            </h3>
            
            <p className="text-gray-600 mb-8">
              Оставьте заявку, и я свяжусь с вами в ближайшее время, чтобы обсудить детали занятий 
              или ответить на ваши вопросы. Первая консультация бесплатна!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 bg-math-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="h-5 w-5 text-math-primary" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-math-dark">Телефон</h4>
                  <p className="text-gray-600">+7 (999) 123-45-67</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 bg-math-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="h-5 w-5 text-math-primary" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-math-dark">Email</h4>
                  <p className="text-gray-600">math.teacher@email.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 bg-math-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-math-primary" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-math-dark">Адрес</h4>
                  <p className="text-gray-600">г. Москва, онлайн или выезд к ученику</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <Card className="border-transparent shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-math-dark mb-4">
                  Запись на консультацию
                </h3>
                
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Ваше имя
                      </label>
                      <Input 
                        id="name" 
                        type="text" 
                        placeholder="Иван Иванов" 
                        className="w-full" 
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Телефон
                      </label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="+7 (___) ___-__-__" 
                        className="w-full" 
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="example@email.com" 
                      className="w-full" 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Сообщение
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Расскажите о ваших целях и пожеланиях" 
                      className="w-full min-h-[120px]" 
                    />
                  </div>
                  
                  <Button className="w-full bg-math-primary hover:bg-math-secondary text-white">
                    Отправить заявку
                    <SendIcon className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
