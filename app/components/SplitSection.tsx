import clsx from "clsx";
type SplitSectionProps = {
    /** Text content goes here */
    children: React.ReactNode;

    /** Image/media column content goes here */
    media: React.ReactNode;

    /** Controls which side the media is on (desktop+) */
    mediaPosition?: "left" | "right";

    /** Optional section styling */
    className?: string;
    sectionClassName?: string;

    /** Optional headings/ids etc */
    id?: string;

    /** Adjust vertical padding if needed */
    padding?: "sm" | "md" | "lg";
};

const paddingClass: Record<NonNullable<SplitSectionProps["padding"]>, string> = {
    sm: "py-8 sm:py-10",
    md: "py-10 sm:py-12",
    lg: "py-14 sm:py-16",
};
const SplitSection = ({
    children,
    media,
    mediaPosition = "right",
    className,
    sectionClassName,
    id,
    padding = "md",
}: SplitSectionProps) => {
    const mediaOnLeft = mediaPosition === "left";

    return (
        <section id={id} className={clsx("bg-white", paddingClass[padding], sectionClassName)}>
            <div className={clsx("container mx-auto px-4 sm:px-6", className)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
                    {/* Text */}
                    <div className={clsx("flex flex-col", mediaOnLeft ? "order-2 md:order-2" : "order-2 md:order-1")}>
                        {children}
                    </div>

                    {/* Media */}
                    <div className={clsx(mediaOnLeft ? "order-1 md:order-1" : "order-1 md:order-2")}>
                        {media}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SplitSection