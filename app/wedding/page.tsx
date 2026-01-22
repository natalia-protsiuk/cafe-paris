import Image from "next/image";
export default function WeddingPage() {
    return (
        <section className=" bg-white py-10 sm:py-12 min-h-screen">
            <div className="container mx-auto px-4 sm:px-6">
                <h1 className="text-3xl sm:text-4xl font-semibold mb-8 text-center text-gray-900">
                    Весілля в Cafe “Paris” у Миколаєві
                </h1>

                <Image className="mx-auto" src="/images/wedding-restaurant-in-mykolaiv-cafe-paris.jpg" alt="Wedding Hero" width={2000} height={570} />
                <div className="max-w-3xl mx-auto">
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">


                        Весілля в Cafe Paris у Миколаєві - це найкраща кухня в місті,
                        чесні ціни та продумана організація весільного банкету.
                        Ми проводимо весільні банкети до 100 гостей.
                    </p>

                    <button>Забронювати дату весілля</button>


                    <section>
                        <p>
                            Шукаєте, де святкувати весілля в Миколаєві без зайвого стресу?
                            У Cafe “Paris” ви отримуєте все в одному місці:
                            смачну кухню, зрозумілі ціни, організацію банкету та безкоштовні декорації.
                        </p>
                    </section>


                    <h2 className="smalltitle text-white mb-4">Чому обирають Cafe Paris</h2>
                    <ul>
                        <li>Одна з найкращих кухонь у Миколаєві</li>
                        <li>Адекватні ціни без прихованих доплат</li>
                        <li>Організація банкету під ключ</li>
                        <li>Просторий банкетний зал до 100 гостей</li>
                    </ul>


                    <h2>Весілля під ключ</h2>
                    <p>Ми допомагаємо організувати весільний банкет від початку до кінця:</p>
                    <ul>
                        <li>складаємо весільне меню</li>
                        <li>організовуємо банкет</li>
                        <li>контролюємо таймінг</li>
                        <li>координуємо видачу блюд в день весілля</li>
                    </ul>


                    <h2>Пакети та ціни</h2>

                    <h3>Пакет «Стандарт» — 800 грн/гість</h3>
                    (Додатково: 50 грн/гість за обслуговування)



                </div>
            </div>
        </section >
    );
}
