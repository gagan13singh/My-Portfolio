import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import './GithubGraph.css';

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
    return (
        <section id="github">
            <h2 className="section__title">My Contributions</h2>
            <div className="container github__container">
                <ErrorBoundary>
                    <GitHubCalendar
                        username="gagan13singh"
                        blockSize={15}
                        blockMargin={5}
                        fontSize={16}
                        colorScheme="dark"
                    />
                </ErrorBoundary>
            </div>
        </section>
    );
};

export default GithubGraph;
