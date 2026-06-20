import React, { useState, useEffect } from 'react';
import './Preloader.css';
import { motion, AnimatePresence } from 'framer-motion';

// Slower timing for desktop boot screen (total duration ~3.2 seconds)
const desktopLogsTemplate = [
  { text: 'SYSTEM: Booting GagandeepOS v2.4.0...', delay: 200 },
  { text: 'CORE: Initializing React engine & Framer Motion controllers...', delay: 700 },
  { text: 'HARDWARE: Checking local processor... WebGPU detected.', delay: 1300 },
  { text: 'AI_AGENT: Syncing local models (Llama 3.2, Qwen 2.5)...', delay: 1900 },
  { text: 'NETWORK: Fetching GitHub stats & contributions data...', delay: 2500 },
  { text: 'SUCCESS: Workspace established. Welcome to the portfolio!', delay: 3000 },
];

const Preloader = ({ onComplete }) => {
  const [logs, setLogs] = useState([]);
  const [progress, setProgress] = useState(0);
  const [systemTime, setSystemTime] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  // Responsive state detector
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Update clock in the top corner
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setSystemTime(now.toTimeString().split(' ')[0]);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Desktop logs timer
  useEffect(() => {
    if (isMobile) return;
    
    setLogs([]);
    const timers = desktopLogsTemplate.map((line) => {
      return setTimeout(() => {
        setLogs((prev) => [...prev, line.text]);
      }, line.delay);
    });

    return () => timers.forEach(clearTimeout);
  }, [isMobile]);

  // Handle progress bar scaling up to 100% (3.2 seconds total duration)
  useEffect(() => {
    const duration = 3200; // 3.2 seconds total loading
    const intervalTime = 40;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const nextProgress = Math.min((currentStep / steps) * 100, 100);
      setProgress(Math.round(nextProgress));

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          onComplete();
        }, 500); // 500ms delay to display 100% complete
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  // Determine mobile status text based on loading progress
  const getMobileStatus = () => {
    if (progress < 25) return 'Checking mobile compatibility...';
    if (progress < 55) return 'Loading UI layout modules...';
    if (progress < 80) return 'Syncing developer dashboard stats...';
    if (progress < 100) return 'Optimizing animations...';
    return 'Ready!';
  };

  return (
    <motion.div
      className="preloader-overlay"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        clipPath: 'circle(0% at 50% 50%)',
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
      }}
    >
      {/* Tech Grid Backdrop */}
      <div className="preloader-grid" />
      <div className="preloader-glow" />

      {/* Top Header Information */}
      <div className="preloader-header">
        <div className="preloader-header-left">
          <span className="preloader-dot blinking" />
          <span className="preloader-system-tag font-mono">GaganOS v2.4.0</span>
        </div>
        <div className="preloader-header-right font-mono">
          TIME: {systemTime}
        </div>
      </div>

      {/* Conditional Layout */}
      {!isMobile ? (
        /* DESKTOP STARTUP CONSOLE */
        <div className="preloader-console-wrapper">
          <div className="preloader-console">
            <div className="preloader-console-header">
              <span className="console-btn red" />
              <span className="console-btn yellow" />
              <span className="console-btn green" />
              <span className="console-title font-mono">system_startup.log</span>
            </div>

            <div className="preloader-console-body font-mono">
              <AnimatePresence>
                {logs.map((log, idx) => (
                  <motion.div
                    key={idx}
                    className={`console-line ${idx === logs.length - 1 ? 'active-line' : ''}`}
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <span className="console-prompt">&gt;</span> {log}
                  </motion.div>
                ))}
              </AnimatePresence>
              {progress < 100 && (
                <div className="console-cursor blinking">_</div>
              )}
            </div>
          </div>

          {/* Loading Progress Section */}
          <div className="preloader-progress-section font-mono">
            <div className="progress-label-row">
              <span>COMPILING WORKSPACE</span>
              <span>{progress}%</span>
            </div>
            <div className="progress-bar-track">
              <motion.div
                className="progress-bar-fill"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>
            <div className="preloader-footer font-mono">
              SECURE CLIENT INTERFACE // LOCALHOST:3000
            </div>
          </div>
        </div>
      ) : (
        /* MOBILE VIEW: MINIMAL GLOWING PERSONAL LOGO */
        <div className="preloader-mobile-wrapper">
          <motion.div 
            className="preloader-logo-ring"
            animate={{ 
              scale: [1, 1.05, 1],
              boxShadow: [
                '0 0 20px rgba(228, 88, 38, 0.2)',
                '0 0 40px rgba(228, 88, 38, 0.4)',
                '0 0 20px rgba(228, 88, 38, 0.2)'
              ]
            }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <span className="preloader-logo-text font-mono">&#123; GS &#125;</span>
          </motion.div>

          <div className="preloader-mobile-progress font-mono">
            <div className="preloader-mobile-status">{getMobileStatus()}</div>
            <div className="preloader-mobile-percentage">{progress}%</div>
            
            <div className="progress-bar-track">
              <div
                className="progress-bar-fill"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Preloader;
