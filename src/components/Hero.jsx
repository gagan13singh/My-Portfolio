import React, { useState, useEffect } from 'react';
import './Hero.css';
import ProfileImage from '../assets/profile.jpg';
import { motion } from 'framer-motion';

const Hero = () => {
  const [displayedName, setDisplayedName] = useState('');
  const fullName = 'Gagandeep Singh';
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setDisplayedName(fullName.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="container hero__container">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h3>Hello, I'm</h3>
          <h1 className="typewriter-name">
            {displayedName}
            {!isTypingComplete && <span className="cursor">|</span>}
          </h1>
          <h3 className="text-light">Computer Science Student & Frontend Developer</h3>
          <p>
            I'm a passionate CS student at GGSIPU, specializing in frontend development with React and JavaScript. Currently mastering Data Structures & Algorithms in Java, with aspirations to dive into Data Science and Machine Learning. I believe in creating impactful digital solutions that make a difference.
          </p>
          <div className="hero__cta">
            <motion.a
              href="#contact"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Connect
            </motion.a>
            <motion.a
              href="#projects"
              className="btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
          </div>
        </motion.div>
        <motion.div
          className="hero__image"
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          whileHover={{ rotate: 5, scale: 1.05 }}
        >
          <img src={ProfileImage} alt="Gagandeep Singh" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;