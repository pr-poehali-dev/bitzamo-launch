import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold">BITZAMO</div>
            <div className="flex items-center gap-8">
              <a href="#home" className="text-sm font-medium border-b-2 border-black pb-1">Home</a>
              <a href="#services" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Services</a>
              <a href="#about" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">About Us</a>
              <a href="#contact" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Contact</a>
              <Icon name="User" size={20} className="text-gray-600" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-32 px-6">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            SERVICE PROMOTION
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Профессиональная разработка, консалтинг и техническая поддержка для вашего бизнеса. 
            Превращаем идеи в цифровые решения.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg font-medium rounded-full"
            >
              Learn More
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-black text-black hover:bg-gray-50 px-8 py-4 text-lg font-medium rounded-full"
            >
              View Details
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Наши услуги</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Комплексные IT-решения для развития вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Development Card */}
            <Card className="p-8 bg-white border-0 shadow-sm hover:shadow-md transition-all duration-300 animate-scale-in">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <Icon name="Code" size={32} className="text-black" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Разработка</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Создаем современные веб-приложения, мобильные решения и API. 
                  Используем передовые технологии для максимальной производительности.
                </p>
                <Button 
                  variant="outline" 
                  className="border-black text-black hover:bg-black hover:text-white transition-colors rounded-full"
                >
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            {/* Consulting Card */}
            <Card className="p-8 bg-white border-0 shadow-sm hover:shadow-md transition-all duration-300 animate-scale-in" style={{animationDelay: '0.1s'}}>
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <Icon name="Users" size={32} className="text-black" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Консалтинг</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Экспертная оценка IT-инфраструктуры, архитектурные решения и стратегическое планирование. 
                  Помогаем принимать правильные технологические решения.
                </p>
                <Button 
                  variant="outline" 
                  className="border-black text-black hover:bg-black hover:text-white transition-colors rounded-full"
                >
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            {/* Support Card */}
            <Card className="p-8 bg-white border-0 shadow-sm hover:shadow-md transition-all duration-300 animate-scale-in" style={{animationDelay: '0.2s'}}>
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <Icon name="Headphones" size={32} className="text-black" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Техподдержка</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Круглосуточная техническая поддержка, мониторинг систем и быстрое устранение проблем. 
                  Обеспечиваем стабильную работу ваших решений.
                </p>
                <Button 
                  variant="outline" 
                  className="border-black text-black hover:bg-black hover:text-white transition-colors rounded-full"
                >
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8">
                Почему выбирают нас
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Icon name="ArrowRight" size={20} className="text-black mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Опыт и экспертиза</h4>
                    <p className="text-gray-600">Более 10 лет на рынке IT-услуг</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="CheckCircle" size={20} className="text-black mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Качество и надёжность</h4>
                    <p className="text-gray-600">Гарантия результата и поддержка проектов</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Star" size={20} className="text-black mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Индивидуальный подход</h4>
                    <p className="text-gray-600">Решения под конкретные задачи бизнеса</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Phone" size={20} className="text-black mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Оперативная связь</h4>
                    <p className="text-gray-600">Быстрая реакция на запросы 24/7</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <Icon name="Zap" size={64} className="text-black mx-auto mb-4" />
                  <p className="text-xl font-semibold">Инновации в действии</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Готовы к сотрудничеству?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Расскажите о вашем проекте, и мы предложим оптимальное решение
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-medium rounded-full"
            >
              Связаться с нами
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-medium rounded-full"
            >
              Оставить заявку
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-50 border-t">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-xl font-bold mb-4 md:mb-0">BITZAMO</div>
            <div className="flex gap-6 text-gray-600">
              <a href="#" className="hover:text-black transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-black transition-colors">Условия использования</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-gray-500">
            © 2024 BITZAMO. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;