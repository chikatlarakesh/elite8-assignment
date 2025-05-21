export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  imageUrl: string;
  technologies: string[];
  category: 'web' | 'mobile' | 'machine-learning' | 'design';
  link?: string;
  github?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Smart Cane",
    description: "An IoT-powered walking cane for the visually impaired with obstacle detection.",
    longDescription: "Developed during SIH, this smart cane uses ultrasonic sensors and machine learning to detect obstacles and provide haptic feedback to visually impaired users. The system includes a mobile app companion that provides real-time navigation assistance and emergency alerts.",
    imageUrl: "https://images.pexels.com/photos/1059116/pexels-photo-1059116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["IoT", "Arduino", "Machine Learning", "React Native"],
    category: "machine-learning",
    link: "https://example.com/project1",
    github: "https://github.com/username/smart-cane",
    featured: true
  },
  {
    id: 2,
    title: "Infosys Springboard",
    description: "Educational platform for students to learn programming and digital skills.",
    longDescription: "Worked on the Infosys Springboard platform to create interactive learning modules for students. The platform includes code challenges, video tutorials, and progress tracking to help students master programming concepts and digital skills essential for the modern workforce.",
    imageUrl: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    category: "web",
    link: "https://example.com/project2",
    github: "https://github.com/username/infosys-springboard",
    featured: true
  },
  {
    id: 3,
    title: "E-Commerce Dashboard",
    description: "Admin dashboard for managing products, orders, and customer data.",
    longDescription: "A comprehensive e-commerce administration dashboard that allows store owners to manage products, track orders, analyze sales data, and handle customer information. Built with React and includes real-time data visualization and reporting features.",
    imageUrl: "https://images.pexels.com/photos/7948048/pexels-photo-7948048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", "Redux", "Tailwind CSS", "Chart.js"],
    category: "web",
    github: "https://github.com/username/ecommerce-dashboard",
    featured: true
  },
  {
    id: 4,
    title: "AI Image Generator",
    description: "Web application that creates custom images using machine learning models.",
    longDescription: "An innovative web application that leverages cutting-edge AI models to generate custom images based on text prompts. Users can describe what they want to see, and the app creates unique visuals that match their descriptions.",
    imageUrl: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", "Python", "TensorFlow", "Flask"],
    category: "machine-learning",
    link: "https://example.com/project4",
    github: "https://github.com/username/ai-image-generator",
    featured: false
  },
  {
    id: 5,
    title: "Fitness Tracker",
    description: "Mobile app for tracking workouts, nutrition, and fitness progress.",
    longDescription: "A comprehensive fitness tracking mobile application that helps users monitor their workouts, nutrition intake, and overall fitness progress. Features include custom workout plans, calorie counting, progress visualization, and integration with wearable devices.",
    imageUrl: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React Native", "Firebase", "Redux", "HealthKit"],
    category: "mobile",
    link: "https://example.com/project5",
    featured: false
  },
  {
    id: 6,
    title: "Portfolio Design System",
    description: "A comprehensive design system for creating consistent portfolio websites.",
    longDescription: "Created a modular design system that provides a foundation for building consistent and visually appealing portfolio websites. The system includes component libraries, design tokens, and documentation to help developers create polished portfolio sites quickly.",
    imageUrl: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Figma", "React", "Storybook", "Styled Components"],
    category: "design",
    link: "https://example.com/project6",
    github: "https://github.com/username/portfolio-design-system",
    featured: false
  }
];