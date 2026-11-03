import Image from "next/image";
import UCR from "@/public/_DSF9350_Original.jpg";

const Education = () => {
  return (
    <div className="flex flex-col text-lg">
      <div className="mt-24 mb-2 ml-10 text-xl font-bold text-white">
        Education
      </div>
      <div className="flex flex-col md:flex-row w-full justify-between items-center md:items-start p-4 md:p-8 gap-6 md:gap-4">
        <div className="w-full md:w-1/2 lg:w-1/2 flex justify-center">
          <Image 
            src={UCR} 
            alt="UC Riverside" 
            className="w-full h-auto object-cover rounded-lg"
            priority 
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 text-center md:text-right text-sm lg:text-base text-white">
          <div className="mb-4">
            <span className="font-semibold">University of California, Riverside</span> <br />
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