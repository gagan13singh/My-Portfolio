import React from 'react';
import './Skills.css';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    category: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'C', 'SQL'],
  },
  {
    category: 'Frontend',
    skills: ['React.js', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'HTML5', 'CSS3'],
  },
  {
    category: 'Backend & DB',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'MySQL', 'Supabase'],
  },
  {
    category: 'AI / ML',
    skills: ['LLM Integration', 'WebGPU / WASM', 'WebLLM', 'LLaMA', 'Groq API', 'Prompt Engineering'],
  },
  {
    category: 'Tools & DevOps',
    skills: ['Git', 'GitHub', 'Vercel', 'Render', 'PWA', 'Service Workers', 'JWT', 'Supabase Auth'],
  },
  {
    category: 'DSA',
    skills: ['Arrays', 'Hashing', 'Two Pointers', 'Bit Manipulation', 'LeetCode'],
  },
];

const Skills = () => {
  return (
    <section id="skills">
      <h2 className="section__title">My Skills</h2>
      <div className="container skills__wrapper">
        {skillCategories.map((group, gi) => (
          <motion.div
            key={gi}
            className="skills__group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: gi * 0.08 }}
            viewport={{ once: true }}
          >
            <h4 className="skills__category">{group.category}</h4>
            <div className="skills__container">
              {group.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill-item"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ scale: 1.06, y: -4 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;