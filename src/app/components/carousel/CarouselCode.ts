const CarouselCode = 
`import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface CarouselProps {
  children: React.ReactNode;
  size: string;
  autoSlide?: boolean; // autoSlide is optional
  autoSlideInterval?: number; // autoSlideInterval is optional
}

export default function Carousel({
  children,
  size,
  autoSlide = false,
  autoSlideInterval = 3000,
}: CarouselProps) {
  const [curr, setCurr] = useState(0);

  // Normalize children to an array using React.Children.toArray
  const slides = React.Children.toArray(children);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, next]); // Removed next from dependency

  return (
    <div className={\`overflow-hidden relative \${size}\`}>
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: \`translateX(-\${curr * 100}%)\` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/40 text-gray-800 hover:bg-white"
        >
          <ChevronLeft size={25} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/40 text-gray-800 hover:bg-white"
        >
          <ChevronRight size={25} />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i} // Added key for each element in the loop
              className={\`
              transition-all w-3 h-3 bg-white rounded-full
              \${curr === i ? "p-2" : "bg-opacity-50"}
            \`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
`;

export default CarouselCode;
