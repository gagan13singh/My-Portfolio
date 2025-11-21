import React, { useState } from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';
import Proj1Img from '../assets/project.png';
import Proj2Img from '../assets/project2.png';
import TrainSimImg from '../assets/train-simulation.png';

const projectsData = [
  {
    id: 1,
    image: Proj1Img,
    title: 'Portfolio Website',
    description: 'A personal portfolio website created using React and Vite.',
    github: 'https://github.com',
    live: 'https://my-portfolio-gs.vercel.app/',
    category: 'React'
  },
  {
    id: 2,
    image: Proj2Img,
    title: 'Weather Application',
    description: 'Built a responsive weather application using React.js and OpenWeather API to fetch real-time weather data',
    github: 'https://github.com',
    live: 'https://weather-app-gsingh.vercel.app/',
    category: 'React'
  },
  {
    id: 3,
    image: TrainSimImg,
    title: 'Kalyan-Lonavala Train Simulation',
    description: 'An interactive train simulation system featuring AI-powered traffic optimization, real-time train control, and emergency dispatch management for the Kalyan-Lonavala railway section.',
    category: 'Full Stack'
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter(project => project.category === filter);

  const handleFilterChange = (category) => {
    setFilter(category);
    setActiveFilter(category);
  };

  return (
    <section id="projects">
      <h2 className="section__title">My Recent Work (Projects)</h2>

      <div className="project-filters">
        {['All', 'React', 'Full Stack'].map((category) => (
          <button
            key={category}
            className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
            onClick={() => handleFilterChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div
        className="container projects__container"
        layout
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
      <br></br>
      <h2 style={{ textAlign: 'center' }}>More exciting projects are on the way. Check back soon</h2>
    </section>
  );
};

export default Projects;