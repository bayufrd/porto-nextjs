import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "point-of-sale-desktop-application",
    title: "Point Of Sale Desktop Application (POS)",
    description: [
      "Front-End Developer & Project Manager at Dastrevas.coding & Akhari",
      "Led UI design for a user-friendly interface.",
      "Managed team efforts to deliver a functional POS.",
      "Ensured alignment with client needs.",
      "Coordinated milestones and timelines.",
      "Delivered an efficient application now in use by the client.",
      "Developed POS apps for Coffee and Eaternity Jempolan, Sambel'e Nyahti, and 5 outlets of Sambel Colek based in Yogyakarta.",
    ],
    icon: "/skills/csharp.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "#", // Replace with actual GitHub URL
    url: "#", // Replace with actual project URL
    tags: ["POS", "UI/UX Design", "Team Management", "C#"],
  },
  {
    id: "point-of-sale-web-application",
    title: "Point Of Sale Web Api (POS)",
    description: [
      "Front-End Developer & Project Manager at Dastrevas.coding & Akhari",
      "Led UI design for a user-friendly interface.",
      "Managed team efforts to deliver a functional POS.",
      "Ensured alignment with client needs.",
      "Coordinated milestones and timelines.",
      "Delivered an efficient application now in use by the client.",
      "Developed POS apps for Coffee and Eaternity Jempolan, Sambel'e Nyahti, and 5 outlets of Sambel Colek based in Yogyakarta.",
    ],
    icon: "/skills/nodejs.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "#", // Replace with actual GitHub URL
    url: "#", // Replace with actual project URL
    tags: ["Node.js", "Linux", "DevOps", "Express.js"],
  },
  {
    id: "web-ingredient-procurement",
    title: "Web Ingredient for Procurement of Goods",
    description: [
      "Project Manager at Dastrevas.coding & Akhari Tech & IT Consultant",
      "Organized and assigned tasks for seamless project flow.",
      "Used Trello for task tracking and client updates.",
      "Enhanced UI/UX for user satisfaction.",
      "Structured workflow for transparency.",
      "Met project goals with efficient team coordination.",
      "Developed CMS Ingredient apps for Coffee and Eaternity Jempolan, Sambel'e Nyahti, and 5 outlets of Sambel Colek, based in Yogyakarta.",
    ],
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "#", // Replace with actual GitHub URL
    url: "#", // Replace with actual project URL
    tags: ["Project Management", "Web Development", "UI/UX"],
  },
  {
    id: "web-content-management-system",
    title: "Web Content Management System (CMS)",
    description: [
      "Project Manager at Dastrevas.coding & Akhari Tech & IT Consultant",
      "Managed transition of a POS from desktop to web-based.",
      "Maintained real-time updates for the client via Trello.",
      "Ensured timely delivery of project milestones.",
      "Fostered collaboration among team members.",
      "Delivered a client-focused solution meeting scope and timeline.",
      "Developed CMS applications for Coffee and Eaternity Jempolan, Sambel'e Nyahti, and 5 outlets of Sambel Colek, based in Yogyakarta.",
    ],
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "#", // Replace with actual GitHub URL
    url: "#", // Replace with actual project URL
    tags: ["Project Management", "Web Development", "CMS"],
  },
];

// Export the projects array for use in other parts of the application
export default projects;