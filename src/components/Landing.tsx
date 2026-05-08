import Image from "next/image";
import myphoto from "@/public/myphoto.webp";

const Landing = () => {
  return (
    <div className="flex h-screen max-w-screen items-center justify-center">
      <div className="relative -z-1">
        <Image src={myphoto} alt="myphoto" />
      </div>
      <div className="absolute flex h-full w-full cursor-default flex-col items-start justify-end p-10">
        <div className="text-dusty-rose font-koulen mb-5 w-1/3 text-center text-8xl/30 text-balance">
          Motunrayo Lawrence
        </div>
        <div className="text-my-gray-100 w-1/3">
          I am a computer science student at UC Riverside with experience in
          software development, UI/UX, community outreach and media production.
          I have worked with Typescript, Next.Js, React as a lead web developer
          for UCR’s Association of Computing Machinery. I hope to combine my
          skills in software development and UI/UX with my passion for media,
          film and the entertainment industry.
        </div>
      </div>
    </div>
  );
};

export default Landing;
