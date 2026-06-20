import React, { useState, useEffect } from 'react';
import './ScrollProgress.css';

const ScrollProgress = () => {
    const [scrollWidth, setScrollWidth] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
            const currentScroll = window.scrollY;
            if (totalScroll > 0) {
                setScrollWidth((currentScroll / totalScroll) * 100);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="scroll-progress-container" aria-hidden="true">
            <div 
                className="scroll-progress-bar" 
                style={{ width: `${scrollWidth}%` }}
            />
        </div>
    );
};

export default ScrollProgress;
