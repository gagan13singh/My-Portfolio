import React from 'react';
import './Experience.css';
import { GraduationCap, Briefcase, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            type: 'work',
            title: 'React Developer Intern',
            company: 'Japneet (Plaza Enterprises)',
            date: 'Feb 2026 – Present',
            description: 'Contributing to an AI-powered Gurbani audio transcription and real-time search system using React and TypeScript. Designing scalable UI components with focus on performance optimization, integrating AI/ML services with frontend workflows, and participating in agile development cycles.',
            icon: <Briefcase />,
            highlights: ['React & TypeScript', 'AI/ML Integration', 'Scalable UI Components'],
        },
        {
            type: 'work',
            title: 'Academic Tutor',
            company: 'Self-Employed (Freelance)',
            date: 'May 2023 – Present',
            description: 'Tutoring 15–20 CBSE students annually in Mathematics and Science (Classes 9–12). Maintained 90%+ board exam pass rate. Designed custom notes, practice tests, and doubt-solving sessions tailored to individual weak areas. Developed strong communication and mentoring skills managing multiple students simultaneously.',
            icon: <BookOpen />,
            highlights: ['15–20 Students/yr', '90%+ Pass Rate', 'Custom Curriculum'],
        },
        {
            type: 'work',
            title: 'Social Media Head',
            company: 'Nayi Disha Foundation',
            date: 'Sep 2024 – Apr 2025',
            description: 'Led social media strategy and content creation for the NGO. Grew Instagram following by 40% through strategic content planning across multiple platforms. Led a team of 3 content creators, achieving a 35% increase in average post engagement.',
            icon: <Briefcase />,
            highlights: ['+40% Instagram Growth', '+35% Engagement', 'Team of 3'],
        },
        {
            type: 'education',
            title: 'B.Tech in Computer Science & Engineering',
            company: 'Guru Gobind Singh Indraprastha University (GGSIPU)',
            date: '2023 – 2027',
            description: 'Currently pursuing B.Tech in CSE with a CGPA of 9.27/10. Focusing on software development, data structures & algorithms, AI/ML, and modern full-stack web technologies.',
            icon: <GraduationCap />,
            highlights: ['CGPA: 9.27 / 10', 'Full-Stack Dev', 'AI & ML Focus'],
        },
        {
            type: 'education',
            title: 'Senior Secondary (Class XII)',
            company: 'Modern School, Faridabad',
            date: '2023',
            description: 'Completed senior secondary with 97% — School Topper. Science stream with a strong foundation in Mathematics, Physics, Chemistry, and Computer Science.',
            icon: <GraduationCap />,
            highlights: ['97% — School Topper', 'Science Stream', 'Computer Science'],
        },
        {
            type: 'education',
            title: 'Secondary (Class X)',
            company: 'Modern School, Faridabad',
            date: '2021',
            description: 'Scored 99.4% — District Topper. Built strong analytical, mathematical, and problem-solving foundations that continue to drive my technical career.',
            icon: <GraduationCap />,
            highlights: ['99.4% — District Topper', 'Mathematics Excellence'],
        },
    ];

    return (
        <section id="experience">
            <h2 className="section__title">Experience &amp; Education</h2>
            <div className="container experience__container">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        className={`experience__item ${exp.type}`}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
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
                            {exp.highlights && (
                                <div className="experience__highlights">
                                    {exp.highlights.map((h, i) => (
                                        <span key={i} className="experience__tag">{h}</span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;