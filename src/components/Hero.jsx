import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
import { Button } from 'antd';
import { colors } from '../utils/colors';

const Hero = () => {
  return (
    <section id="home" className="h-[100vh] flex items-center justify-center relative overflow-hidden">
      {/* Parallax background that fills the entire section */}
      <Parallax speed={-20} className="absolute inset-0">
        <div 
          className="w-full h-full opacity-90"
          style={{ background: `linear-gradient(to bottom, ${colors.gradientFrom}, ${colors.gradientTo})` }}
        />
      </Parallax>
      
      {/* Content that sits on top of the background */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="text-center z-10 px-4 sm:px-6 lg:px-8"
      >
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 text-white tracking-tight">
          Hi, I'm K Roshan N Devadiga
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 text-light">
        A Web Developer specialized in React.js and Tailwind.Css
        </p>
        <Button 
          type="primary" 
          size="large" 
          href="#projects"
          style={{ 
            backgroundColor: colors.accent,
            transform: 'translateZ(0)',
            willChange: 'transform'
          }}
          className="transform-gpu transition-transform duration-200 ease-out hover:scale-105"
        >
          View My Work
        </Button>
      </motion.div>
    </section>
  );
};

export default Hero;