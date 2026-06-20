import React, { useState } from 'react';
import './Header.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => setIsOpen(false);

    return (
        <motion.header
            className="header"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="container header__container">
                <a href="#" className="header__logo" aria-label="Gagandeep Singh - Home">Gagandeep Singh</a>
                <nav className={`header__nav ${isOpen ? 'active' : ''}`} id="main-nav" aria-label="Main navigation">
                    <a href="#home" onClick={closeMenu}>Home</a>
                    <a href="#about" onClick={closeMenu}>About</a>
                    <a href="#projects" onClick={closeMenu}>Projects</a>
                    <a href="#contact" onClick={closeMenu}>Contact</a>
                </nav>
                <div className="header__actions">
                    <ThemeToggle />
                    <button
                        className="header__toggle"
                        onClick={toggleMenu}
                        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                        aria-expanded={isOpen}
                        aria-controls="main-nav"
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>
        </motion.header>
    );
};

export default Header;
