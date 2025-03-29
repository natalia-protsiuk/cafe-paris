// components/MenuSkeleton.tsx

export default function MenuSkeleton() {
  return (
    <section className="container mx-auto px-4 lg:px-16 py-12 animate-pulse">
      <div className="text-center mb-8 px-4">
        <div className="h-4 w-24 bg-cyan-200 mx-auto mb-2 rounded"></div>
        <div className="h-8 w-2/3 bg-gray-200 mx-auto rounded mb-3"></div>
        <div className="h-4 w-1/2 bg-gray-100 mx-auto rounded"></div>
      </div>

      {/* Category buttons */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-8 w-24 bg-gray-200 rounded-full"></div>
        ))}
      </div>

      {/* Fake menu items */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="border-b border-dotted border-gray-300 pb-4">
            <div className="h-5 w-2/3 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 w-1/2 bg-gray-100 rounded"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
