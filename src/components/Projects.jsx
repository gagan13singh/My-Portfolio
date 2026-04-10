import React, { useState } from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';
import Proj1Img from '../assets/project.png';
import Proj2Img from '../assets/project2.png';
import TrainSimImg from '../assets/train-simulation.png';
import ExamGenImg from '../assets/exam-generator-landing.png';
import EduSync1 from '../assets/edusync-1.png';
import EduSync2 from '../assets/edusync-2.png';
import EduSync3 from '../assets/edusync-3.png';
import EduSync4 from '../assets/edusync-4.png';
import EduSync5 from '../assets/edusync-5.png';
import Sentry1 from '../assets/sentry-1.png';
import Sentry2 from '../assets/sentry-2.png';
import Sentry3 from '../assets/sentry-3.png';

const projectsData = [
  {
    id: 6,
    images: [Sentry1, Sentry2, Sentry3],
    title: 'Sentry AI – Privacy-First Edge AI',
    description:
      'Fully autonomous, privacy-first conversational AI running LLMs entirely in-browser with zero server-side processing. Dual-engine orchestration dynamically routes between WebGPU (Llama 3.2-1B) and WASM (Qwen 2.5 0.5B) based on hardware. Air-gap security via Service Worker interceptors with 50%+ RAM reduction through 4-bit quantization.',
    github: 'https://github.com/gagan13singh/sentry-ai',
    live: 'https://sentry-frcrxbqhm-gagandeep-singh-s-projects-0f9588a0.vercel.app/',
    category: 'Full Stack',
    tags: ['React', 'WebGPU', 'WASM', 'WebLLM', 'PWA'],
  },
  {
    id: 5,
    images: [EduSync2, EduSync1, EduSync3, EduSync4, EduSync5],
    title: 'Scientia – AI-Powered LMS',
    description:
      'Full-scale Learning Management System with 20+ screens, Student/Teacher dashboards, analytics, and an AI Doubt Assistant — improving learning efficiency by 60%. Features video course player with progress tracking, smart To-Do automation (70% workload reduction), 40+ REST APIs, Supabase SSO (Google OAuth), and Cloudinary media hosting.',
    github: 'https://github.com/gagan13singh/Learning-Management-System',
    live: 'https://scientia-lms.vercel.app',
    category: 'Full Stack',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Supabase'],
  },
  {
    id: 4,
    image: ExamGenImg,
    title: 'Vidyastra – AI Question Generator',
    description:
      'AI-powered CBSE Question Generator creating 10–50 customized questions in under 60 seconds using a dual-LLM approach (LLaMA + Groq). Reduced exam prep effort by 80% with intelligent prompt engineering. Features Supabase auth and configurable test parameters.',
    github: 'https://github.com/gagan13singh/CBSE-exam-oriented-Question-generator-ai-powered-',
    live: 'https://vidyastra-prep.vercel.app/',
    category: 'Full Stack',
    tags: ['React', 'Node.js', 'LLaMA', 'Groq', 'Supabase'],
  },
  {
    id: 3,
    image: TrainSimImg,
    title: 'Kalyan–Lonavala Train Simulation',
    description:
      'Interactive train simulation system featuring AI-powered traffic optimization, real-time train control, and emergency dispatch management for the Kalyan–Lonavala railway section.',
    category: 'Full Stack',
    github: 'https://github.com',
    tags: ['Simulation', 'AI Optimization', 'Real-Time'],
  },
  {
    id: 1,
    image: Proj1Img,
    title: 'Portfolio Website',
    description:
      'Personal portfolio website built with React and Vite. Features dark/light theme toggle, Framer Motion animations, responsive design, and GitHub contribution calendar.',
    github: 'https://github.com',
    live: 'https://my-portfolio-gs.vercel.app/',
    category: 'React',
    tags: ['React', 'Vite', 'Framer Motion', 'CSS'],
  },
  {
    id: 2,
    image: Proj2Img,
    title: 'Weather Application',
    description:
      'Responsive weather app built with React.js and OpenWeather API. Displays real-time weather data, forecasts, and location-based results with a clean, modern UI.',
    github: 'https://github.com',
    live: 'https://weather-app-gsingh.vercel.app/',
    category: 'React',
    tags: ['React', 'OpenWeather API', 'Responsive Design'],
  },
];

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects =
    filter === 'All'
      ? projectsData
      : projectsData.filter((project) => project.category === filter);

  return (
    <section id="projects">
      <h2 className="section__title">My Recent Work</h2>

      <div className="project-filters">
        {['All', 'React', 'Full Stack'].map((category) => (
          <button
            key={category}
            className={`filter-btn ${filter === category ? 'active' : ''}`}
            onClick={() => setFilter(category)}
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
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>

      <br />
      <p style={{ textAlign: 'center', color: 'var(--color-text-light)', marginTop: '1rem' }}>
        🚀 More exciting projects coming soon — stay tuned!
      </p>
    </section>
  );
};

export default Projects;