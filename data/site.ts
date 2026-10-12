// Edit this file to change the text and links on the site.
export const site = {
  name: "Sharaf Binte Younus",
  roles: ["UI/UX Designer", "Graphic Designer"],
  heroText:
    "Computer science graduate from BRAC University, Dhaka, Bangladesh focused on UI/UX and graphic design. I combine design thinking with technical knowledge to create interfaces that are clear, accessible, and practical to build.",
  about:
    "I’m a Computer Science graduate from BRAC University building a career in UI/UX design. I enjoy turning ideas into digital experiences that are visually clear, intuitive, and accessible. My technical background helps me bridge user needs, creative ideas, and working products, so my designs are not only appealing but also practical to build and easy to use. Alongside UI/UX, I design graphics using Adobe Illustrator, Adobe Photoshop, and Canva. From social media posts,posters and logos to illustrations, I create visuals that communicate ideas clearly and keep a consistent visual identity.",
  focus: [
    { title: "UI/UX Design", text: "Designing intuitive, accessible, and user-centered interfaces through thoughtful layouts, clear navigation, wireframes, and prototypes." },
    { title: "Graphic Design", text: "Creating impactful visual designs, from social media posts and posters to logo design and complete brand identities." },
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
      {
        title: "Pet Stay UI",
        category: "UI/UX Design · Landing Page",
        text: "Pet Stay is a pet adoption website where logged-in users can post pets for adoption, and people who want to adopt can browse the listings and contact them directly through the platform. I designed the landing page UI and the Pet Stay logo. I used a pink color palette to give the site a loving, cute feel that appeals to pet lovers. The landing page has a clear “Find Your Pet” headline with a short intro, a sidebar menu for easy navigation, a search bar, and a single Adopt button as the main action. A circular pet photo slider in the hero section keeps the focus on the animals.",
        tags: ["Figma", "Responsive Design", "UI Design"],
        link: "https://www.figma.com/design/0qQCeY2FHYSrQMpfltzTrR/Pet-Stay-landing-Page?node-id=0-1&t=umjwpOVAfOvpVH2m-1",
        preview: "/assets/pet-stay-preview.png",
      },
      {
        title: "E-commerce Website UI",
        category: "UI/UX Design · Website UI",
        text: "This is an online shopping platform where users can browse products across various categories, explore exclusive deals, and purchase their favorite items. I designed the UI with a clean, modern layout featuring product showcases, flash sales, search functionality, shopping cart, wishlist, and user account management. The design focuses on easy navigation, an engaging shopping experience, and a responsive, user-friendly interface.",
        tags: ["Figma", "UI Design", "Website UI", "Responsive Design"],
        link: "https://www.figma.com/design/A3SgIyZq2XipEiWSLgWCnQ/E-commerce-website-UI?node-id=1-3&t=tQqpMiAxtcqx7LnO-1",
        preview: "/assets/ecommerce-ui-showcase.png",
      },
    ],
    "Graphic Design": [
      {
        category: "Social Media Post Design · 2025",
        text: "While I was a member of the BRAC University Computer Club (BUCC), I designed this Happy New Year greeting for the club’s official social media page. I used a deep navy background with gold typography and fireworks to give it a festive look, and placed the university and club logos on white cards so they stay clear and legible.",
        tags: ["Adobe Illustrator", "Social Media","Poster Design"],
        preview: "/assets/graphic-works/2025.png",
      },
      {
        category: "Illustration · 2024",
        text: "I created this illustration during the July 2024 movement in Bangladesh. It captures the day people from every corner of the country gathered at the Shaheed Minar and lifted the national flag together, a moment of unity, hope, and remembrance of the sacrifices behind the movement. I used silhouettes so the focus stays on the people rather than on any single person. The Shaheed Minar rises at the center as a symbol of Bangladesh’s history of struggle, and a soft glow behind the flag draws the eye to the flag. The deep red background carries the weight of sacrifice and the intensity of the moment. The date in the artwork reads “34 July” (৩৪/৭/২৪), meaning July never ended and the spirit of the movement lives on. The text “A Day to Remember” and the Bengali “শহীদ মিনার” tie the piece to its subject.",
        tags: ["Adobe Illustrator", "Illustration", "Graphic Design"],
        preview: "/assets/graphic-works/July movement illustration.jpeg",
      },
      {
        category: "Logo Design · 2025",
        text: "I designed this logo for my own art page, SuArt, where I post my artwork and take commissions. I wanted it to feel personal, warm, and handmade, like the work I share. The logo has a handwritten script wordmark over a soft peach brush stroke, which gives it an artistic, painterly feel. A delicate hand-drawn leaf branch on the side adds a natural, gentle touch. The tagline “Handcrafted with love” sits underneath in a simple typewriter-style font that contrasts with the flowing script. I kept the palette minimal, with black linework, soft peach, and an off-white background, so the logo stays clean and works across social media.",
        tags: ["Canva", "Logo Design", "Graphic Design", "Branding"],
        preview: "/assets/graphic-works/SuArt logo.jpg",
      },
    ],
    "Web Development": [
      { title: "E-commerce Website", text: "A full-stack e-commerce website for a clothing store, built as a team project. Customers can browse and search products, manage a cart, wishlist and orders, try clothes on virtually with AI, and get personalized recommendations. An admin dashboard lets the store manage products, orders, customers, discounts and sales analytics.", tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Flask", "Python"], link: "https://cse-471-delta.vercel.app", github: "https://github.com/Tariq-15/CSE471" },
      { title: "Quest Board", text: "A fun to-do app that turns daily tasks into “quests.” Users sign in with Google, add tasks with deadlines and tags, save study resources and links in their own sections, and review completed quests in an archive. A profile page tracks remaining and completed quests plus a daily login streak, and a built-in AI assistant helps with planning and brainstorming. It also has dark mode.", tags: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma", "NextAuth.js"], link: "https://quest-board-weld.vercel.app", github: "https://github.com/Sharaf028/Quest-Board" },
      { title: "ArtConnect", text: "A community platform where artists can showcase their work and clients can discover and contact them for commissions. Artists register, upload artworks with images and tags, and build a profile and gallery. Clients can browse and filter artwork, view artist profiles, and get in touch. It includes authentication, role-based access, and a responsive interface. This project is still in progress.", tags: ["Laravel", "PHP", "Bootstrap", "MySQL", "Laravel Breeze"], github: "https://github.com/Sharaf028/ArtConnect" },
    ],
  } as Record<string, { title: string; category?: string; text: string; tags: string[]; link?: string; github?: string; soon?: boolean; preview?: string }[]>,
  education: [
    { school: "BRAC University", degree: "Bachelor of Computer Science", note: "Session 2022 - 2026" },
  ],
  skills: [
    "Figma", "Adobe Illustrator", "Adobe Photoshop", "Canva","Next.js", "React", "TypeScript",
    "Tailwind CSS", "Python", "Flask", "Laravel", "Git", "GitHub",
  ],
};
