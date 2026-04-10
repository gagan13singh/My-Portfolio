import React, { useState, useEffect } from 'react';
import './Hero.css';
import ProfileImage from '../assets/profile.jpg';
import { motion } from 'framer-motion';

const roles = [
  'React Developer',
  'Full Stack Developer',
  'AI Integrations Builder',
  'CS Student @ GGSIPU',
];

const Hero = () => {
  const [displayedName, setDisplayedName] = useState('');
  const fullName = 'Gagandeep Singh';
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState('');
  const [roleTyping, setRoleTyping] = useState(true);

  // Type the name once
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

  // Cycle through roles
  useEffect(() => {
    if (!isTypingComplete) return;
    const role = roles[roleIndex];
    let i = 0;
    let timeout;

    if (roleTyping) {
      const interval = setInterval(() => {
        setDisplayedRole(role.slice(0, i + 1));
        i++;
        if (i === role.length) {
          clearInterval(interval);
          timeout = setTimeout(() => setRoleTyping(false), 1800);
        }
      }, 60);
      return () => { clearInterval(interval); clearTimeout(timeout); };
    } else {
      let j = role.length;
      const interval = setInterval(() => {
        setDisplayedRole(role.slice(0, j - 1));
        j--;
        if (j === 0) {
          clearInterval(interval);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setRoleTyping(true);
        }
      }, 35);
      return () => clearInterval(interval);
    }
  }, [isTypingComplete, roleIndex, roleTyping]);

  return (
    <section id="home" className="hero">
      <div className="container hero__container">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.span
            className="hero__greeting"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            👋 Hello, I'm
          </motion.span>
          <h1 className="typewriter-name">
            {displayedName}
            {!isTypingComplete && <span className="cursor">|</span>}
          </h1>
          <h3 className="hero__role">
            <span className="role-text">{displayedRole}</span>
            <span className="cursor">|</span>
          </h3>

          <div className="hero__badges">
            <span className="badge">CGPA 9.27 / 10</span>
            <span className="badge">School Topper 97%</span>
            <span className="badge">React Intern @ Japneet</span>
          </div>

          <p>
            Full-stack developer passionate about AI-powered applications and impactful digital experiences.
            I build everything from in-browser LLM systems to full-scale learning platforms — with clean code,
            sharp UI, and measurable results.
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
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
        >
          <div className="hero__image-inner">
            <img src={ProfileImage} alt="Gagandeep Singh" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;