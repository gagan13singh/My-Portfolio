
import React from 'react';
import './Hero.css';
import ProfileImage from '../assets/profile.jpg';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero__container">
        <motion.div 
          className="hero__content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Hello, I'm <br></br>Gagandeep Singh</h1>
          <h3>Software Developer</h3>
          <p>I’m a passionate developer with a strong interest in frontend development and an aspiring AIML enthusiast. I enjoy creating modern, responsive, and user-friendly web applications while constantly exploring the world of Artificial Intelligence and Machine Learning to shape impactful digital solutions.</p>
          <div className="hero__cta">
            <a href="#contact" className="btn btn-primary">Contact Me</a>
            <a href="https://drive.google.com/file/d/1Iom25psL8LdSCfPNZBjWY4m_me5MLXFo/view?usp=sharing" download className="btn">Download Resume</a>
          </div>
        </motion.div>
        <motion.div 
          className="hero__image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src={ProfileImage} alt="Gagandeep Singh" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;