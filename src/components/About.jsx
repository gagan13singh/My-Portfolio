import React from 'react';
import './About.css';
import ProfileImage from "../assets/profile.jpg"
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about">
      <h2 className="section__title">About Me</h2>
      <div className="container about__container">
        <motion.div 
          className="about__me"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="about__me-image">
            <img src={ProfileImage} alt="About Me" />
          </div>
        </motion.div>

        <motion.div 
          className="about__content"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p>
            Hi! I'm a passionate software developer with a love for building things from scratch. My journey started with a fascination for how technology can solve real-world problems. I specialize in front-end development with React, but I'm always eager to learn new technologies and expand my skill set.
          </p>
          <h3>My Superpowers</h3>
          <ul>
            <li>✨ Building clean, responsive UIs</li>
            <li>🚀 Performance optimization</li>
            <li>🧠 Problem-solving and debugging</li>
          </ul>
           <a href="#contact" className="btn btn-primary" style={{ marginTop: '2.5rem' }}>Let's Talk</a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;