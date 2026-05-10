import Image from "next/image";
import UCR from "@/public/UCR.webp";
const Education = () => {
  return (
    <div className="flex flex-col text-lg">
      <div className="mt-24 mb-2 ml-10 text-xl font-bold text-white">
        Education
      </div>
      <div className="flex w-full justify-between p-8">
        <Image src={UCR} alt="UC Riverside"></Image>
        <div className="w-1/3 text-right text-white">
          <div>
            University of California, Riverside <br />
            09/2023 - 06/2027
            <br />
            Bachelor of Science, Computer Science | GPA: 3.66
          </div>
          <hr className="mb-4 border-2" />
          <div>
            <span className="font-bold">Coursework:</span> Data Structures &
            Algorithms, Software Construction, Discrete Structures, Computer
            Systems Architecture, Linear Algebra <br />
            <br />
            <span className="font-bold">Activities and Associations:</span>{" "}
            National Society of Black Engineers - Secretary, Association of
            Computing Machinery - Spark Lead, Tennis @ UCR, Nigerian Student
            Association
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
