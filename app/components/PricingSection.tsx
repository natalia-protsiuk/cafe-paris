import PricingCard from "./PricingCard";

const pricingPlans = [
    {
        id: "basic",
        title: "Пакет «Стандарт»",
        price: 1000,
        priceUnit: "грн/гість",
        features: [
            { name: "Салати", value: "3 види" },
            { name: "Холодні закуски", value: "3 види" },
            { name: "Картопля", value: "1 вид" },
            { name: "М’ясо", value: "5 видів" },
            { name: "Риба", value: "1 вид" },
            { name: "Пляшка алкоголю", value: "на вибір" },
        ],
        ctaLabel: "Забронювати весілля",
        ctaHref: "#",
    },
    {
        id: "standard",
        title: "Пакет «Преміум»",
        price: 1300,
        priceUnit: "грн/гість",
        features: [
            { name: "Салати", value: "3-4 види" },
            { name: "Холодні закуски", value: "3 види" },
            { name: "Морепродукти", value: "3 види" },
            { name: "Картопля", value: "1-2 види" },
            { name: "М’ясо", value: "10 видів" },
            { name: "Печінка", value: "1 вид" },
            { name: "Риба", value: "1 вид" },
            { name: "Пляшка алкоголю", value: "на вибір" },
        ],
        ctaLabel: "Забронювати весілля",
        ctaHref: "#",
    },
    {
        id: "premium",
        title: "Пакет «Делюкс»",
        price: 1700,
        priceUnit: "грн/гість",
        features: [
            { name: "Салати", value: "4 види" },
            { name: "Холодні закуски", value: "5 видів" },
            { name: "Морепродукти", value: "7 видів" },
            { name: "М’ясо", value: "15 видів" },
            { name: "Риба", value: "1-2  види" },
            { name: "Картопля", value: "2 види" },
            { name: "Печінка", value: "1 вид" },
            { name: "Пляшка алкоголю", value: "на вибір" },
        ],
        ctaLabel: "Забронювати весілля",
        ctaHref: "#",
    },
];

const PricingSection = () => {
    return (
        <section className="bg-white py-16">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
                    {pricingPlans.map((plan) => (
                        <PricingCard
                            key={plan.id}
                            title={plan.title}
                            price={plan.price}
                            priceUnit={plan.priceUnit}
                            features={plan.features}
                            ctaLabel={plan.ctaLabel}
                            ctaHref={plan.ctaHref}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PricingSection