import Image from "next/image";
const images = [
  "/images/gallery-8.jpg",
  "/images/gallery-6.jpg",
  "/images/gallery-9.jpg",
  "/images/gallery-5.jpg",
  "/images/gallery-3.jpg",
  "/images/gallery-2.jpg",
  "/images/gallery-1.jpg",
  "/images/gallery-4.jpg",
  "/images/gallery-7.jpg",
];

export default function Gallery() {
  return (
    <section className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden  shadow-lg">
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-[300] object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
