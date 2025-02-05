import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import axios from "axios"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const navlinks = [
  { href: "/", label: "Home" },
  { href: "/Challenges-&-Hackathons", label: "Challenge & Hackthons" },
  { href: "/For-learning-institutions", label: "For Educational Institutions" },
  { href: "/about", label: "About Us" },
  { href: "/", label: "Contact Us " },
];

export const projects = [
  {
    text: "Software Development",
    link: "",
  },
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
    text: "Al & Machine Learning",
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


export const partipants = [
  {
    name: "Hilaire Sh",
    role: "Product Designer",
    seniority: "Junior",
    active: false,
  },
  {
    name: "Christian Manzi",
    role: "UX/UI Designer",
    seniority: "Junior",
    active: true,
  },
  {
    name: "Jolly Mutesi",
    role: "Content Creator",
    seniority: "Junior",
    active: true,
  },
  {
    name: "Dr. Samuel Smith",
    role: "Mental Health Professional",
    seniority: "Junior",
    active: true,
  },
  {
    name: "Dr. Lily Chen",
    role: "Dermatologist",
    seniority: "Junior",
    active: true,
  }
]

export const logos = [
  "/logo/Ared 1.png",
  "/logo/CIBA 1.png",
  "/logo/EducationCollaborative 1.png",
  "/logo/Gdg_Kigali 1.png",
  "/logo/HiiL_Logo 1.png",
  "/logo/HiiL_Logo 1.png",
  "/logo/IGIHE_LOGO 1.png",
  "/logo/KeplerLogo 1.png",
  "/logo/laterite 1.png",
  "/logo/SokoFund 1.png",
  "/logo/Tori 1.png",
  "/logo/viamo1.png",
]

export const Skills = [
  "As Career Development and Job Readiness Program",
  "As Skills Assessments Method after a course or a term",
  "As extracurricular activities to complement academic courses",
  "As the portfolio of the Students",
  "As part of Capstone Projects or final-year assignments ",
]

export const api = axios.create({
  baseURL: process.env.BACKEND_URL,
  withCredentials:true,
  headers:{
    'Content-Type': 'application/json',
    Accept:'application/json'
  }
})