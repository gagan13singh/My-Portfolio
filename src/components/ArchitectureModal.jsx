import React, { useState, useEffect, useRef } from 'react';
import './ArchitectureModal.css';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaMousePointer, FaArrowDown, FaInfoCircle, FaSearchPlus, FaSearchMinus, FaRedo } from 'react-icons/fa';

// Architecture diagrams database for Gagandeep's projects
const architectureData = {
  6: { // Sentry AI
    title: 'Sentry AI System Architecture',
    nodes: [
      { id: '1', label: 'React Client UI', type: 'entry', x: 30, y: 150, info: 'Privacy-first conversational UI running in-browser.' },
      { id: '2', label: 'Orchestrator Router', type: 'process', x: 270, y: 150, info: 'Dual-engine local router. Checks hardware capabilities and routes tasks.' },
      { id: '3', label: 'WebGPU Engine', type: 'engine', x: 510, y: 65, info: 'Llama 3.2-1B running locally using WebGPU acceleration for fast token generation.' },
      { id: '4', label: 'WASM Fallback Engine', type: 'engine', x: 510, y: 235, info: 'Qwen 2.5 0.5B running on standard CPUs via WASM when WebGPU is unavailable.' },
      { id: '5', label: 'Service Worker Cache', type: 'storage', x: 750, y: 150, info: 'Air-gapped Service Workers intercepting requests to cache and serve quantized model weights locally.' }
    ],
    connections: [
      { from: '1', to: '2', label: 'User input' },
      { from: '2', to: '3', label: 'GPU Available' },
      { from: '2', to: '4', label: 'CPU Fallback' },
      { from: '3', to: '5', label: 'Read weights' },
      { from: '4', to: '5', label: 'Read weights' }
    ]
  },
  5: { // Scientia
    title: 'Scientia LMS System Architecture',
    nodes: [
      { id: '1', label: 'React Dashboard', type: 'entry', x: 20, y: 150, info: 'Responsive React frontend with video player, Analytics dashboards, and AI doubt UI.' },
      { id: '2', label: 'Node.js Express API', type: 'process', x: 260, y: 150, info: 'Express server hosting 40+ REST endpoints handling JWT verification and orchestration.' },
      { id: '3', label: 'Supabase SSO & DB', type: 'storage', x: 500, y: 40, info: 'Supabase handles User Authentication (Google OAuth) and secure Session management.' },
      { id: '4', label: 'Cloudinary CDN', type: 'storage', x: 500, y: 150, info: 'Handles streaming course videos and user avatar image hosting.' },
      { id: '5', label: 'MongoDB Cluster', type: 'storage', x: 500, y: 260, info: 'Primary database storing progress tracks, course catalogs, student records, and forums.' },
      { id: '6', label: 'AI Doubt Assistant', type: 'engine', x: 740, y: 150, info: 'Integrated OpenAI/Gemini wrapper providing contextual homework help.' }
    ],
    connections: [
      { from: '1', to: '2', label: 'REST Call' },
      { from: '2', to: '3', label: 'Auth check' },
      { from: '2', to: '4', label: 'Stream files' },
      { from: '2', to: '5', label: 'Store state' },
      { from: '2', to: '6', label: 'Process chat' }
    ]
  },
  4: { // Vidyastra
    title: 'Vidyastra System Architecture',
    nodes: [
      { id: '1', label: 'Test Configurator UI', type: 'entry', x: 40, y: 150, info: 'React interface to specify subjects, classes, test parameters, and style options.' },
      { id: '2', label: 'Express API Server', type: 'process', x: 280, y: 150, info: 'Validates structure and structures prompt templates matching CBSE specs.' },
      { id: '3', label: 'LLaMA via Groq API', type: 'engine', x: 520, y: 65, info: 'Dual-orchestration engine that generates structured tests in under 60 seconds.' },
      { id: '4', label: 'Supabase Engine', type: 'storage', x: 520, y: 235, info: 'Database layer storing exam history and user generated PDF links.' }
    ],
    connections: [
      { from: '1', to: '2', label: 'POST request' },
      { from: '2', to: '3', label: 'Prompt triggers' },
      { from: '2', to: '4', label: 'Save generation' }
    ]
  }
};

