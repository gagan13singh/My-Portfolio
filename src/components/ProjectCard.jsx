
import React from 'react';
import './ProjectCard.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  if (!project) return null

  const { image, title, description, github, live } = project;
  return (
    <article className="project-card">
      <div className="project-card__image">
        <img src={image} alt={title} />
      </div>
      <div className="project-card__content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-card__links">
          <a href={github} target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a>
          <a href={live} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /> Live Demo</a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;