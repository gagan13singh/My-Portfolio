import React from 'react';
import './Experience.css';
import { GraduationCap, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            type: 'education',
            title: 'B.Tech in Computer Science & Engineering',
            company: 'Guru Gobind Singh Indraprastha University (GGSIPU)',
            date: '2023 - Present',
            description: 'Currently pursuing Bachelor of Technology in Computer Science & Engineering, focusing on software development, data structures, algorithms, and modern web technologies.',
            icon: <GraduationCap />
        },
        {
            type: 'work',
            title: 'Social Media Head',
            company: 'Nayi Disha NGO',
            date: 'Sep 2024 - Feb 2025',
            description: 'Led social media strategy and content creation for the NGO, managing online presence, engaging with the community, and promoting social initiatives to increase awareness and impact.',
            icon: <Briefcase />
        },
        {
            type: 'education',
            title: 'Senior Secondary (12th)',
            company: 'Modern School',
            date: '2023',
            description: 'Completed senior secondary education with a focus on Science stream, building a strong foundation in Mathematics and Computer Science.',
            icon: <GraduationCap />
        },
        {
            type: 'education',
            title: 'Secondary (10th)',
            company: 'Modern School',
            date: '2021',
            description: 'Completed secondary education with excellent academic performance, developing core analytical and problem-solving skills.',
            icon: <GraduationCap />
        }
    ];

    return (
        <section id="experience">
            <h2 className="section__title">Experience & Education</h2>
            <div className="container experience__container">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        className={`experience__item ${exp.type}`}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="experience__icon">
                            {exp.icon}
                        </div>
                        <div className="experience__content">
                            <div className="experience__date">{exp.date}</div>
                            <h3>{exp.title}</h3>
                            <h4>{exp.company}</h4>
                            <p>{exp.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
