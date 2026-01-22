"use client";

import Image from "next/image";
import { ReactNode } from "react";

export interface BentoBoxItem {
  id: string;
  image?: string;
  imageAlt?: string;
  title?: string;
  description?: string;
  content?: ReactNode;
  className?: string;
  span?: {
    col?: number;
    row?: number;
  };
  overlay?: boolean;
  overlayOpacity?: number;
}

interface BentoBoxProps {
  items: BentoBoxItem[];
  columns?: number;
  gap?: string;
  className?: string;
}

export default function BentoBox({
  items,
  columns = 4,
  gap = "gap-4",
  className = "",
}: BentoBoxProps) {
  const getColSpanClass = (span?: number) => {
    if (!span) return "";
    const spanClasses: Record<number, string> = {
      1: "md:col-span-1",
      2: "md:col-span-2",
      3: "md:col-span-3",
      4: "md:col-span-4",
    };
    return spanClasses[span] || "";
  };

  const getRowSpanClass = (span?: number) => {
    if (!span) return "";
    const spanClasses: Record<number, string> = {
      1: "md:row-span-1",
      2: "md:row-span-2",
      3: "md:row-span-3",
      4: "md:row-span-4",
    };
    return spanClasses[span] || "";
  };

  const getGridColsClass = (cols: number) => {
    const colsClasses: Record<number, string> = {
      2: "lg:grid-cols-2",
      3: "lg:grid-cols-3",
      4: "lg:grid-cols-4",
      5: "lg:grid-cols-5",
      6: "lg:grid-cols-6",
    };
    return colsClasses[cols] || "lg:grid-cols-4";
  };

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 ${getGridColsClass(
        columns
      )} ${gap} ${className}`}
    >
      {items.map((item) => {
        const colSpan = getColSpanClass(item.span?.col);
        const rowSpan = getRowSpanClass(item.span?.row);

        // Calculate height based on row span
        const getMinHeight = () => {
          if (item.span?.row) {
            const heightMap: Record<number, string> = {
              1: "min-h-[200px] sm:min-h-[250px]",
              2: "min-h-[400px] sm:min-h-[500px]",
              3: "min-h-[600px] sm:min-h-[750px]",
              4: "min-h-[800px] sm:min-h-[1000px]",
            };
            return heightMap[item.span.row] || "min-h-[200px] sm:min-h-[250px]";
          }
          return "min-h-[200px] sm:min-h-[250px]";
        };

        return (
          <div
            key={item.id}
            className={`relative group overflow-hidden rounded-lg aspect-square md:aspect-auto ${getMinHeight()} ${colSpan} ${rowSpan} ${
              item.className || ""
            }`}
          >
            {/* Image Background */}
            {item.image && (
              <>
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={item.image}
                    alt={item.imageAlt || item.title || ""}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                {/* Overlay */}
                {item.overlay !== false && (
                  <div
                    className="absolute inset-0 bg-black transition-opacity duration-300 group-hover:opacity-60"
                    style={{
                      opacity: item.overlayOpacity ?? 0.4,
                    }}
                  />
                )}
              </>
            )}

            {/* Content */}
            {(item.title || item.description || item.content) && (
              <div className="relative z-10 h-full flex flex-col justify-end p-4 sm:p-6 text-white">
                {item.title && (
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                    {item.title}
                  </h3>
                )}
                {item.description && (
                  <p className="text-sm sm:text-base text-gray-200">
                    {item.description}
                  </p>
                )}
                {item.content && <div className="mt-2">{item.content}</div>}
              </div>
            )}

            {/* If no content, ensure minimum height */}
            {!item.title && !item.description && !item.content && (
              <div className="relative z-10 h-full min-h-[200px] sm:min-h-[250px]" />
            )}
          </div>
        );
      })}
    </div>
  );
}
