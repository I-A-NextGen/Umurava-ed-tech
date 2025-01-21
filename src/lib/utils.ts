import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const navlinks = [
  { href: "/", label: "Home" },
  { href: "/Challenges-&-Hackathons", label: "Challenge & Hackthons" },
  { href: "/", label: "For Educational Institutions" },
  { href: "/", label: "About Us" },
  { href: "/", label: "Contact Us " },
];

export const projects = [
  {
    text: "UX / UI Design",
    link: "",
  },
  {
    text: "Data Science",
    link: "",
  },
  {
    text: "Graphic Design",
    link: "",
  },
  {
    text: "Data Analysis & Research",
    link: "",
  },
  {
    text: "Animation",
    link: "",
  },
  {
    text: "Videography & Photography",
    link: "",
  },
  {
    text: "Data Science",
    link: "",
  },
  {
    text: "Al & Maching Learning",
    link: "",
  },
  {
    text: "Web3",
    link: "",
  },
  {
    text: "Digital Marketing & Communications",
    link: "",
  },
];

export const Challenge = {
  title: "Challenge",
  text: "Design a Dashboard for SokoFund",
  skills: ["UX/UI Design", "Graphic Design","user Research"],
  seniority:["junior","intermediate","senior"],
  timeline:15,
  open:true
};
