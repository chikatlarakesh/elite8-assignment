import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Rakesh.dev</h3>
            <p className="text-gray-400 mb-4">
              Building interactive web experiences with React & Machine Learning
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://github.com" icon={<Github />} label="GitHub" />
              <SocialLink href="https://linkedin.com" icon={<Linkedin />} label="LinkedIn" />
              <SocialLink href="mailto:contact@rakesh.dev" icon={<Mail />} label="Email" />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <FooterLink href="/" text="Home" />
              <FooterLink href="/projects" text="Projects" />
              <FooterLink href="/about" text="About" />
              <FooterLink href="/contact" text="Contact" />
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Let's Connect</h4>
            <p className="text-gray-400 mb-4">
              Have a project in mind or just want to say hi? Feel free to reach out!
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary-600 hover:bg-primary-700 transition-colors duration-300 px-4 py-2 rounded-2xl font-medium"
            >
              Get in Touch
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Rakesh.dev. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="bg-gray-800 p-2 rounded-full hover:bg-primary-600 transition-colors duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
    </motion.a>
  );
};

interface FooterLinkProps {
  href: string;
  text: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, text }) => {
  return (
    <li>
      <a
        href={href}
        className="text-gray-400 hover:text-white transition-colors duration-300"
      >
        {text}
      </a>
    </li>
  );
};

export default Footer;