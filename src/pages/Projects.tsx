import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../components/common/AnimatedSection';
import { projects, Project } from '../data/projects';
import { ExternalLink, Github } from 'lucide-react';

type CategoryFilter = 'all' | 'web' | 'mobile' | 'machine-learning' | 'design';

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  const categories: { value: CategoryFilter; label: string }[] = [
    { value: 'all', label: 'All Projects' },
    { value: 'web', label: 'Web Development' },
    { value: 'mobile', label: 'Mobile Apps' },
    { value: 'machine-learning', label: 'Machine Learning' },
    { value: 'design', label: 'Design' },
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore my portfolio of work across web development, mobile apps, 
              machine learning, and design. Each project represents a unique challenge 
              and solution.
            </p>
          </div>
        </AnimatedSection>

        {/* Category Filters */}
        <AnimatedSection>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category.value}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.value
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveCategory(category.value)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <AnimatedSection delay={index * 0.1}>
      <motion.div 
        className="card h-full flex flex-col"
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        layout
      >
        <div className="h-60 overflow-hidden relative">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute top-2 right-2">
            <span className="text-xs bg-white bg-opacity-90 text-gray-800 px-2 py-1 rounded-full">
              {project.category.replace('-', ' ')}
            </span>
          </div>
        </div>
        <div className="p-6 flex-grow flex flex-col">
          <div className="flex-grow">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">
              {project.longDescription || project.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <span 
                key={tech} 
                className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-2 mt-auto">
            {project.link && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700"
              >
                Live Demo <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            )}
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                GitHub <Github className="ml-1 h-3 w-3" />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatedSection>
  );
};

export default Projects;