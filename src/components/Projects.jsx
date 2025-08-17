import React from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';
import Proj1Img from '../assets/project.png'; 

const projectsData = [
  {
    id: 1,
    image: Proj1Img,
    title: 'Portfolio Website',
    description: 'A personal portfolio website created using React and Vite.',
    github: 'https://github.com',
    live: 'https://github.com',
  },
];


const Projects = () => {
  return (
    <section id="projects">
      <h2 className="section__title">My Recent Work (Projects)</h2>
      <motion.div 
        className="container projects__container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {projectsData.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
      <br></br>
      <h2>More exciting projects are on the way. Check back soon</h2>
    </section>
  );
};

export default Projects;