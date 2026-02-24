import React from 'react';
import './Skills.css';
import { motion } from 'framer-motion';

const skills = [
  'HTML', 'CSS', 'JavaScript', 'React', 'C++', 'Python',
  'Java', 'Git', 'GitHub',
];

const Skills = () => {
  return (
    <section id="skills">
      <h2 className="section__title">My Skills</h2>
      <motion.div
        className="container skills__container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.1 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-item"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;