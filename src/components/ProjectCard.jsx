import React from 'react';
import './ProjectCard.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  if (!project) return null;

  const { image, images, title, description, github, live, tags } = project;

  return (
    <article className="project-card">
      <div className="project-card__image">
        {images ? (
          <div className="project-card__carousel">
            {images.map((img, index) => (
              <img key={index} src={img} alt={`${title} screenshot ${index + 1}`} />
            ))}
          </div>
        ) : (
          <img src={image} alt={title} />
        )}
      </div>
      <div className="project-card__content">
        <h3>{title}</h3>
        <p>{description}</p>

        {tags && tags.length > 0 && (
          <div className="project-card__tags">
            {tags.map((tag, i) => (
              <span key={i} className="project-card__tag">{tag}</span>
            ))}
          </div>
        )}

        <div className="project-card__links">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              <FaGithub /> GitHub
            </a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;