const ArchitectureModal = ({ projectId, onClose }) => {
  const data = architectureData[projectId];
  if (!data) return null;

  const [nodes, setNodes] = useState([]);
  const [activeNode, setActiveNode] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [zoom, setZoom] = useState(0.72); // Default zoomed out to fit the wider spacing nicely
  const containerRef = useRef(null);
  const dragNodeIdRef = useRef(null);

  // Screen size detector
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Initialize nodes
  useEffect(() => {
    setNodes(data.nodes);
    setActiveNode(data.nodes[0]); // Select first node by default
    setZoom(0.72); // Reset to zoomed out state on project change
  }, [projectId]);

  // Handle Drag Move (Desktop only)
  const handleMouseMove = (e) => {
    if (isMobile || !dragNodeIdRef.current || !containerRef.current) return;
    
    const container = containerRef.current.getBoundingClientRect();
    
    // Scale delta mouse movements based on current zoom factor
    const x = (e.clientX - container.left) / zoom;
    const y = (e.clientY - container.top) / zoom;

    // Keep node coordinates inside boundary limits of zoomed canvas (920px x 350px)
    const boundX = Math.max(10, Math.min(x - 75, 920 - 160));
    const boundY = Math.max(10, Math.min(y - 24, 350 - 60));

    setNodes((prev) =>
      prev.map((n) =>
        n.id === dragNodeIdRef.current ? { ...n, x: boundX, y: boundY } : n
      )
    );
  };

  const handleMouseUp = () => {
    dragNodeIdRef.current = null;
  };

  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp);
    return () => window.removeEventListener('mouseup', handleMouseUp);
  }, []);

  const zoomIn = () => setZoom(z => Math.min(z + 0.1, 1.2));
  const zoomOut = () => setZoom(z => Math.max(z - 0.1, 0.5));
  const resetZoom = () => setZoom(0.72);

  return (
    <AnimatePresence>
      <div className="arch-modal-backdrop" onClick={onClose}>
        <motion.div
          className="arch-modal-content"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', stiffness: 350, damping: 28 }}
        >
          {/* Modal Header */}
          <div className="arch-modal-header">
            <h3>{data.title}</h3>
            <button className="arch-modal-close" onClick={onClose} aria-label="Close modal">
              <FaTimes />
            </button>
          </div>

          <div className="arch-modal-body">
            <p className="arch-instruction-bar">
              {isMobile ? (
                <>
                  <FaInfoCircle style={{ marginRight: '6px', color: 'var(--color-primary)' }} />
                  Tap components below to inspect their specifications and interactions.
                </>
              ) : (
                <>
                  <FaMousePointer style={{ marginRight: '6px', color: 'var(--color-primary)' }} />
                  <span><strong>Drag & drop</strong> nodes to customize layout. Click to inspect details. Use controls to zoom.</span>
                </>
              )}
            </p>

            <div className="arch-diagram-layout">
              {/* Responsive Rendering Mode */}
              {!isMobile ? (
                /* DESKTOP DRAWING CANVAS WITH ZOOM */
                <div
                  className="arch-canvas-container"
                  ref={containerRef}
                  onMouseMove={handleMouseMove}
                >
                  {/* Zoom Controls Overlay */}
                  <div className="arch-zoom-controls">
                    <button onClick={zoomOut} title="Zoom Out"><FaSearchMinus /></button>
                    <span className="arch-zoom-label">{Math.round(zoom * 100)}%</span>
                    <button onClick={zoomIn} title="Zoom In"><FaSearchPlus /></button>
                    <button onClick={resetZoom} title="Reset Zoom"><FaRedo style={{ fontSize: '0.7rem' }} /></button>
                  </div>

                  {/* Scaled Viewport Wrapper */}
                  <div 
                    className="arch-canvas-viewport"
                    style={{
                      transform: `scale(${zoom})`,
                      transformOrigin: 'top left',
                      width: '920px',
                      height: '350px'
                    }}
                  >
                    <svg className="arch-svg-canvas" style={{ width: '920px', height: '350px' }}>
                      <defs>
                        <marker
                          id="arrow"
                          viewBox="0 0 10 10"
                          refX="20"
                          refY="5"
                          markerWidth="6"
                          markerHeight="6"
                          orient="auto-start-reverse"
                        >
                          <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--color-primary)" />
                        </marker>
                      </defs>
                      {data.connections.map((conn, idx) => {
                        const fromNode = nodes.find((n) => n.id === conn.from);
                        const toNode = nodes.find((n) => n.id === conn.to);
                        if (!fromNode || !toNode) return null;

                        const startX = fromNode.x + 75;
                        const startY = fromNode.y + 24;
                        const endX = toNode.x + 75;
                        const endY = toNode.y + 24;

                        const midX = (startX + endX) / 2;
                        const midY = (startY + endY) / 2;

                        const labelWidth = conn.label.length * 6 + 12;

                        return (
                          <g key={idx}>
                            <line
                              x1={startX}
                              y1={startY}
                              x2={endX}
                              y2={endY}
                              className="arch-connection-line"
                              markerEnd="url(#arrow)"
                            />
                            <rect
                              x={midX - labelWidth / 2}
                              y={midY - 11}
                              width={labelWidth}
                              height={18}
                              rx={6}
                              className="arch-connection-mask"
                            />
                            <text
                              x={midX}
                              y={midY + 2}
                              className="arch-connection-text"
                              textAnchor="middle"
                            >
                              {conn.label}
                            </text>
                          </g>
                        );
                      })}
                    </svg>

                    {nodes.map((node) => (
                      <div
                        key={node.id}
                        className={`arch-node node-${node.type} ${activeNode?.id === node.id ? 'active' : ''}`}
                        style={{ left: `${node.x}px`, top: `${node.y}px` }}
                        onMouseDown={(e) => {
                          dragNodeIdRef.current = node.id;
                          setActiveNode(node);
                        }}
                        onClick={() => setActiveNode(node)}
                      >
                        <span>{node.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                /* MOBILE RESPONSIVE PIPELINE LIST */
                <div className="arch-mobile-pipeline">
                  {nodes.map((node, i) => (
                    <React.Fragment key={node.id}>
                      <button
                        className={`arch-mobile-node node-${node.type} ${activeNode?.id === node.id ? 'active' : ''}`}
                        onClick={() => setActiveNode(node)}
                      >
                        <span className="arch-mobile-node-index">{i + 1}</span>
                        <span className="arch-mobile-node-label">{node.label}</span>
                        <span className={`arch-badge-type badge-${node.type}`}>{node.type}</span>
                      </button>
                      {i < nodes.length - 1 && (
                        <div className="arch-mobile-divider">
                          <FaArrowDown className="arch-mobile-arrow" />
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              )}

              {/* Node Inspector Side Panel */}
              <div className="arch-inspector-panel">
                <h4>Component Inspector</h4>
                {activeNode ? (
                  <div className="arch-inspector-content">
                    <h5>{activeNode.label}</h5>
                    <span className={`arch-badge-type badge-${activeNode.type}`}>
                      {activeNode.type}
                    </span>
                    <p>{activeNode.info}</p>
                  </div>
                ) : (
                  <p className="arch-inspector-placeholder">
                    Select a component inside the diagram to inspect its pipeline specifications.
                  </p>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ArchitectureModal;
