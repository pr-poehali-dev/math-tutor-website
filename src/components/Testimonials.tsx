
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Михаил Соколов",
      role: "Ученик 11 класса",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      quote: "Благодаря Елене я сдал ЕГЭ по математике на 92 балла! Она объясняет сложные темы просто и понятно, а её методики запоминания формул действительно работают. За полгода мы прошли всю программу и даже больше.",
      stars: 5
    },
    {
      name: "Анна Петрова",
      role: "Мама ученика 9 класса",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      quote: "Мой сын всегда испытывал трудности с математикой. После нескольких месяцев занятий с Еленой его оценки значительно улучшились, а самое главное - появился интерес к предмету. Теперь он сам решает задачи!",
      stars: 5
    },
    {
      name: "Дмитрий Ковалев",
      role: "Выпускник, студент МФТИ",
      image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      quote: "Занимался с Еленой два года перед поступлением в вуз. Подготовка была на высшем уровне - мы разобрали все типы заданий повышенной сложности. В итоге я не только хорошо сдал ЕГЭ, но и победил на региональной олимпиаде.",
      stars: 5
    },
    {
      name: "Светлана Игнатьева",
      role: "Мама ученицы 7 класса",
      image: "https://images.unsplash.com/photo-1601412436009-d964bd02edbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      quote: "Елена нашла подход к моей дочери, которая категорически не хотела учить математику. Теперь у нас твердая четверка, и я очень благодарна за индивидуальный подход и терпение!",
      stars: 4
    },
    {
      name: "Алексей Винников",
      role: "Ученик 10 класса",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      quote: "Очень доволен занятиями! Елена всегда готова ответить на любые вопросы, объясняет материал доступно и интересно. Рекомендую всем, кто хочет по-настоящему разобраться в математике.",
      stars: 5
    },
    {
      name: "Екатерина Лосева",
      role: "Выпускница, студентка МГТУ",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      quote: "Елена не просто готовит к сдаче экзаменов, она учит мыслить математически. Этот навык помогает мне сейчас в университете. Занятия всегда проходили в комфортной обстановке, а сложные концепции становились простыми.",
      stars: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-math-dark mb-4">
            Отзывы <span className="text-math-primary">учеников</span>
          </h2>
          <div className="w-24 h-1 bg-math-primary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-700 text-lg">
            Мои ученики и их родители делятся впечатлениями о нашей совместной работе и достигнутых результатах.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg animate-fade-in" style={{animationDelay: `${0.1 * index}s`}}>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="h-14 w-14 rounded-full overflow-hidden">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-math-dark">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="h-4 w-4" 
                        fill={i < testimonial.stars ? "currentColor" : "none"}
                      />
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-gray-700 italic">
                  "{testimonial.quote}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center animate-fade-in" style={{animationDelay: "0.6s"}}>
          <a href="#" className="inline-flex items-center text-math-primary hover:text-math-secondary font-medium">
            Смотреть все отзывы (36+)
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
