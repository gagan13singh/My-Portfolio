import React, { useState } from 'react';
import './Contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;
    const subject = `Portfolio Contact from ${name}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;

    window.location.href = `mailto:gagandeepsingh130305@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;

    // Reset form after opening email client
    setFormData({ name: '', email: '', message: '' });
    alert("Opening your email client...");
  };

  return (
    <section id="contact">
      <h2 className="section__title">Contact Me</h2>
      <div className="container contact__container">
        <motion.div
          className="contact__options"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.article
            className="contact__option"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>gagandeepsingh130305@gmail.com</h5>
            <a href="mailto:gagandeepsingh130305@gmail.com">Send a message</a>
          </motion.article>
          <motion.article
            className="contact__option"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <FaLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>Gagandeep Singh</h5>
            <a href="https://www.linkedin.com/in/gagandeep-singh-43b932272/" target="_blank" rel="noopener noreferrer">Connect with me</a>
          </motion.article>
          <motion.article
            className="contact__option"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <FaGithub className="contact__option-icon" />
            <h4>GitHub</h4>
            <h5>gagan13singh</h5>
            <a href="https://github.com/gagan13singh" target="_blank" rel="noopener noreferrer">View my work</a>
          </motion.article>
        </motion.div>
        {/* END OF CONTACT OPTIONS */}
        <motion.form
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;