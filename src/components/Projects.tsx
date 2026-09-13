"use client";

import { useRef } from "react";
import ProjectsCard from "./ProjectsCard";

import CrossAMole from "@/public/CrossAMole.png";
import Flushed from "@/public/flushed.png";
import CrtlBinge from "@/public/CTRL+ALT+BINGE.webp";
import RSD from "@/public/RSD.png";
import HCG from "@/public/HCG.png";
import ML from "@/public/MLAlgo.png";
import SOSPizza from "@/public/SOSPizza.png";

const Projects = () => {
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
    <div className="mt-8 w-full">
      <div className="mb-2 ml-10 text-xl font-bold text-white">Projects</div>

      <div className="relative mb-10 flex items-center">
        <button
          onClick={() => scroll("left")}
          className="z-10 flex h-10 w-10 items-center justify-center rounded-full text-2xl text-white backdrop-blur hover:bg-white/10"
        >
          ⟨
        </button>

        <div ref={carouselRef} className="flex h-60 w-full overflow-hidden">
          <ProjectsCard
            image={CrossAMole}
            title="Cross-A-Mole"
            description="A virtual reality crossbow simulation game built with Unity, C, and a Meta Quest 2 headset."
            link="https://drive.google.com/file/d/1bpKIFuFMJ1L_vybiLswLJtFZJoPqpvbH/view?usp=drive_link"
          />

          <ProjectsCard
            image={Flushed}
            title="Flushed"
            description="A website for finding the best-rated public and private restrooms on the UC Riverside Campus created with HTM/CSS, REact.js, Vite, React, Node.js, Express.js, MongoDB, Mongoose, JWT, and Google OAuth."
            link="https://github.com/UCR-CS110/final-project-flushed"
          />

          <ProjectsCard
            image={ML}
            title="Machine Learning Algorithm"
            description="A machine learning algorithm in Python to identify optimal subsets of predictive variables in
high-dimensional datasets implementing Forward Selection and Backward Elimination wrapper methods using a k-Nearest Neighbors classifier
to evaluate feature importance."
            link="https://github.com/LawMot/CS170Project2"
          />

          <ProjectsCard
            image={SOSPizza}
            title="SOS Pizza"
            description="A discreet website disguised as a pizza ordering site to provide resources to those impacted by domestic violence built with Next.js, TypeScript, TailwindCSS, React, ESLint and Prettier."
            link="https://github.com/LawMot/sospizza"
          />

          <ProjectsCard
            image={CrtlBinge}
            title="CTRL+ALT+BINGE"
            description="A TV show reccomendation application built with C++."
            link="https://github.com/LawMot/Ctrl-Alt-Binge"
          />

          <ProjectsCard
            image={HCG}
            title="Highlander Consulting Group Website"
            description="A website for the UC Riverside's Highlander Consulting Group built with Next.js, TypeScript, TailwindCSS, React, ESLint and Prettier."
            link="https://github.com/acm-ucr/hcg-website"
          />

          <ProjectsCard
            image={RSD}
            title="Riverside Surging Dragons"
            description="A website for the UC Riverside's Riverside Surging Dragons built with Next.js, TypeScript, TailwindCSS, React, ESLint and Prettier."
            link="https://github.com/acm-ucr/rsd-website"
          />
        </div>

        <button
          onClick={() => scroll("right")}
          className="z-10 flex h-10 w-10 items-center justify-center rounded-full text-2xl text-white backdrop-blur hover:bg-white/10"
        >
          ⟩
        </button>
      </div>
    </div>
  );
};

export default Projects;
