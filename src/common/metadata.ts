export const fullName = "Mathieu Lavoie";
export const roleName = "Tech Lead";
export const address = "96, Rue de la Gare, Saint-Anaclet, Qc";
export const phoneNumer = "(418) 509-4850";
export const email = "mathieulavoie94@gmail.com";
export const website = "matmobile.co";
export const careerOverview =
  "Passionate Web Developer since I was around 12, I've become a reference in CSS/SASS over the last couple of years. My eagerness to always learn more also made me a really solid Javascript/TypeScript developer, and helped me quickly learn and master React and  Web Components.";
export type Skill =
  | "HTML"
  | "CSS/SASS"
  | "JavaScript"
  | "TypeScript"
  | "Git"
  | "React"
  | "Angular"
  | "Java"
  | "JSP"
  | "jQuery"
  | "ASP.NET"
  | "Web Accessibility"
  | "Web Components";

export interface JobHistory {
  title: string;
  company: string;
  skills: Skill[];
  dates: string;
  tasks: string[];
}

export const jobHistory: JobHistory[] = [
  {
    company: "LogMeIn",
    skills: [
      "CSS/SASS",
      "Git",
      "HTML",
      "JavaScript",
      "React",
      "TypeScript",
      "Web Components",
    ],
    title: "Tech Lead, Design Systems",
    dates: "April 2020 - Today",
    tasks: [
      "Helped the company settle down on one technology strategy for its design system",
      "Work in HTML, CSS, TypeScript, React and Web Components in order to ship high quality and accessible components",
      "Work closely with UX to make sure of the feasibility of designs",
      "Built multiple components according to UX specs",
      "Managed to drive adoption across the business, often times ahead of schedule",
      "Make sure to deliver value to our customers, and to reach stakeholders' deadlines",
      "Work with teams to include their needs in quarter plannings",
    ],
  },
  {
    company: "LogMeIn",
    skills: [
      "Angular",
      "CSS/SASS",
      "Git",
      "HTML",
      "JavaScript",
      "React",
      "TypeScript",
    ],
    title: "Senior Software Engineer",
    dates: "November 2018 - April 2020",
    tasks: [
      "Angular4+ development alongside React, HTML, CSS and SASS",
      "Helped build and ship new features in  GoToConnect",
      "Bug fixes, alongside unit testing the application",
      "Work with UX to reskin the whole application",
      "Increase developer experience with new internal tools",
    ],
  },
  {
    company: "LGS - An IBM company",
    skills: ["CSS/SASS", "HTML", "JavaScript", "Java", "JSP"],
    title: "Programmer-Analyst",
    dates: "May 2018 - November 2018",
    tasks: [
      "New features for clients written in Java/JSP",
      "Front-end enhancements in HTML/CSS and JavaScript/jQuery",
      "Being consulted by the client on the feasibility of a feature",
      "Work with other teams for cross-team dependencies",
    ],
  },
  {
    company: "PG Solutions",
    skills: ["CSS/SASS", "HTML", "jQuery", "ASP.NET"],
    title: "Programmer-Analyst",
    dates: "May 2015 - May 2018",
    tasks: [
      "New development in ASP.NET",
      "Handling back-end and front-end for a complex application",
      "Built proof of concept for a front-end migration",
      "Work with other teams for cross-team dependencies",
      "Reference in CSS",
    ],
  },
];
