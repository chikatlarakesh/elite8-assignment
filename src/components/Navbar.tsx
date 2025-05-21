import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code, Menu, X } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Code className="h-8 w-8 text-primary-600" />
          <span className="font-bold text-xl text-gray-900">Rakesh.dev</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Home', 'Projects', 'About', 'Contact'].map((item) => (
            <NavLink
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `text-base font-medium transition-colors duration-300 link-underline ${
                  isActive
                    ? 'text-primary-600'
                    : 'text-gray-700 hover:text-primary-600'
                }`
              }
            >
              {item}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-white absolute top-full left-0 right-0 shadow-md"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container-custom py-4 flex flex-col space-y-4">
            {['Home', 'Projects', 'About', 'Contact'].map((item) => (
              <NavLink
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `text-base font-medium py-2 ${
                    isActive
                      ? 'text-primary-600'
                      : 'text-gray-700 hover:text-primary-600'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {item}
              </NavLink>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;