import Link from "next/link";

type PricingCardProps = {
    title: string;
    price: number;
    priceUnit: string;
    features: { name: string; value: string }[];
    ctaLabel: string;
    ctaHref: string;
};
const PricingCard = ({
    title,
    price,
    priceUnit,
    features,
    ctaLabel,
    ctaHref,
}: PricingCardProps) => {
    return (
        <div className="flex h-full flex-col bg-gray-50 px-12 py-16 text-center">
            <h3 className="font-serif text-2xl font-semibold text-gray-900">
                {title}
            </h3>

            <div className="mt-6">
                <div className="font-serif text-5xl leading-none text-gray-900">
                    {price}
                </div>
                <div className="mt-1 text-sm tracking-wide text-gray-600">
                    {priceUnit}
                </div>
            </div>

            <ul className="mt-10 space-y-3 text-sm tracking-wide text-gray-700">
                {features.map((feature) => (
                    <li
                        key={feature.name}
                        className="flex items-baseline justify-between gap-4"
                    >
                        <span className="font-semibold">{feature.name}</span>
                        <span className="text-right">{feature.value}</span>
                    </li>
                ))}
            </ul>


            <div className="mt-auto pt-10">
                <Link href="#contact" className=" cta-button inline-block px-10 py-4 text-xs font-semibold tracking-[0.25em] uppercase text-white">
                    {ctaLabel}

                </Link>
                <p className="text-xs italic mt-5">* Додатково: 50 грн/гість за обслуговування</p>
            </div>

        </div>
    )
}

export default PricingCard