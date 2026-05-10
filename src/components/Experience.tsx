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
          fromColor="from-blue-950"
          toColor="to-blue-200/50"
        />
        <Card
          title="Peer Mentor"
          fromColor="from-lime-950"
          toColor="to-lime-100/40"
        />
        <Card
          title="Makerspace Intern"
          fromColor="from-fuchsia-950"
          toColor="to-fuchsia-100/50"
        />
        <Card
          title="Content Creator/ Instructor"
          fromColor="from-amber-950"
          toColor="to-amber-100/40"
        />
        <Card
          title="Web Dev Intern"
          fromColor="from-cyan-950"
          toColor="to-cyan-100/40"
        />
      </div>
    </div>
  );
};

export default Experience;
