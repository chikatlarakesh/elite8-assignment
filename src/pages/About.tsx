import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/common/AnimatedSection';
import { experiences, education } from '../data/experience';
import { skills } from '../data/skills';

const About: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        {/* Hero Section */}
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl">
                <img 
                  src="https://images.pexels.com/photos/4064835/pexels-photo-4064835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Rakesh portrait" 
                  className="w-full h-auto transition-all duration-500 group-hover:scale-110 group-hover:brightness-90"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-primary-50 p-4 rounded-lg">
                <p className="text-primary-800 font-bold">5+ Years Experience</p>
              </div>
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
              <p className="text-gray-600 mb-4">
                I'm Rakesh, a passionate full-stack developer and designer with a focus on creating 
                engaging digital experiences that solve real-world problems. With a background in 
                computer science and a keen eye for design, I bridge the gap between technical 
                functionality and aesthetic appeal.
              </p>
              <p className="text-gray-600 mb-6">
                My journey in technology began at the Indian Institute of Technology, where I honed my 
                programming skills and developed a deeper understanding of computer science fundamentals. 
                Since then, I've worked on various projects ranging from educational platforms to IoT 
                solutions, always pushing the boundaries of what's possible with technology.
              </p>
              <div className="flex flex-wrap gap-3">
                {['React', 'Node.js', 'UI/UX', 'Machine Learning', 'IoT'].map((skill, index) => (
                  <motion.span 
                    key={index}
                    className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Experience Timeline */}
        <AnimatedSection>
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-10 text-center">My Journey</h2>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <div key={exp.id} className="relative">
                    <TimelineItem experience={exp} index={index} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Education Section */}
        <AnimatedSection>
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-10 text-center">Education</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {education.map((edu) => (
                <motion.div 
                  key={edu.id}
                  className="bg-white p-6 rounded-2xl shadow-soft"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                  <p className="text-primary-600 font-medium mb-2">{edu.field}</p>
                  <p className="text-gray-600 mb-1">{edu.institution}</p>
                  <p className="text-gray-500 text-sm">{edu.period}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Skills Section */}
        <AnimatedSection>
          <div>
            <h2 className="text-3xl font-bold mb-10 text-center">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {skills.map((skillCategory, categoryIndex) => (
                <div key={categoryIndex}>
                  <h3 className="text-xl font-bold mb-6">{skillCategory.category}</h3>
                  <div className="space-y-5">
                    {skillCategory.items.map((skill, skillIndex) => (
                      <SkillBar key={skillIndex} skill={skill} index={skillIndex} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

interface TimelineItemProps {
  experience: {
    title: string;
    company: string;
    period: string;
    description: string;
    skills: string[];
  };
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ experience, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div 
      className={`flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''}`}
      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="md:w-1/2"></div>
      <div className="relative flex items-center justify-center md:w-0">
        <div className="h-10 w-10 rounded-full bg-primary-500 text-white flex items-center justify-center z-10">
          {index + 1}
        </div>
      </div>
      <div className="pt-3 md:pt-0 md:w-1/2 pl-12 md:pl-6 md:pr-0">
        <div className="bg-white p-6 rounded-2xl shadow-soft">
          <span className="text-gray-500 text-sm">{experience.period}</span>
          <h3 className="text-xl font-bold mt-1">{experience.title}</h3>
          <p className="text-primary-600 font-medium mb-3">{experience.company}</p>
          <p className="text-gray-600 mb-4">{experience.description}</p>
          <div className="flex flex-wrap gap-2">
            {experience.skills.slice(0, 3).map((skill, skillIndex) => (
              <span 
                key={skillIndex} 
                className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

interface SkillBarProps {
  skill: {
    name: string;
    proficiency: number;
  };
  index: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="flex justify-between mb-1">
        <span className="font-medium">{skill.name}</span>
        <span className="text-gray-500">{skill.proficiency}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-primary-500 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.proficiency}%` }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  );
};

export default About;