import React from 'react';
import './About.css';
import ProfileImage from "../assets/about.jpg"
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const About = () => {
  const superpowers = [
    "Frontend Development (React, JavaScript)",
    "Problem Solving & DSA in Java",
    "Social Media Strategy & Content Creation"
  ];

  return (
    <section id="about">
      <h2 className="section__title">About Me</h2>
      <div className="container about__container">
        <motion.div
          className="about__me"
          initial={{ opacity: 0, x: -50 }}
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
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p>
            Hi! I'm Gagandeep Singh, a passionate Computer Science student at GGSIPU with a strong interest in frontend development and an aspiring journey into Data Science and Machine Learning. I completed my schooling at Modern School and have been actively building my skills in modern web technologies.
          </p>
          <p>
            I recently mastered frontend development with React and JavaScript, and I'm currently diving deep into Data Structures and Algorithms using Java. Beyond coding, I served as Social Media Head at Nayi Disha NGO, where I led digital strategy and community engagement initiatives.
          </p>
          <h3>My Superpowers</h3>
          <ul>
            {superpowers.map((power, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <CheckCircle size={20} className="text-primary" style={{ color: 'var(--color-primary)' }} /> {power}
              </motion.li>
            ))}
          </ul>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <motion.a
              href="#contact"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Talk
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download
              className="btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;