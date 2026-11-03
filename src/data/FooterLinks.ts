import { IconType } from "react-icons";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

interface FooterLink {
  icon: IconType;
  url: string;
}

export const footerData: FooterLink[] = [
  {
    icon: FaLinkedin,
    url: "https://linkedin.com/in/motunrayo-lawrence",
  },
  {
    icon: FaGithub,
    url: "https://github.com/LawMot",
  },
];
