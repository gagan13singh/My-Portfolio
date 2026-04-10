import React from 'react';
import './About.css';
import ProfileImage from "../assets/about.jpg"
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const About = () => {
  const superpowers = [
    "Full-Stack Development (React, Node.js, Express)",
    "AI/ML Integration (LLMs, WebGPU, Groq, LLaMA)",
    "Database Design (MongoDB, MySQL, Supabase)",
    "DSA & Problem Solving in Java",
    "Academic Mentoring & Communication",
    "Social Media Strategy & Content Creation",
  ];

  const stats = [
    { value: '9.27', label: 'CGPA / 10' },
    { value: '6+', label: 'Projects Built' },
    { value: '15-20', label: 'Students Tutored/yr' },
    { value: '40%', label: 'Instagram Growth' },
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
            Hi! I'm <strong>Gagandeep Singh</strong>, a Computer Science student at GGSIPU (CGPA: 9.27/10) and
            React Developer Intern at Japneet (Plaza Enterprises), where I build AI-powered UIs and
            integrate ML services. I was <strong>School Topper in Class XII (97%)</strong> and District Topper in Class X (99.4%).
          </p>
          <p>
            I specialize in full-stack web development and AI integrations — from building in-browser LLM systems
            with WebGPU/WASM to crafting full-scale Learning Management Systems with 40+ REST APIs.
            I'm currently deepening my skills in Data Structures & Algorithms (Java) with my sights set on
            Data Science and Machine Learning.
          </p>

          {/* Stats row */}
          <div className="about__stats">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="about__stat"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <span className="stat__value">{stat.value}</span>
                <span className="stat__label">{stat.label}</span>
              </motion.div>
            ))}
          </div>

          <h3>My Superpowers</h3>
          <ul>
            {superpowers.map((power, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <CheckCircle size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} /> {power}
              </motion.li>
            ))}
          </ul>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
            <motion.a
              href="#contact"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Talk
            </motion.a>
            <motion.a
              href="/resume.png"
              download="Gagandeep_Singh_Resume.png"
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