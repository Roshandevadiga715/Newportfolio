import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Footer from '../components/Footer';

function Home() {
  const { section } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (section) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [section]);

  return (
    <ParallaxProvider>
      <div className="min-h-screen bg-gray-900 text-white w-full">
        <Header />
        <main>
          <div id="home">
            <Hero />
          </div>
          <div id="skills">
            <Skills />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="contact">
            <Footer />
          </div>
        </main>
      </div>
    </ParallaxProvider>
  );
}

export default Home;
