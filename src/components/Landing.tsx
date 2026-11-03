import Image from "next/image";
import myphoto from "@/public/IMG_3616.jpg";

const Landing = () => {
  return (
    <div className="flex h-screen max-w-screen items-center justify-center overflow-clip">
      <div className="relative -z-1 h-9/10 overflow-clip">
        <Image
          src={myphoto}
          alt="myphoto"
          className="object-fill md:-mt-40 lg:-mt-60"
        />
      </div>
      <div className="absolute flex h-full w-full cursor-default flex-col items-center justify-end p-10 md:items-start">
        <div className="text-dusty-rose font-koulen mb-5 w-1/3 text-center text-6xl text-balance md:text-7xl/30 lg:text-8xl/30">
          Motunrayo Lawrence
        </div>
        <div className="text-my-gray-100 mb-4 rounded-4xl bg-black/60 p-5 text-center md:text-start lg:w-1/3">
          I am a computer science student at UC Riverside with experience in
          software development, UI/UX, media production and data analytics. I
          hope to combine my skills in software development and UI/UX with my
          passion for media, film and the entertainment industry.
        </div>
      </div>
    </div>
  );
};

export default Landing;
