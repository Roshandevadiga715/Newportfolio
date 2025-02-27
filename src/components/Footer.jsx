import React from 'react';
import { motion } from 'framer-motion';
import { colors } from '../utils/colors';

const Footer = () => {
  return (
    <motion.footer
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-16 px-4 text-center"
      style={{ backgroundColor: colors.darkBlue }}
    >
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl font-bold text-center mb-8 text-white"
      >
        Contact Me
      </motion.h2>
      <p className="text-light mb-8">Let's connect and create something amazing together!</p>
      <p className="text-light">&copy; {new Date().getFullYear()} K Roshan N Devadiga. All rights reserved.</p>
      <div className="mt-4 space-x-6">
        {['GitHub', 'LinkedIn', 'Email'].map((link, index) => (
          <a
            key={index}
            href={link === 'GitHub' ? 'https://github.com/Roshandevadiga715' :
                 link === 'LinkedIn' ? 'https://linkedin.com/in/roshan-devadiga-658ab728a' :
                 'mailto:roshandevadiga715@gmail.com'}
            className="inline-block transform-gpu transition-transform duration-200 ease-out hover:scale-105"
            style={{ 
              color: colors.accent,
              transform: 'translateZ(0)',
              willChange: 'transform'
            }}
          >
            {link}
          </a>
        ))}
      </div>
    </motion.footer>
  );
};

export default Footer;