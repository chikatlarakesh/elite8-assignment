import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../common/AnimatedSection';

const ContactCTA: React.FC = () => {
  return (
    <section className="section bg-primary-50">
      <div className="container-custom">
        <AnimatedSection>
          <div className="bg-white rounded-2xl shadow-soft-lg overflow-hidden">
            <div className="lg:flex">
              <div className="p-8 lg:p-12 lg:w-1/2">
                <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
                <p className="text-gray-600 mb-8">
                  Have a project in mind? Let's discuss how we can collaborate to create
                  something amazing. I'm open to freelance opportunities, full-time positions,
                  and consulting work.
                </p>
                <motion.a
                  href="/contact"
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get in Touch
                </motion.a>
              </div>
              <div className="lg:w-1/2 bg-gradient-to-r from-primary-500 to-accent-500 p-8 lg:p-12 text-white">
                <h3 className="text-2xl font-bold mb-6">What I Can Help With:</h3>
                <ul className="space-y-4">
                  {[
                    'Web application development',
                    'UI/UX design and prototyping',
                    'Front-end development with React',
                    'Full-stack solutions',
                    'Performance optimization',
                    'Machine learning integration',
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <svg
                        className="w-5 h-5 mr-2 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactCTA;