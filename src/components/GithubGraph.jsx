import React from 'react';
import './GithubGraph.css';

const GithubGraph = () => {
    return (
        <section id="github">
            <h2 className="section__title">My Contributions</h2>
            <div className="container github__container">
                <div className="github__placeholder">
                    <p>GitHub contributions graph will be added/displayed here soon.</p>
                    <p>Visit my profile: <a href="https://github.com/gagan13singh" target="_blank" rel="noopener noreferrer">@gagan13singh</a></p>
                </div>
            </div>
        </section>
    );
};

export default GithubGraph;
