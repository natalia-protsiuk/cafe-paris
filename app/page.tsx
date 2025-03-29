"use client";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import TilesSection from "./components/TilesSection";
import Reviews from "./components/Reviews";
import Gallery from "./components/Gallery";
import FoodMenu from "./components/FoodMenu";
import Contact from "./components/Contact";
import { useRef, useState } from "react";

function Home() {
  const [selectedMenu, setSelectedMenu] = useState<
    "main" | "banquet" | "drinks" | null
  >(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleTileClick = (menu: string) => {
    setSelectedMenu(menu);

    // Scroll to the menu section
    setTimeout(() => {
      menuRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };
  return (
    <main>
      <section id="home">
        <Header />
        <Hero />
      </section>
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
            зроблять ваше свято чи особливу подію незабутньою.
          </p>
          <p>
            Ми часто додаємо новинки до нашого меню, але також завжди залишаємо
            ваші улюблені та традиційні страви.
          </p>
        </div>
      </section>
      <section id="menu" className="flex justify-center items-center bg-white">
        <TilesSection onTileClick={handleTileClick} />
      </section>
      {selectedMenu && (
        <div className="bg-white" ref={menuRef}>
          <FoodMenu menuType={selectedMenu} />
        </div>
      )}
      <section id="reviews">
        <Reviews />
      </section>
      <section id="gallery" className="min-h-screen  bg-white">
        <Gallery />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </main>
  );
}

export default Home;
