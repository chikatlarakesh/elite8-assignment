import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown, Code, Database, Paintbrush } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-secondary-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-accent-100 rounded-full opacity-30 blur-2xl"></div>
      </div>

      {/* Floating Icons */}
      {[Code, Database, Paintbrush].map((Icon, index) => (
        <motion.div
          key={index}
          className="absolute hidden md:block text-gray-200"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            y: [0, -15, 0],
            x: index % 2 === 0 ? [0, 10, 0] : [0, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: index * 0.5,
          }}
          style={{
            top: `${20 + index * 25}%`,
            left: index % 2 === 0 ? '15%' : '85%',
          }}
        >
          <Icon size={40} />
        </motion.div>
      ))}

      <div className="container-custom relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="mb-6 text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Hi, I'm Rakesh—
            <div className="text-primary-600">
              <TypeAnimation
                sequence={[
                  'Full-Stack Developer',
                  2000,
                  'UI/UX Designer',
                  2000,
                  'ML Enthusiast',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
          </motion.h1>

          <motion.p
            className="mb-10 max-w-2xl mx-auto text-lg text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Building interactive web experiences with React & Machine Learning.
            Focused on creating beautiful, functional applications that solve real problems.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="/contact" className="btn btn-outline">
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-400"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};

export default HeroSection;