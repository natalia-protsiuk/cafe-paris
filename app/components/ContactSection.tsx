"use client";

import Image from "next/image";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaCalendarAlt,
} from "react-icons/fa";

export default function ContactSection() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        {/* Image Section */}
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <Image
              alt="Café Paris interior"
              src="/images/set-table.jpg"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pt-16 pb-24 sm:pt-20 sm:pb-32 lg:mr-0 lg:ml-8 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
            <p className="text-base/7 font-semibold text-cyan-400">
              700 грн з людини
            </p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Бронювання столиків та банкетів
            </h1>
            <p className="mt-6 text-xl/8 text-gray-700">
              Для створення незабутнього свята рекомендуємо заздалегідь
              бронювати столики для банкетів та весіль. Завітайте до нас, щоб
              насолодитися вишуканими стравами та винами.
            </p>

            <div className="mt-10 max-w-xl text-base/7 text-gray-400 lg:max-w-none">
              <p>
                Наша команда завжди готова допомогти вам організувати ідеальну
                подію. Зв'яжіться з нами за телефоном або відвідайте наш
                ресторан за вказаною адресою.
              </p>

              <p className="mt-8">
                Ми пропонуємо окреме меню для щоденних візитів і банкетів.
                Завдяки нашому досвіду, ми завжди готові допомогти вам обрати
                ідеальні страви для будь-якої події.
              </p>

              <h2 className="mt-16 text-2xl font-bold tracking-tight text-white">
                Особливі події та банкети
              </h2>
              <p className="mt-6">
                Якщо ви не знаєте, як найкраще скласти меню для великої
                кількості гостей, ми з радістю підкажемо, пояснимо та підберемо
                варіанти, які зроблять ваше свято чи особливу подію незабутньою.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
