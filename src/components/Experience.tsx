import Card from "./Card";
import experiences from "@/data/ExperienceData";

const Experience = () => {
  return (
    <div className="-mt-22 flex h-[65vh] w-full flex-col bg-linear-to-t from-black from-80% to-black/0">
      <div className="mt-24 mb-2 ml-10 text-xl font-bold text-white">
        Experience
      </div>
      <div className="flex h-full justify-center gap-8">
        {experiences.map(({ title, toColor, fromColor }) => (
          <Card
            key={title}
            title={title}
            fromColor={fromColor}
            toColor={toColor}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
