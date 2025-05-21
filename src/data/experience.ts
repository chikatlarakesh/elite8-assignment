export interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "Infosys Springboard",
    period: "Jun 2022 - Present",
    description: "Developed educational platforms for students to learn programming and digital skills. Created interactive learning modules, code challenges, and progress tracking systems.",
    skills: ["React", "Node.js", "Express", "MongoDB", "Educational Technology"]
  },
  {
    id: 2,
    title: "Lead Developer",
    company: "SIH Smart Cane Project",
    period: "Jan 2022 - May 2022",
    description: "Led the development of an IoT-powered walking cane for the visually impaired, which uses ultrasonic sensors and machine learning for obstacle detection and navigation assistance.",
    skills: ["IoT", "Arduino", "Machine Learning", "React Native", "Project Management"]
  },
  {
    id: 3,
    title: "Technical Ambassador",
    company: "GSSoC (Girl Script Summer of Code)",
    period: "May 2021 - Aug 2021",
    description: "Served as a technical ambassador, mentoring participants and reviewing code contributions for open-source projects. Organized technical workshops and coding sessions.",
    skills: ["Open Source", "Git", "Technical Mentoring", "Community Building"]
  },
  {
    id: 4,
    title: "Front-End Developer Intern",
    company: "TechSolutions Inc.",
    period: "Jun 2020 - Dec 2020",
    description: "Contributed to the development of responsive web applications and assisted in implementing UI/UX designs. Worked on optimizing application performance and implementing accessibility features.",
    skills: ["HTML/CSS", "JavaScript", "React", "UI/UX", "Accessibility"]
  }
];

export interface Education {
  id: number;
  degree: string;
  field: string;
  institution: string;
  period: string;
}

export const education: Education[] = [
  {
    id: 1,
    degree: "Bachelor of Technology",
    field: "Computer Science & Engineering",
    institution: "Indian Institute of Technology",
    period: "2019 - 2023"
  },
  {
    id: 2,
    degree: "Certification",
    field: "Full Stack Web Development",
    institution: "Udemy",
    period: "2021"
  },
  {
    id: 3,
    degree: "Certification",
    field: "UI/UX Design Fundamentals",
    institution: "Interaction Design Foundation",
    period: "2020"
  }
];