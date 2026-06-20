import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <motion.div
        className="container footer__container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <a href="#" className="footer__logo" aria-label="Gagandeep Singh - Back to top">Gagandeep Singh</a>
        <nav className="footer__links" aria-label="Footer navigation">
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="footer__socials">
          <a href="https://github.com/gagan13singh" target="_blank" rel="noopener noreferrer" aria-label="View Gagandeep's GitHub profile">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/gagandeep-singh-43b932272/" target="_blank" rel="noopener noreferrer" aria-label="Connect with Gagandeep on LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Follow Gagandeep on Twitter">
            <FaTwitter />
          </a>
        </div>
        <div className="footer__copyright">
          <small>&copy; {year} Gagandeep Singh. All rights reserved.</small>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;