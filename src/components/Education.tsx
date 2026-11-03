import Image from "next/image";
import UCR from "@/public/_DSF9350_Original.jpg";

const Education = () => {
  return (
    <div className="flex flex-col text-lg">
      <div className="mt-24 mb-2 ml-10 text-xl font-bold text-white">
        Education
      </div>
      <div className="flex w-full flex-col items-center justify-between gap-6 p-4 md:flex-row md:items-start md:gap-4 md:p-8">
        <div className="flex w-full justify-center md:w-1/2 lg:w-1/2">
          <Image
            src={UCR}
            alt="UC Riverside"
            className="h-auto w-full rounded-lg object-cover"
            priority
          />
        </div>
        <div className="w-full text-center text-sm text-white md:w-1/2 md:text-right lg:w-1/3 lg:text-base">
          <div className="mb-4">
            <span className="font-semibold">
              University of California, Riverside
            </span>{" "}
            <br />
            09/2023 - 06/2027
            <br />
            Bachelor of Science, Computer Science | GPA: 3.63
          </div>

          <hr className="mb-4 border border-slate-500" />

          <div className="text-left md:text-right">
            <p className="mb-3">
              <span className="font-bold">Coursework:</span> Data Structures &
              Algorithms, Software Construction, Discrete Structures, Computer
              Systems Architecture, Linear Algebra, Introduction to Artificial
              Intelligence, Virtual Reality, Operating Systems
            </p>

            <p>
              <span className="font-bold">Activities and Associations: </span>
              National Society of Black Engineers - Secretary, Association of
              Computing Machinery - Spark Lead, Tennis @ UCR, Nigerian Student
              Association
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
