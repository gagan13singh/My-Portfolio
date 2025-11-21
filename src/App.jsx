import React from 'react';
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
import './App.css';

function App() {
  return (
    <>
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
    </>
  );
}
{/* <Projects /> */ }
{/* <Skills /> */ }
{/* <GithubGraph /> */ }
{/* <Testimonials /> */ }
{/* <Blog /> */ }
{/* <Contact /> */ }

export default App;