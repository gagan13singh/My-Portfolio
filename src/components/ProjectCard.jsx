import React, { useState, useRef, useEffect, useCallback } from 'react';
import './ProjectCard.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { LuNetwork } from 'react-icons/lu'; // Premium looking network diagram icon
import ArchitectureModal from './ArchitectureModal';

const ProjectCard = ({ project }) => {
  if (!project) return null;

  const { id, image, images, title, description, github, live, tags, category } = project;
  const [activeIdx, setActiveIdx] = useState(0);
  const [showArchModal, setShowArchModal] = useState(false);
  const carouselRef = useRef(null);
  const timerRef = useRef(null);
  const cardRef = useRef(null);

  const scrollToSlide = useCallback(
    (idx) => {
      if (!carouselRef.current) return;
      const width = carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({ left: idx * width, behavior: 'smooth' });
      setActiveIdx(idx);
    },
    []
  );

  // Auto-advance every 3 seconds for multi-image carousels
  useEffect(() => {
    if (!images || images.length <= 1) return;
    timerRef.current = setInterval(() => {
      setActiveIdx((prev) => {
        const next = (prev + 1) % images.length;
        if (carouselRef.current) {
          const width = carouselRef.current.offsetWidth;
          carouselRef.current.scrollTo({ left: next * width, behavior: 'smooth' });
        }
        return next;
      });
    }, 3000);
    return () => clearInterval(timerRef.current);
  }, [images]);

  // Sync dot indicator with manual scroll
  const handleScroll = useCallback(() => {
    if (!carouselRef.current) return;
    const { scrollLeft, offsetWidth } = carouselRef.current;
    const idx = Math.round(scrollLeft / offsetWidth);
    setActiveIdx(idx);
  }, []);

  // Subtle 3D Tilt handlers
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;

    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);

    const tiltX = ((y - box.height / 2) / (box.height / 2)) * -3.5;
    const tiltY = ((x - box.width / 2) / (box.width / 2)) * 3.5;

    requestAnimationFrame(() => {
      card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    });
  };

  const handleMouseEnter = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transition = 'box-shadow 350ms ease, border-color 350ms ease';
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    card.style.transition = 'transform 450ms cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 350ms ease, border-color 350ms ease';
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  };

  const hasArchitecture = [4, 5, 6].includes(id);

  return (
    <>
      <article
        className="project-card"
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Image / Carousel */}
        <div className="project-card__image">
          {category && <span className="project-card__badge">{category}</span>}
          {images ? (
            <>
              <div
                className="project-card__carousel"
                ref={carouselRef}
                onScroll={handleScroll}
              >
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${title} screenshot ${index + 1}`}
                    loading="lazy"
                    draggable="false"
                  />
                ))}
              </div>
              {/* Dot indicators */}
              {images.length > 1 && (
                <div className="project-card__dots">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      className={`project-card__dot ${i === activeIdx ? 'active' : ''}`}
                      onClick={() => {
                        clearInterval(timerRef.current);
                        scrollToSlide(i);
                      }}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              )}
            </>
          ) : (
            <img src={image} alt={title} loading="lazy" draggable="false" />
          )}
        </div>

        {/* Content */}
        <div className="project-card__content">
          <h3>{title}</h3>
          <p>{description}</p>

          {tags && tags.length > 0 && (
            <div className="project-card__tags">
              {tags.map((tag, i) => (
                <span key={i} className="project-card__tag">
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="project-card__links">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${title} on GitHub`}
                className="link-github"
              >
                <FaGithub /> GitHub
              </a>
            )}
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${title} live demo`}
                className="link-live"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            )}
            {hasArchitecture && (
              <button
                onClick={() => setShowArchModal(true)}
                className="link-arch"
                aria-label={`View ${title} system architecture`}
                title="View System Architecture Map"
              >
                <LuNetwork /> Architecture
              </button>
            )}
          </div>
        </div>
      </article>

      {/* Render Architecture Diagram Lightbox Modal */}
      {showArchModal && (
        <ArchitectureModal projectId={id} onClose={() => setShowArchModal(false)} />
      )}
    </>
  );
};

export default ProjectCard;