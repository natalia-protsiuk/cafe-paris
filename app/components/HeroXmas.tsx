"use client";
import Link from "next/link";

const images = [
  { src: "/images/christmas-hero.jpg", alt: "Delicious gourmet dish" },
];

const HeroXmas: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out
          }`}
          style={{ backgroundImage: `url(${image.src})` }}
        >
          <span className="sr-only">{image.alt}</span>
        </div>
      ))}

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10 bg-black bg-opacity-50 px-4 sm:px-8 text-center">
        <div className="mb-4 text-sm sm:text-base md:text-lg uppercase tracking-wide">
          Ласкаво просимо
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          Новорічні корпоративи
        </h1>

        <p className="text-base sm:text-lg md:text-xl font-light max-w-md sm:max-w-2xl md:max-w-3xl leading-relaxed text-white">
          Запрошуємо вас відсвяткувати новорічний корпоратив у Café Paris –
          місці, де свято стає особливим. Щороку наші гості повертаються, щоб
          провести незабутню вечірку саме у нас. Наші зали красиво прикрашені в
          новорічному стилі: яскраві гірлянди, святкові декорації та затишна
          атмосфера створюють відчуття справжньої магії.
        </p>

        <Link
          href="#contact"
          className="mt-8 px-6 py-3 bg-white text-black text-base sm:text-lg font-semibold rounded hover:bg-gray-300 transition"
        >
          Забронювати
        </Link>
      </div>
    </section>
  );
};

export default HeroXmas;
