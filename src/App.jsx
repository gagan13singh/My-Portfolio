import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import GithubGraph from './components/GithubGraph';
import Blog from './components/Blog';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import ScrollProgress from './components/ScrollProgress';
import Preloader from './components/Preloader';
import { AnimatePresence } from 'framer-motion';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Toggle scroll lock on body while loading
  useEffect(() => {
    if (isLoading) {
      document.body.classList.add('loading-locked');
    } else {
      document.body.classList.remove('loading-locked');
    }
    return () => {
      document.body.classList.remove('loading-locked');
    };
  }, [isLoading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <GithubGraph />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;