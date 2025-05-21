import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ProjectsPreview from '../components/home/ProjectsPreview';
import AboutPreview from '../components/home/AboutPreview';
import ContactCTA from '../components/home/ContactCTA';

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <ProjectsPreview />
      <AboutPreview />
      <ContactCTA />
    </div>
  );
};

export default Home;