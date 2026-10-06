export interface ExperienceData {
  title: string;
  fromColor: string;
  toColor: string;
  description: string;
}
const experiences: ExperienceData[] = [
  {
    title: "Web Dev Lead",
    fromColor: "from-blue-950",
    toColor: "to-blue-200/50",
    description:
      "Develop and maintain websites using a tech stack including React, Next.js, TailwindCSS, and Git. Collaborate with 8–11 developers to implement features, fix bugs, and ensure cross-platform compatibility",
  },
  {
    title: "Peer Mentor",
    fromColor: "from-lime-950",
    toColor: "to-lime-100/40",
    description:
      "Provide ongoing organizational support for a year-long mentorship program serving underrepresented students. Coordinate monthly virtual workshops, including scheduling, materials preparation, and attendee communication. Collaborate with faculty and staff to ensure program goals, documentation, and timelines are met.",
  },
  {
    title: "Makerspace Intern",
    fromColor: "from-fuchsia-950",
    toColor: "to-fuchsia-100/50",
    description:
      "Assisted patrons with digital design workflows while maintaining professionalism in a public-facing environment. Documented processes, tested equipment, and supported day-to-day operations of a shared creative space. Managed multiple requests simultaneously while following safety and confidentiality guidelines.",
  },
  {
    title: "Content Creator/ Instructor",
    fromColor: "from-amber-950",
    toColor: "to-amber-100/40",
    description:
      "Supported middle and high school students in Python programming, data analysis, and introductory machine learning concepts. Captured and edited content using Adobe Creative Suite, producing a video that achieved 40K+ views on YouTube. Balanced creative production with instructional responsibilities and deadlines",
  },
  {
    title: "Web Dev Intern",
    fromColor: "from-cyan-950",
    toColor: "to-cyan-100/40",
    description:
      "Collaborated with a team in conceptualizing, developing, and maintaining client-facing websites. Built and refined front-end components using HTML and CSS, improving usability and responsiveness. Developed and improved the logical structure of an application, boosting performance and scalability",
  },
];

export default experiences;
