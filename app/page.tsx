"use client";
import Image from "next/image";
import TilesSection from "./components/TilesSection";
import Reviews from "./components/Reviews";
import Gallery from "./components/Gallery";
import FoodMenu from "./components/FoodMenu";
import Contact from "./components/Contact";
import { useRef, useState } from "react";
import { FoodMenuType } from "./components/interfaces/food-menu.type";
import Hero from "./components/Hero";

function Home() {
  const [selectedMenu, setSelectedMenu] = useState<FoodMenuType | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleTileClick = (menu: FoodMenuType) => {
    setSelectedMenu(menu);

    // Scroll to the menu section
    setTimeout(() => {
      menuRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <section id="xmas" className="bg-white py-10 sm:py-12">
        <div className="container mx-auto text-center px-4 sm:px-6">
          <div className="smalltitle mb-4">Банкети</div>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-900">
          Ми тут, щоб святкувати разом з вами.
          </h2>
        </div>
      </section>

      <section className="bg-white py-10 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
            {/* Text Column */}
            <div className="flex flex-col order-2 md:order-1">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">

              Ми любимо, коли у нас святкують важливі моменти життя: весілля, банкети, родинні та святкові події. Саме тому багато гостей повертаються знову і радять нас друзям. Щоб обрати бажану дату, рекомендуємо бронювати заздалегідь.
                Ми знаходимося у місті Миколаїв, у Корабельному районі, вул.
                Олега Кравця 170а (У парку за супермаркетом АТБ). 
              </p>
              <p className="text-base sm:text-lg text-gray-700 ">
              T: (066) 203 21 98, (093) 231 25 09 
              </p>
            </div>

            {/* Image Column */}
            <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-md overflow-hidden order-1 md:order-2">
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-md overflow-hidden">
                  <Image
                    src="/images/prawn-starter.jpg"
                    alt="Café Paris event setup"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-md overflow-hidden">
                  <Image
                    src="/images/set-table.jpg"
                    alt="Café Paris dining experience"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-10 sm:py-12">
        <div className="container mx-auto text-center px-4 sm:px-6">
          <div className="smalltitle text-white mb-4">Меню</div>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-900">
            Наші Пропозиції
          </h2>

          <div className="max-w-3xl mx-auto space-y-5 text-base sm:text-lg text-gray-700 leading-relaxed">
            <p>
              Ми пропонуємо окреме меню для щоденних візитів і бaнкетів. Завдяки
              нашому досвіду, ми завжди готові допомогти вам обрати ідеальні
              страви для будь-якої події.
            </p>
            <p>
              Якщо ви не знаєте, як найкраще скласти меню для великої кількості
              гостей, ми з радістю підкажемо, пояснимо та підберемо варіанти,
              які зроблять ваше свято чи особливу подію незабутньою.
            </p>
            <p>
              Ми часто додаємо новинки до нашого меню, але також завжди
              залишаємо ваші улюблені та традиційні страви.
            </p>
          </div>
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
      <section id="gallery" className=" bg-white">
        <Gallery />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default Home;
