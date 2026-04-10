import React from 'react';
import './Blog.css';
import { motion } from 'framer-motion';

const blogData = [
    {
        id: 1,
        title: 'Full-Stack & AI Integration',
        excerpt:
            'Mastered full-stack development with React, Node.js, Express, and MongoDB. Built AI-powered apps integrating WebGPU/WASM LLMs, Groq API, and LLaMA — including an in-browser privacy-first AI and a full LMS platform.',
        date: 'Sep 2024 – Present',
        status: 'Completed',
        topics: ['React', 'Node.js', 'MongoDB', 'LLMs', 'WebGPU', 'REST APIs'],
    },
    {
        id: 2,
        title: 'Data Structures & Algorithms',
        excerpt:
            'Actively solving DSA problems in Java on LeetCode, covering Arrays, Hashing, Two Pointers, and Bit Manipulation. Building algorithmic thinking for product engineering and competitive programming.',
        date: 'Nov 2024 – Present',
        status: 'In Progress',
        topics: ['Java', 'Arrays', 'Hashing', 'Two Pointers', 'LeetCode'],
    },
    {
        id: 3,
        title: 'Data Science & Machine Learning',
        excerpt:
            'Next chapter — diving deep into Python-based ML, statistical modeling, data pipelines, and neural networks. Goal: bridge my AI integration experience with foundational ML research skills.',
        date: 'Upcoming',
        status: 'Planned',
        topics: ['Python', 'Scikit-learn', 'Pandas', 'Neural Networks', 'ML'],
    },
];

const Blog = () => {
    return (
        <section id="blog">
            <h2 className="section__title">My Learning Journey</h2>
            <div className="container blog__container">
                {blogData.map((item) => (
                    <motion.article
                        className={`blog__card ${item.status.toLowerCase().replace(' ', '-')}`}
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        whileHover={{ scale: 1.03 }}
                    >
                        <div className="blog__content">
                            <div className="blog__header">
                                <small className="blog__date">{item.date}</small>
                                <span className={`blog__status ${item.status.toLowerCase().replace(' ', '-')}`}>
                                    {item.status}
                                </span>
                            </div>
                            <h3 className="blog__title">{item.title}</h3>
                            <p className="blog__excerpt">{item.excerpt}</p>
                            <div className="blog__topics">
                                {item.topics.map((topic, index) => (
                                    <span key={index} className="blog__topic">{topic}</span>
                                ))}
                            </div>
                        </div>
                    </motion.article>
                ))}
            </div>
        </section>
    );
};

export default Blog;