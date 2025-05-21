import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Layers, Lightbulb } from 'lucide-react';
import AnimatedSection from '../common/AnimatedSection';

const AboutPreview: React.FC = () => {
  const skills = [
    {
      icon: <Code className="h-8 w-8 text-primary-600" />,
      title: 'Full-Stack Development',
      description: 'Building complete web applications from front-end interfaces to back-end systems using modern technologies.',
    },
    {
      icon: <Layers className="h-8 w-8 text-secondary-600" />,
      title: 'UI/UX Design',
      description: 'Creating intuitive and visually appealing user interfaces that enhance the overall user experience.',
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-accent-600" />,
      title: 'Machine Learning',
      description: 'Developing intelligent solutions using ML algorithms to solve complex problems efficiently.',
    },
  ];

  return (
    <section className="section">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Crafting Digital Experiences 
                <span className="text-primary-600"> With Purpose</span>
              </h2>
              <p className="text-gray-600 mb-6">
                With over 5 years of experience in web development and design, I specialize in 
                building applications that not only look good but also solve real-world problems.
                My background in both technology and design allows me to create comprehensive 
                solutions that consider both technical requirements and user needs.
              </p>
              <p className="text-gray-600 mb-8">
                I'm passionate about creating innovative, accessible, and high-performance 
                applications that make a difference.
              </p>
              <a 
                href="/about" 
                className="inline-flex items-center font-medium text-primary-600 hover:text-primary-700"
              >
                Learn More About Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </AnimatedSection>

          <div>
            <div className="grid grid-cols-1 gap-6">
              {skills.map((skill, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <motion.div 
                    className="bg-white p-6 rounded-2xl shadow-soft"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-start">
                      <div className="mr-4 p-2 bg-gray-50 rounded-lg">
                        {skill.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                        <p className="text-gray-600">{skill.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;