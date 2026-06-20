import React, { useState, useEffect } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import './GithubGraph.css';
import { motion } from 'framer-motion';
import { FaCode, FaFolder, FaUsers } from 'react-icons/fa';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Github Graph Error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="github__placeholder">
                    <p>⚠️ Failed to load GitHub Calendar.</p>
                    <p>Error: {this.state.error?.message}</p>
                    <p>Visit my profile: <a href="https://github.com/gagan13singh" target="_blank" rel="noopener noreferrer">@gagan13singh</a></p>
                </div>
            );
        }

        return this.props.children;
    }
}

const GithubGraph = () => {
    const [blockSize, setBlockSize] = useState(15);
    const [blockMargin, setBlockMargin] = useState(5);
    const [fontSize, setFontSize] = useState(16);
    
    // GitHub API States
    const [profileStats, setProfileStats] = useState(null);
    const [topLanguages, setTopLanguages] = useState([]);
    const [loadingStats, setLoadingStats] = useState(true);

    useEffect(() => {
        const updateSize = () => {
            const w = window.innerWidth;
            if (w <= 400) {
                setBlockSize(8);
                setBlockMargin(3);
                setFontSize(10);
            } else if (w <= 600) {
                setBlockSize(10);
                setBlockMargin(4);
                setFontSize(12);
            } else if (w <= 768) {
                setBlockSize(12);
                setBlockMargin(4);
                setFontSize(14);
            } else {
                setBlockSize(15);
                setBlockMargin(5);
                setFontSize(16);
            }
        };

        updateSize();
        window.addEventListener('resize', updateSize);

        // Fetch User Stats & Repository Data
        const username = "gagan13singh";
        
        Promise.all([
            fetch(`https://api.github.com/users/${username}`).then(res => res.ok ? res.json() : null),
            fetch(`https://api.github.com/users/${username}/repos?per_page=100`).then(res => res.ok ? res.json() : [])
        ])
        .then(([user, repos]) => {
            if (user) {
                setProfileStats({
                    followers: user.followers,
                    reposCount: user.public_repos,
                    gistsCount: user.public_gists,
                    avatar: user.avatar_url,
                    bio: user.bio,
                    name: user.name
                });
            }

            if (Array.isArray(repos) && repos.length > 0) {
                const langCounts = {};
                let totalLangs = 0;

                repos.forEach(repo => {
                    if (repo.language) {
                        langCounts[repo.language] = (langCounts[repo.language] || 0) + 1;
                        totalLangs++;
                    }
                });

                // Top languages sorted with customized colors matching UI
                const colors = {
                    JavaScript: '#f7df1e',
                    TypeScript: '#3178c6',
                    React: '#61dafb',
                    HTML: '#e34f26',
                    CSS: '#1572b6',
                    Java: '#b07219',
                    Python: '#3572a5'
                };

                const sortedLangs = Object.entries(langCounts)
                    .map(([name, count]) => ({
                        name,
                        percentage: Math.round((count / totalLangs) * 100),
                        color: colors[name] || 'var(--color-primary)'
                    }))
                    .sort((a, b) => b.percentage - a.percentage)
                    .slice(0, 5);

                setTopLanguages(sortedLangs);
            }
            setLoadingStats(false);
        })
        .catch(err => {
            console.error("Error fetching github stats:", err);
            setLoadingStats(false);
        });

        return () => window.removeEventListener('resize', updateSize);
    }, []);

    return (
        <section id="github" className="github-section">
            <div className="github-header">
                <span className="github-eyebrow">GitHub Activity</span>
                <h2 className="section__title github__title">Open Source Metrics</h2>
                <p className="github-subtitle">
                    Real-time contributions and technical stack tracked directly from my GitHub profile.
                </p>
            </div>

            <div className="container github-layout">
                {/* 1. Full-width Contribution Calendar Card */}
                <div className="github__card github__calendar-card">
                    <h3>Contribution History</h3>
                    <div className="github__calendar-wrapper">
                        <ErrorBoundary>
                            <GitHubCalendar
                                username="gagan13singh"
                                blockSize={blockSize}
                                blockMargin={blockMargin}
                                fontSize={fontSize}
                                colorScheme="dark"
                            />
                        </ErrorBoundary>
                    </div>
                </div>

                {/* 2. Bottom Row - Profile Card & Languages Card side-by-side */}
                <div className="github-bottom-row">
                    {/* Stats Widget */}
                    <div className="github__card github__profile-card">
                        <h3>Profile Overview</h3>
                        {loadingStats ? (
                            <div className="github__loader">Loading profile stats...</div>
                        ) : profileStats ? (
                            <div className="github__profile-content">
                                <div className="github__profile-header">
                                    <img src={profileStats.avatar} alt="Avatar" className="github__avatar" />
                                    <div>
                                        <h4>{profileStats.name || "Gagandeep Singh"}</h4>
                                        <p>@gagan13singh</p>
                                    </div>
                                </div>
                                <div className="github__stats-grid">
                                    <div className="github__stat-item">
                                        <FaFolder className="github__stat-icon" />
                                        <span className="github__stat-num">{profileStats.reposCount}</span>
                                        <span className="github__stat-label">Repositories</span>
                                    </div>
                                    <div className="github__stat-item">
                                        <FaUsers className="github__stat-icon" />
                                        <span className="github__stat-num">{profileStats.followers}</span>
                                        <span className="github__stat-label">Followers</span>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="github__error-msg">Failed to load profile card.</div>
                        )}
                    </div>

                    {/* Language Tracker Widget */}
                    <div className="github__card github__languages-card">
                        <h3>Language Distribution</h3>
                        {loadingStats ? (
                            <div className="github__loader">Analyzing repositories...</div>
                        ) : topLanguages.length > 0 ? (
                            <div className="github__languages-list">
                                {topLanguages.map((lang, i) => (
                                    <div key={i} className="github__lang-bar-group">
                                        <div className="github__lang-info">
                                            <span className="github__lang-name">
                                                <FaCode style={{ color: lang.color, marginRight: '6px' }} />
                                                {lang.name}
                                            </span>
                                            <span className="github__lang-pct">{lang.percentage}%</span>
                                        </div>
                                        <div className="github__lang-bar-track">
                                            <motion.div
                                                className="github__lang-bar-fill"
                                                style={{ backgroundColor: lang.color }}
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${lang.percentage}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="github__error-msg">Language statistics unavailable.</div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GithubGraph;
