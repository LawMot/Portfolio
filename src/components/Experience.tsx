import Card from "./Card";
const Experience = () => {
  return (
    <div className="-mt-22 flex h-[65vh] w-full flex-col bg-linear-to-t from-black from-72% to-black/0">
      <div className="mt-24 mb-2 ml-10 text-xl font-bold text-white">
        Experience
      </div>
      <div className="flex h-full justify-center">
        <Card
          title="Web Dev Lead"
          fromColor="from-blue-900"
          toColor="to-blue-300"
        />
        <Card
          title="Peer Mentor"
          fromColor="from-red-900"
          toColor="to-red-300"
        />
        <Card
          title="Makerspace Intern"
          fromColor="from-green-900"
          toColor="to-green-300"
        />
        <Card
          title="Content Creator/ Instructor"
          fromColor="from-amber-900"
          toColor="to-amber-300"
        />
        <Card
          title="Web Dev Intern"
          fromColor="from-violet-900"
          toColor="to-violet-300"
        />
      </div>
    </div>
  );
};

export default Experience;
