/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

export default function Carousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, curr]);

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 ">
            {slide}
          </div>
        ))}
      </div>

      {/* Left and right controls */}
      <div className="absolute inset-0 flex items-center justify-between ">
        <button
          className=" rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
          onClick={prev}
        >
          <ChevronLeft size={40} />
        </button>
        <button
          className="rounded-full shadow bg-white/80 text-gray-800 hover:bg-white  "
          onClick={next}
        >
          <ChevronRight size={40} />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`transition-all w-3 h-3 bg-white rounded-full ${
                curr === i ? "p-2" : "bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
