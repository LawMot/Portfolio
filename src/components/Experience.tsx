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
    <div className="-mt-22 flex h-[50vh] md:h-[60vh] lg:h-[70vh] w-full flex-col bg-gradient-to-t from-black from-90% to-black/0 mb-15 md:mb-5">
      <div className="mt-24 mb-4 ml-6 md:ml-10 text-xl font-bold text-white">
        Experience
      </div>

      <div className="relative flex h-full w-full items-center justify-center px-18 lg:px-8">
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 md:left-2 z-10 hidden sm:flex h-10 w-10 items-center justify-center rounded-full text-xl text-white hover:bg-white/20"
        >
          ⟨
        </button>

        <div
          ref={carouselRef}
          className="flex w-full gap-10 md:gap-6 overflow-x-auto scroll-smooth no-scrollbar flex-nowrap items-center px-4 py-2"
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
          className="absolute right-2 md:right-1 z-10 hidden sm:flex h-10 w-10 items-center justify-center rounded-full  text-xl text-white hover:bg-white/20"
        >
          ⟩
        </button>
      </div>
    </div>
  );
};

export default Experience;