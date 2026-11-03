"use client";

import { useRef } from "react";
import Card from "./Card";
import experiences from "@/data/ExperienceData";

const Experience = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: direction === "left" ? -400 : 400,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="-mt-22 mb-15 flex h-[50vh] w-full flex-col bg-gradient-to-t from-black from-90% to-black/0 md:mb-5 lg:mb-15 md:h-[60vh] lg:h-[70vh]">
      <div className="mt-24 mb-4 ml-6 text-xl font-bold text-white md:ml-10">
        Experience
      </div>

      <div className="relative flex h-full w-full items-center justify-center px-18 lg:px-8">
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 z-10 hidden h-10 w-10 items-center justify-center rounded-full text-xl text-white hover:bg-white/20 sm:flex md:left-2"
        >
          ⟨
        </button>

        <div
          ref={carouselRef}
          className="no-scrollbar flex w-full flex-nowrap items-center gap-10 overflow-x-auto scroll-smooth px-4 py-2 md:gap-6"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {experiences.map(({ title, toColor, fromColor, description }) => (
            <Card
              key={title}
              title={title}
              fromColor={fromColor}
              toColor={toColor}
              description={description}
            />
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-2 z-10 hidden h-10 w-10 items-center justify-center rounded-full text-xl text-white hover:bg-white/20 sm:flex md:right-1"
        >
          ⟩
        </button>
      </div>
    </div>
  );
};

export default Experience;
