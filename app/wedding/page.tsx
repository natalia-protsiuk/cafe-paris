import Image from "next/image";
import SplitSection from "../components/SplitSection";
import Contact from "../components/Contact";
import Reviews from "../components/Reviews";
import PricingSection from "../components/PricingSection";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Весілля в Миколаєві | Ресторан для весілля Cafe Paris — від 1000 грн",
    description: "Ресторан для весілля в Миколаєві Cafe Paris — банкетне меню від 800 грн з людини, найкраща кухня міста, безкоштовні весільні декорації та індивідуальний підхід.",
};

export default function WeddingPage() {
    return (
        <>
            <div className="relative sm:h-44 md:h-80 w-full overflow-hidden bg-black">
                <div className="absolute inset-0 w-full h-full bg-cover bg-center opacity-60" style={{ backgroundImage: `url(/images/wedding-in-mykolaiv.jpg)` }}></div>
            </div>

            <section className="bg-white py-10 sm:py-12">
                <div className="container mx-auto text-center px-4 sm:px-6">
                    <div className="smalltitle mb-4">Весілля</div>
                    <h1 className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-900">
                        Весілля в Cafe “Paris” у Миколаєві
                    </h1>
                    <div className="max-w-3xl mx-auto space-y-5 text-base sm:text-lg text-gray-700 leading-relaxed">
                        Весілля в Cafe Paris у Миколаєві - це найкраща кухня в місті,
                        чесні ціни та продумана організація весільного банкету.
                        Ми проводимо весільні банкети до 100 гостей.
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-6 max-w-6xl mx-auto mt-10">
                        <Image
                            className="mx-auto w-full h-auto object-cover rounded-md"
                            src="/images/wedding-cafe-paris-mykolaiv.jpg"
                            alt="Wedding Hero"
                            width={600}
                            height={375}
                        />
                        <Image
                            className="mx-auto w-full h-auto object-cover rounded-md"
                            src="/images/wedding-food-cafe-paris-mykolaiv.jpg"
                            alt="Set wedding table"
                            width={600}
                            height={375}
                        />
                    </div>
                </div>
            </section >
            <section className="bg-white py-10 sm:py-12">
                <div className="max-w-6xl mx-auto">
                    <SplitSection
                        media={<Image className="mx-auto" src="/images/wedding-table-restaurant-in-mykolaiv.jpg" alt="Set wedding table" width={800} height={570} />}
                    >
                        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-900">Чому обирають Cafe Paris</h2>
                        <ul className="list-disc list-outside pl-6 space-y-2 text-base sm:text-lg text-gray-700 leading-relaxed">
                            <li>Одна з найкращих кухонь у Миколаєві</li>
                            <li>Адекватні ціни без прихованих доплат</li>
                            <li>Організація банкету під ключ</li>
                            <li>Просторий банкетний зал до 100 гостей</li>
                        </ul>
                    </SplitSection>
                </div>
                <div className="max-w-6xl mx-auto">
                    <SplitSection
                        media={<Image className="mx-auto" src="/images/wedding-restaurant-in-mykolaiv-cafe-paris.jpg" alt="Wedding Hero" width={2000} height={570} />}
                        mediaPosition="left"
                        className="text-base"
                    >
                        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-900">Весілля під ключ</h2>
                        <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                            Ми допомагаємо організувати весільний банкет від початку до кінця:
                        </p>
                        <ul className="list-disc list-outside pl-6 space-y-2 text-base sm:text-lg text-gray-700 leading-relaxed">
                            <li>складаємо весільне меню</li>
                            <li>організовуємо банкет</li>
                            <li>контролюємо таймінг</li>
                            <li>координуємо видачу блюд в день весілля</li>
                        </ul>
                    </SplitSection>
                </div>
            </section>
            <section id="packages" className="bg-white py-10 sm:py-12">
                <div className="container mx-auto text-center px-4 sm:px-6">
                    <div className="smalltitle mb-4">Пакети</div>
                    <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-900">
                        Пакети та ціни
                    </h2>
                    <div className="max-w-3xl mx-auto space-y-5 text-base sm:text-lg text-gray-700 leading-relaxed">
                        Ми пропонуємо готові пакети весільного меню, а також індивідуальні варіанти під ваш бюджет від 1000 гр.
                    </div>
                </div>
                <PricingSection />

                {/*<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-6 max-w-6xl mx-auto mt-10">*/}
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <div className="smalltitle mb-4">декорації</div>
                    <div className="container mx-auto text-center px-4 sm:px-6">
                        При замовленні весільного банкету ми надаємо <strong>весільні декорації безкоштовно</strong>.
                        Також у нас є контакти перевірених музикантів та професійної ведучої,
                        які регулярно працюють у нашому ресторані.
                    </div>
                </div>
                {/* <div className="text-center max-w-md"> 
                    <div className="smalltitle mb-4">Забронювати дату</div>
                    <div className="container mx-auto text-center px-4 sm:px-6">
                        Напишіть нам або зателефонуйте, щоб перевірити вільну дату,
                        обговорити бюджет та деталі вашого весілля в Cafe “Paris”.
                    </div>
                </div>
            </div> */}
            </section >
            <section id="reviews">
                <Reviews />
            </section>
            <section id="contact">
                <Contact />
            </section>
        </>
    );
}
