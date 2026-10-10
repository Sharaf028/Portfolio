// Edit this file to change the text and links on the site.
export const site = {
  name: "Sharaf Binte Younus",
  roles: ["UI/UX Designer", "Graphic Designer"],
  heroText:
    "Computer science graduate from BRAC University, Dhaka, Bangladesh focused on UI/UX and graphic design. I create clear, good-looking interfaces and visuals people enjoy using.",
  about:
    "I'm a computer science graduate from BRAC University building a career in UI/UX design. I also design graphics, and I like turning ideas into interfaces and visuals that look sharp and are easy to use.",
  focus: [
    { title: "UI/UX Design", text: "Interfaces that are clear, accessible and easy to use." },
    { title: "Graphic Design", text: "Visuals and brand pieces made in Illustrator and Photoshop." },
  ],
  email: "subah2028@gmail.com",
  github: "https://github.com/Sharaf028",
  linkedin: "https://www.linkedin.com/in/sharaf-binte-younus-433946295",
  nav: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],
  // Add your own UI/UX and graphic design work here. Items marked soon: true show "Coming soon".
  projects: {
    "UI/UX Design": [
      { title: "Your first case study", text: "Add a Figma case study here: the problem, your process and the final screens.", tags: ["Figma"], soon: true },
    ],
    "Graphic Design": [
      { title: "Your first design piece", text: "Add posters, logos or social graphics made in Illustrator or Photoshop.", tags: ["Illustrator", "Photoshop"], soon: true },
    ],
    "Web Development": [
      { title: "Virtual try-on store", text: "Online clothing store where shoppers try clothes on virtually and get AI recommendations.", tags: ["Next.js", "Flask", "Gemini API"], link: "https://cse-471-delta.vercel.app" },
      { title: "Quest Board", text: "To-do app that pairs your tasks with study resources and an AI assistant.", tags: ["Next.js", "Supabase"], link: "https://quest-board-weld.vercel.app" },
      { title: "ArtConnect", text: "Platform for artists to show their work and connect with each other. In progress.", tags: ["Laravel"], soon: true },
    ],
  } as Record<string, { title: string; text: string; tags: string[]; link?: string; soon?: boolean }[]>,
  education: [
    { school: "BRAC University", degree: "Computer Science (CS)", note: "Session 2022 - 2026" },
  ],
  skills: [
    "Figma", "Illustrator", "Photoshop", "Next.js", "React", "TypeScript",
    "Tailwind CSS", "Python", "Flask", "Laravel", "GitHub",
  ],
};
