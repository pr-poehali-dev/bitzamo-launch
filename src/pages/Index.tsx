import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-foreground">
      {/* Navigation */}
      <nav className="border-b border-casino-gold/20 bg-background/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Diamond" size={28} className="text-casino-gold" />
              <div className="text-2xl font-bold bg-gradient-to-r from-casino-gold to-yellow-300 bg-clip-text text-transparent">
                ROYAL CASINO
              </div>
            </div>
            <div className="flex items-center gap-6">
              <a href="#games" className="text-sm font-medium text-casino-gold border-b border-casino-gold pb-1">Игры</a>
              <a href="#bonuses" className="text-sm font-medium text-foreground/80 hover:text-casino-gold transition-colors">Бонусы</a>
              <a href="#tournaments" className="text-sm font-medium text-foreground/80 hover:text-casino-gold transition-colors">Турниры</a>
              <Button className="bg-gradient-to-r from-casino-gold to-yellow-500 text-black font-semibold hover:from-yellow-500 hover:to-casino-gold">
                Играть
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-casino-purple/20 to-casino-red/20"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10 animate-fade-in">
          <div className="flex justify-center mb-8">
            <Badge className="bg-casino-gold/20 text-casino-gold border-casino-gold px-6 py-2 text-lg">
              🎰 Добро пожаловать в мир азарта
            </Badge>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-casino-gold via-yellow-300 to-casino-gold bg-clip-text text-transparent">
              ROYAL
            </span>
            <br />
            <span className="bg-gradient-to-r from-neon-pink via-casino-purple to-neon-blue bg-clip-text text-transparent">
              CASINO
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Испытайте удачу в лучшем онлайн-казино! Более 1000 игр, щедрые бонусы 
            и моментальные выплаты ждут вас.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-casino-gold to-yellow-500 text-black hover:from-yellow-500 hover:to-casino-gold px-12 py-6 text-xl font-bold rounded-full shadow-2xl shadow-casino-gold/50"
            >
              🎲 Начать играть
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-casino-gold text-casino-gold hover:bg-casino-gold hover:text-black px-12 py-6 text-xl font-bold rounded-full"
            >
              💰 Получить бонус
            </Button>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 animate-pulse">
          <Icon name="Star" size={32} className="text-casino-gold" />
        </div>
        <div className="absolute top-40 right-16 animate-bounce">
          <Icon name="Diamond" size={24} className="text-neon-pink" />
        </div>
        <div className="absolute bottom-20 left-20 animate-pulse">
          <Icon name="Zap" size={28} className="text-neon-blue" />
        </div>
      </section>

      {/* Popular Games Section */}
      <section id="games" className="py-20 px-6 bg-background/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-casino-gold to-yellow-300 bg-clip-text text-transparent">
              Популярные игры
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Выбирайте из тысяч слотов, настольных игр и live-казино
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Slots Card */}
            <Card className="p-6 bg-gradient-to-br from-card to-card/50 border-casino-gold/30 shadow-xl hover:shadow-2xl hover:shadow-casino-gold/20 transition-all duration-300 animate-scale-in group">
              <CardContent className="p-0">
                <div className="relative mb-6 overflow-hidden rounded-lg">
                  <img 
                    src="/img/9dbf147c-53ee-4c0a-91f2-fdf0f31f4c47.jpg" 
                    alt="Casino Games" 
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <Badge className="absolute top-4 left-4 bg-casino-red text-white">HOT 🔥</Badge>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-casino-gold">🎰 Слоты</h3>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  Более 800 слотов от ведущих провайдеров. Джекпоты до 10 миллионов рублей!
                </p>
                <Button 
                  className="w-full bg-gradient-to-r from-casino-gold to-yellow-500 text-black hover:from-yellow-500 hover:to-casino-gold font-semibold"
                >
                  Играть сейчас
                </Button>
              </CardContent>
            </Card>

            {/* Table Games Card */}
            <Card className="p-6 bg-gradient-to-br from-card to-card/50 border-casino-purple/30 shadow-xl hover:shadow-2xl hover:shadow-casino-purple/20 transition-all duration-300 animate-scale-in group" style={{animationDelay: '0.1s'}}>
              <CardContent className="p-0">
                <div className="relative mb-6 overflow-hidden rounded-lg">
                  <div className="w-full h-48 bg-gradient-to-br from-casino-purple to-casino-red rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    <div className="text-center">
                      <Icon name="Spade" size={48} className="text-white mx-auto mb-2" />
                      <p className="text-white font-semibold">BLACKJACK</p>
                    </div>
                  </div>
                  <Badge className="absolute top-4 left-4 bg-casino-purple text-white">VIP 👑</Badge>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-casino-purple">🃏 Карточные игры</h3>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  Блэкджек, покер, баккара и другие классические игры с живыми дилерами.
                </p>
                <Button 
                  className="w-full bg-gradient-to-r from-casino-purple to-purple-600 text-white hover:from-purple-600 hover:to-casino-purple font-semibold"
                >
                  За столы
                </Button>
              </CardContent>
            </Card>

            {/* Roulette Card */}
            <Card className="p-6 bg-gradient-to-br from-card to-card/50 border-casino-red/30 shadow-xl hover:shadow-2xl hover:shadow-casino-red/20 transition-all duration-300 animate-scale-in group" style={{animationDelay: '0.2s'}}>
              <CardContent className="p-0">
                <div className="relative mb-6 overflow-hidden rounded-lg">
                  <div className="w-full h-48 bg-gradient-to-br from-casino-red to-red-800 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    <div className="text-center">
                      <Icon name="Circle" size={48} className="text-white mx-auto mb-2 animate-spin" />
                      <p className="text-white font-semibold">РУЛЕТКА</p>
                    </div>
                  </div>
                  <Badge className="absolute top-4 left-4 bg-casino-gold text-black">LIVE 📺</Badge>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-casino-red">🎯 Рулетка</h3>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  Европейская, американская и французская рулетка с профессиональными крупье.
                </p>
                <Button 
                  className="w-full bg-gradient-to-r from-casino-red to-red-600 text-white hover:from-red-600 hover:to-casino-red font-semibold"
                >
                  Крутить колесо
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section id="bonuses" className="py-20 px-6 bg-gradient-to-r from-casino-gold/10 to-casino-purple/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-casino-gold to-yellow-300 bg-clip-text text-transparent">
              Бонусы и промо
            </h2>
            <p className="text-xl text-foreground/70">
              Щедрые бонусы для новых и постоянных игроков
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Welcome Bonus */}
            <Card className="p-8 bg-gradient-to-br from-casino-gold/20 to-yellow-500/20 border-casino-gold shadow-2xl">
              <CardContent className="p-0 text-center">
                <div className="text-6xl mb-4">🎁</div>
                <h3 className="text-3xl font-bold mb-4 text-casino-gold">Приветственный бонус</h3>
                <div className="text-5xl font-bold mb-4 bg-gradient-to-r from-casino-gold to-yellow-300 bg-clip-text text-transparent">
                  200%
                </div>
                <p className="text-lg text-foreground/80 mb-6">
                  До 100,000₽ + 200 фриспинов на первый депозит
                </p>
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-casino-gold to-yellow-500 text-black hover:from-yellow-500 hover:to-casino-gold font-bold text-lg"
                >
                  Получить бонус
                </Button>
              </CardContent>
            </Card>

            {/* VIP Program */}
            <Card className="p-8 bg-gradient-to-br from-casino-purple/20 to-neon-pink/20 border-casino-purple shadow-2xl">
              <CardContent className="p-0 text-center">
                <div className="text-6xl mb-4">👑</div>
                <h3 className="text-3xl font-bold mb-4 text-casino-purple">VIP программа</h3>
                <div className="text-2xl font-bold mb-4 text-neon-pink">
                  Эксклюзивные привилегии
                </div>
                <p className="text-lg text-foreground/80 mb-6">
                  Персональный менеджер, кэшбэк до 15% и особые бонусы
                </p>
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-casino-purple to-neon-pink text-white hover:from-neon-pink hover:to-casino-purple font-bold text-lg"
                >
                  Стать VIP
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-900 to-purple-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-casino-gold to-yellow-300 bg-clip-text text-transparent">
            Начните играть прямо сейчас!
          </h2>
          <p className="text-xl text-foreground/70 mb-12 max-w-2xl mx-auto">
            Присоединяйтесь к миллионам игроков и выигрывайте реальные деньги
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-casino-gold to-yellow-500 text-black hover:from-yellow-500 hover:to-casino-gold px-12 py-6 text-xl font-bold rounded-full shadow-2xl shadow-casino-gold/50"
            >
              🚀 Регистрация
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black px-12 py-6 text-xl font-bold rounded-full"
            >
              📞 Поддержка 24/7
            </Button>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-4 gap-8 mt-16 text-center">
            <div>
              <Icon name="Shield" size={32} className="text-casino-gold mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Безопасность</h4>
              <p className="text-sm text-foreground/60">SSL шифрование</p>
            </div>
            <div>
              <Icon name="Zap" size={32} className="text-neon-blue mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Быстрые выплаты</h4>
              <p className="text-sm text-foreground/60">В течение 15 минут</p>
            </div>
            <div>
              <Icon name="Headphones" size={32} className="text-neon-pink mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Поддержка 24/7</h4>
              <p className="text-sm text-foreground/60">Всегда на связи</p>
            </div>
            <div>
              <Icon name="Star" size={32} className="text-casino-gold mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Лицензия</h4>
              <p className="text-sm text-foreground/60">Официально</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-background border-t border-casino-gold/20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Icon name="Diamond" size={24} className="text-casino-gold" />
              <div className="text-xl font-bold bg-gradient-to-r from-casino-gold to-yellow-300 bg-clip-text text-transparent">
                ROYAL CASINO
              </div>
            </div>
            <div className="flex gap-6 text-foreground/60">
              <a href="#" className="hover:text-casino-gold transition-colors">Правила</a>
              <a href="#" className="hover:text-casino-gold transition-colors">Ответственная игра</a>
              <a href="#" className="hover:text-casino-gold transition-colors">Лицензия</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-casino-gold/20 text-center text-foreground/50">
            <p className="mb-2">© 2024 ROYAL CASINO. Все права защищены.</p>
            <p className="text-sm">Играйте ответственно. Только 18+</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;