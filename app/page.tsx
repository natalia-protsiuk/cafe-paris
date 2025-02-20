import Header from "./components/Header";
import Hero from "./components/Hero";
import FoodMenu from "./components/FoodMenu";
import Footer from "./components/Footer";
import TilesSection from "./components/TilesSection";
import Reviews from "./components/Reviews";

function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <section className="bg-white py-11">
        <div className="container mx-auto text-center">
          <div className="smalltitle text-white mb-4">Меню</div>
          <p>
            Ми пропонуємо окреме меню для щоденних візитів і бaнкетів. Завдяки
            нашому досвіду, ми завжди готові допомогти вам обрати ідеальні
            страви для будь-якої події.
          </p>
          <p>
            Якщо ви не знаєте, як найкраще скласти меню для великої кількості
            гостей, ми з радістю підкажемо, пояснимо та підберемо варіанти, які
            зроблять ваше свято чи особливу подію незабутньою.{" "}
          </p>
          <p>
            Ми часто додаємо новинки до нашого меню, але також завжди залишаємо
            ваші улюблені та традиційні страви.{" "}
          </p>
        </div>
        <TilesSection />
      </section>
      <Reviews />
      <section className="min-h-screen flex justify-center items-center bg-white">
        <div className="container mx-auto text-center">
          <div className="smalltitle text-white mb-4">Welcome</div>
          <h1>Dining at Café Paris</h1>
          <p>Experience fine dining with a seasonal menu.</p>
        </div>
      </section>

      <section className="min-h-[50vh] flex justify-center items-center bg-transparent text-white">
        <div className="container mx-auto text-center">
          <div className="smalltitle text-white mb-4">Завітайте до нас</div>
          <h2 className="text-5xl mb-12">
            Mи створюємо справжню насолоду смаку!
          </h2>
        </div>
      </section>

      <section className="min-h-screen flex justify-center items-center bg-white">
        <FoodMenu menuItems={[]} />
      </section>
      <Footer />
    </main>
  );
}

export default Home;
