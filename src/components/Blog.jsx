import React from 'react';
import './Blog.css';
import { motion } from 'framer-motion';

const blogData = [
    {
        id: 1,
        title: 'Frontend Development',
        excerpt: 'Mastered modern frontend technologies including React, JavaScript ES6+, responsive design, and component-based architecture.',
        date: 'Sep - Oct 2024',
        status: 'Completed',
        topics: ['React', 'JavaScript', 'CSS3', 'Responsive Design']
    },
    {
        id: 2,
        title: 'Data Structures & Algorithms',
        excerpt: 'Currently learning DSA in Java, focusing on problem-solving techniques, algorithmic thinking, and efficient code implementation.',
        date: 'Nov 2024 - Present',
        status: 'In Progress',
        topics: ['Java', 'DSA', 'Problem Solving', 'Algorithms']
    },
    {
        id: 3,
        title: 'Data Science & Machine Learning',
        excerpt: 'Next on my learning journey - diving deep into data science, machine learning algorithms, and AI applications.',
        date: 'Upcoming',
        status: 'Planned',
        topics: ['Python', 'ML', 'Data Science', 'AI']
    }
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
