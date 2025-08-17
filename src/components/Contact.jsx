import React from 'react';
import './Contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';


const Contact = () => {
  return (
    <section id="contact">
      <h2 className="section__title">Contact Me</h2>
      <div className="container contact__container">
        <motion.div 
          className="contact__options"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>gagandeepsingh130305@gmail.com</h5>
            <a href="mailto:gagandeepsingh130305@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <FaLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>Gagandeep Singh</h5>
            <a href="https://www.linkedin.com/in/gagandeep-singh-43b932272/" target="_blank" rel="noopener noreferrer">Connect with me</a>
          </article>
           <article className="contact__option">
            <FaGithub className="contact__option-icon" />
            <h4>GitHub</h4>
            <h5>gagan13singh</h5>
            <a href="https://github.com/gagan13singh" target="_blank" rel="noopener noreferrer">View my work</a>
          </article>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;