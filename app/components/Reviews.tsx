// "use client";
// import React, { useState, useEffect } from "react";

// const reviews = [
//   {
//     text: "Кафе 'Париж' – це найпрекрасніший заклад, інтер'єр якого розроблений з любов’ю та душевністю, а страви – надзвичайно смачні. І все це завдяки господині, яка має найкращі людські якості та втілює їх для чудового відпочинку у своєму закладі. Велике спасибі, Людочко і Танюшко, за ваш майстер-клас. Якби ви були в Європі, то стали б найуспішнішими майстрами своєї справи. Часто згадую, перебуваючи в Європі, ті незабутні свята, ювілеї, які ми святкували у вас разом із сім’ями. Все було дуже смачно, оформлено на вищому рівні – чистота, затишок, музика. Це не забудеться ніколи.Велике вам людське спасибі. Сподіваюся, що незабаром ми знову будемо у вашому прекрасному закладі святкувати День перемоги України! Рекомендую всім це чудове кафе.",
//     author: "Marie Smith",
//     position: "The Smiths",
//   },
//   {
//     text: "Bce було дуже гарно, затишно i найголовніше - смачно! Подача страв креативна та оригінальна! Дякуємо.",
//     author: "John Doe",
//     position: "Gourmet Critic",
//   },
//   {
//     text: "Друзі, рекомендую. Завітайте до ресторану. Bce на найвищому рівні. Є окрема зала, що дуже зручно для тих, хто з дітками. Кухня смачна і якісна. Персонал дуже ввічливий. Нам все дуже сподобалося!",
//     author: "Anna Williams",
//     position: "Food Blogger",
//   },
//   {
//     text: "Затишне, казкове місце з прекрасним сервісом. Тому обрала саме ваше кафе для своєї новорічної вечері. У серці залишаться теплі спогади надовго. Дякую. З наступаючим Новим роком і Різдвом усіх. Нехай у Новому році у вас буде багато вдячних клієнтів.",
//     author: "Anna Williams",
//     position: "Food Blogger",
//   },
// ];

// export default function ReviewsCarousel() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [currentIndex]); // Added currentIndex as a dependency

//   const handleDotClick = (index: number) => {
//     setCurrentIndex(index);
//   };

//   return (
//     <section className="relative w-full py-16 text-white">
//       <div className="container mx-auto text-center max-w-4xl px-6">
//         {/* <span className="uppercase text-sm tracking-wide mb-2 block">
//           — TESTIMONIALS —
//         </span> */}
//         <h2 className="text-4xl md:text-5xl font-semibold mb-6">Відгуки</h2>

//         {/* Reviews */}
//         <div className="relative h-[200] md:h-56">
//           {reviews.map((review, index) => (
//             <div
//               key={index}
//               className={`absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity duration-1000 ease-in-out ${
//                 index === currentIndex ? "opacity-100" : "opacity-0"
//               }`}
//             >
//               <p className="text-lg italic leading-relaxed max-w-3xl">
//                 `&quot;`{review.text}`&quot;`
//               </p>
//               {/* <div className="mt-6">
//                 <div className="uppercase font-semibold">{review.author}</div>
//                 <div className="text-sm text-gray-400">{review.position}</div>
//               </div> */}
//             </div>
//           ))}
//         </div>

//         {/* Dots Navigation */}
//         <div className="mt-6 flex justify-center space-x-2">
//           {reviews.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => handleDotClick(index)}
//               className={`h-3 w-3 rounded-full transition-colors duration-300 ${
//                 index === currentIndex ? "bg-white" : "bg-gray-500"
//               }`}
//               aria-label={`Go to review ${index + 1}`}
//             ></button>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

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
    text: "Друзі, рекомендую. Завітайте до ресторану. Bce на найвищому рівні...",
    author: "Anna Williams",
    position: "Food Blogger",
  },
  {
    text: "Затишне, казкове місце з прекрасним сервісом. Тому обрала саме ваше кафе для своєї новорічної вечері...",
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
    }, 7000); // Slightly slower for longer text

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
              <div className="mt-4">
                <div className="font-semibold uppercase text-sm sm:text-base">
                  {review.author}
                </div>
                <div className="text-xs text-gray-400">{review.position}</div>
              </div>
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
