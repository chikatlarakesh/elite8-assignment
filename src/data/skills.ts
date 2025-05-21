export interface Skill {
  category: string;
  items: SkillItem[];
}

export interface SkillItem {
  name: string;
  proficiency: number; // 0-100
}

export const skills: Skill[] = [
  {
    category: "Front-End Development",
    items: [
      { name: "React", proficiency: 95 },
      { name: "TypeScript", proficiency: 90 },
      { name: "JavaScript", proficiency: 95 },
      { name: "HTML/CSS", proficiency: 90 },
      { name: "Tailwind CSS", proficiency: 85 },
      { name: "Framer Motion", proficiency: 80 },
    ]
  },
  {
    category: "Back-End Development",
    items: [
      { name: "Node.js", proficiency: 85 },
      { name: "Express", proficiency: 80 },
      { name: "MongoDB", proficiency: 75 },
      { name: "Firebase", proficiency: 80 },
      { name: "REST APIs", proficiency: 90 },
      { name: "GraphQL", proficiency: 70 },
    ]
  },
  {
    category: "Design & Tools",
    items: [
      { name: "Figma", proficiency: 85 },
      { name: "UI/UX Design", proficiency: 80 },
      { name: "Git/GitHub", proficiency: 90 },
      { name: "Responsive Design", proficiency: 95 },
      { name: "Accessibility", proficiency: 85 },
    ]
  },
  {
    category: "Machine Learning & IoT",
    items: [
      { name: "TensorFlow", proficiency: 70 },
      { name: "Python", proficiency: 80 },
      { name: "Data Visualization", proficiency: 75 },
      { name: "Arduino", proficiency: 65 },
      { name: "IoT Development", proficiency: 60 },
    ]
  }
];