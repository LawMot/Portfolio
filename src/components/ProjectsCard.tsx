"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface CardProps {
  image: StaticImageData;
  title: string;
  link: string;
  description: string;
}

const ProjectsCard = ({ image, title, description, link }: CardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex h-60 w-full shrink-0 justify-center px-2 sm:w-1/2 lg:w-1/4"
      >
        <div className="font-dot-gothic relative h-full w-full overflow-hidden rounded-lg shadow-[6px_7px_10px_1px_rgba(255,255,255,0.2)]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition duration-300 hover:scale-105"
          />
        </div>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-2xl overflow-hidden rounded-xl bg-zinc-900 text-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-lg hover:bg-black/80"
            >
              ×
            </button>

            <div className="relative h-64 w-full sm:h-80">
              <Image src={image} alt={title} fill className="object-cover" />
            </div>

            <div className="h-50 bg-linear-to-t from-black from-10% to-black/0 p-6">
              <div className="mb-3 text-2xl font-bold">{title}</div>
              <div className="mb-4 w-fit rounded-md bg-white px-3 text-black">
                <Link href={link} target="_blank">
                  {" "}
                  ▶ Link
                </Link>
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

export default ProjectsCard;
