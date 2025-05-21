import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/common/AnimatedSection';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have a project in mind or want to discuss a potential collaboration? 
              I'm always open to new opportunities and challenges.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <AnimatedSection>
            <div className="bg-white rounded-2xl shadow-soft p-8">
              <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <FormField
                    label="Name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                  />
                  
                  <FormField
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formState.email}
                    onChange={handleChange}
                    required
                  />
                  
                  <FormField
                    label="Subject"
                    name="subject"
                    type="text"
                    placeholder="What is this about?"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                  />
                  
                  <div className="relative">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Your message here..."
                      value={formState.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50 resize-none"
                    />
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn btn-primary relative overflow-hidden"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                              fill="none"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </div>
                      ) : isSubmitted ? 'Message Sent!' : 'Send Message'}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </AnimatedSection>

          {/* Contact Information */}
          <AnimatedSection delay={0.2}>
            <div className="lg:pl-8">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-8">
                <ContactItem 
                  icon={<Mail className="h-6 w-6 text-primary-500" />}
                  title="Email"
                  detail="contact@rakesh.dev"
                  link="mailto:contact@rakesh.dev"
                />
                
                <ContactItem 
                  icon={<Phone className="h-6 w-6 text-primary-500" />}
                  title="Phone"
                  detail="+91 98765 43210"
                  link="tel:+919876543210"
                />
                
                <ContactItem 
                  icon={<MapPin className="h-6 w-6 text-primary-500" />}
                  title="Location"
                  detail="Bangalore, India"
                />
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-bold mb-6">Connect with Me</h3>
                <div className="flex space-x-4">
                  <SocialLink 
                    href="https://github.com" 
                    icon={<Github />} 
                    label="GitHub" 
                    bgColor="bg-gray-800"
                    hoverColor="hover:bg-gray-700"
                  />
                  
                  <SocialLink 
                    href="https://linkedin.com" 
                    icon={<Linkedin />} 
                    label="LinkedIn" 
                    bgColor="bg-blue-600"
                    hoverColor="hover:bg-blue-700"
                  />
                  
                  <SocialLink 
                    href="https://twitter.com" 
                    icon={<Twitter />} 
                    label="Twitter" 
                    bgColor="bg-sky-500"
                    hoverColor="hover:bg-sky-600"
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

interface FormFieldProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  required,
}) => {
  return (
    <div className="relative">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
      />
    </div>
  );
};

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  detail: string;
  link?: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, title, detail, link }) => {
  return (
    <div className="flex">
      <div className="mr-4">{icon}</div>
      <div>
        <h3 className="font-medium text-gray-900">{title}</h3>
        {link ? (
          <a href={link} className="text-gray-600 hover:text-primary-600 transition-colors">
            {detail}
          </a>
        ) : (
          <p className="text-gray-600">{detail}</p>
        )}
      </div>
    </div>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  bgColor: string;
  hoverColor: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label, bgColor, hoverColor }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`${bgColor} ${hoverColor} p-3 rounded-full text-white transition-colors duration-300`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
    </motion.a>
  );
};

export default Contact;