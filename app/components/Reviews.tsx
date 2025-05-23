"use client";
import React, { useState, useEffect } from "react";

const reviews = [
  {
    text: "Кафе 'Париж' – це найпрекрасніший заклад, інтер'єр якого розроблений з любов’ю та душевністю, а страви – надзвичайно смачні...",
    author: "Marie Smith",
    position: "The Smiths",
  },
  {
    text: "Bce було дуже гарно, затишно i найголовніше - смачно! Подача страв креативна та оригінальна! Дякуємо.",
    author: "John Doe",
    position: "Gourmet Critic",
  },
  {
    text: "Друзі, рекомендую. Завітайте до ресторану. Bce на найвищому рівні. Є окрема зала, що дуже зручно для тих, хто з дітками. Кухня смачна і якісна. Персонал дуже ввічливий. Нам все дуже сподобалося!",
    author: "Anna Williams",
    position: "Food Blogger",
  },
  {
    text: "Затишне, казкове місце з прекрасним сервісом. Тому обрала саме ваше кафе для своєї новорічної вечері. У серці залишаться теплі спогади надовго. Дякую. З наступаючим Новим роком і Різдвом усіх. Нехай у Новому році у вас буде багато вдячних клієнтів.",
    author: "Anna Williams",
    position: "Food Blogger",
  },
];

export default function ReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="relative w-full text-white py-12 px-4 sm:px-6 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-8">
          Відгуки
        </h2>

        {/* Reviews */}
        <div className="relative min-h-[240px] sm:min-h-[280px] md:min-h-[300px]">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              } flex flex-col justify-center items-center text-center px-4 sm:px-6`}
            >
              <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto break-words">
                “{review.text}”
              </p>
              {/* <div className="mt-4">
                <div className="font-semibold uppercase text-sm sm:text-base">
                  {review.author}
                </div>
                <div className="text-xs text-gray-400">{review.position}</div>
              </div> */}
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-3 w-3 rounded-full transition-colors duration-300 ${
                index === currentIndex ? "bg-white" : "bg-gray-500"
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
