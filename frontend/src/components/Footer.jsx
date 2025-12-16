import React from 'react';
import './css/Footer.css';

export default function Footer() {
    return (
        <footer className="main-footer glass-panel">
            <div className="footer-content">
                <div className="creator-info">
                    <p>Created by <strong>Saif Belfaquir</strong></p>
                    <span className="badge">OFPPT Student Developer</span>
                </div>

                <div className="social-links">
                    <a href="https://github.com/sayfbel" target="_blank" rel="noopener noreferrer" className="github-link">
                        <i className="fa-brands fa-github"></i> github.com/sayfbel
                    </a>
                </div>

                <div className="tech-stack">
                    <span>Built with:</span>
                    <i className="fa-brands fa-react" title="React"></i>
                    <i className="fa-brands fa-js" title="JavaScript"></i>
                    <i className="fa-brands fa-css3-alt" title="CSS3"></i>
                    <span title="Vite">⚡ Vite</span>
                </div>
            </div>
        </footer>
    );
}
