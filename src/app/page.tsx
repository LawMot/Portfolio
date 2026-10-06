import Landing from "@/components/Landing";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";

const Home = () => {
  return (
    <>
      <div id="landing">
        <Landing />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="projects">
        <Projects />
      </div>
    </>
  );
};

export default Home;
