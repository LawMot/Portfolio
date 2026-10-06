"use client";

//import Link from "next/link";
import { useState } from "react";

interface CardProps {
  title: string;
  fromColor: string;
  toColor: string;
  description: string;
}

const Card = ({ title, fromColor, toColor, description }: CardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)} className="flex w-1/6">
        <div
          className={`flex bg-gradient-to-b ${fromColor} ${toColor} font-dot-gothic m-6 w-full items-end rounded-lg pb-2 pl-2 text-4xl text-white shadow-[6px_7px_10px_1px_rgba(255,255,255,0.2)]`}
        >
          {title}
        </div>
      </button>
      {isOpen && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm`}
          onClick={() => setIsOpen(false)}
        >
          <div
            className={`relative w-full max-w-2xl overflow-hidden rounded-xl bg-gradient-to-b ${fromColor} ${toColor} text-white shadow-2xl`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-lg hover:bg-black/80"
            >
              ×
            </button>

            <div className="relative h-64 w-full sm:h-80"></div>

            <div className="h-58 bg-linear-to-t from-black from-10% to-black/0 p-6">
              <div className="mb-3 text-2xl font-bold">{title}</div>
              <div className="mb-4 w-fit rounded-md bg-white px-3 text-black">
                ▶ Link
              </div>

              <div className="text-sm leading-6 text-zinc-300">
                {description}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
