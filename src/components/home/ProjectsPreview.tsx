import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../common/AnimatedSection';
import { projects } from '../../data/projects';

const ProjectsPreview: React.FC = () => {
  // Show only first 3 projects for the preview
  const previewProjects = projects.slice(0, 3);

  return (
    <section id="projects" className="section bg-gray-50">
      <div className="container-custom">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore some of my recent work showcasing my skills in web development, 
              design, and problem-solving.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {previewProjects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 0.1}>
              <motion.div 
                className="card h-full flex flex-col"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="h-60 overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span 
                        key={tech} 
                        className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="/projects" 
            className="inline-flex items-center font-medium text-primary-600 hover:text-primary-700"
          >
            View All Projects 
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;