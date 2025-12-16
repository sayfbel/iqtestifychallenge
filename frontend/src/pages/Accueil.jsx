// Accueil.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import mathImg from '../assets/math.png';
import pythonImg from '../assets/python.png';
import './css/Accueil.css';

export default function Accueil() {
    const navigate = useNavigate();

    return (
        <>
            <div className="main-container">
                <h1 className="hero-title">Welcome to IQ Test</h1>
                <p className="hero-subtitle">
                    Push your cognitive limits with our advanced logic assessments.
                    Test your pattern recognition in Math and code comprehension in Python.
                </p>

                <div className="cards-grid">
                    <div className="card">
                        <div className="card-visual">
                            <img src={mathImg} alt="Math IQ Test" className="card-img" />
                        </div>
                        <h2>Math IQ Test</h2>
                        <p>
                            Challenge your numerical reasoning. Solve visual puzzles involving shapes,
                            value mapping, and logical operator inference to complete the sequence.
                        </p>
                        <button className="btn" onClick={() => navigate('/math/start')}>Take Test</button>
                    </div>

                    <div className="card">
                        <div className="card-visual">
                            <img src={pythonImg} alt="Python IQ Test" className="card-img" />
                        </div>
                        <h2>Python IQ Test</h2>
                        <p>
                            Evaluate your programming logic. Read and predict the output of
                            Python snippets, focusing on loops, conditionals, and variable states.
                        </p>
                        <button className="btn" onClick={() => navigate('/python/start')}>Take Test</button>
                    </div>
                </div>

            </div>
            <div className="info-container glass-panel">
                <h3>How it Works</h3>
                <ul className="guide-list">
                    <li>
                        <strong>1. Select a Challenge:</strong> Choose between Math Logic or Python Programming.
                    </li>
                    <li>
                        <strong>2. Solve & Advance:</strong> Answer questions correctly to progress. The difficulty increases as you go.
                    </li>
                    <li>
                        <strong>3. Speed & Accuracy:</strong> Your final rank depends on the level reached, wrong attempts made, and total time taken.
                    </li>
                    <li>
                        <strong>4. Track Progress:</strong> Results are saved locally. Check the Leaderboard to see your best performances.
                    </li>
                </ul>
            </div>

            <div className="info-container glass-panel vision-container" style={{ marginTop: '30px' }}>
                <h3>Future Vision & Roadmap</h3>
                <div className="vision-content">
                    <p>
                        Our mission extends beyond static quizzes. We are actively developing a robust
                        <strong> Python Backend</strong> to support real-time global rankings, user profiles, and persistent progress tracking across devices.
                    </p>
                    <div className="roadmap-grid">
                        <div className="roadmap-item">
                            <i className="fa-brands fa-html5"></i>
                            <span>HTML5 Mastery</span>
                        </div>
                        <div className="roadmap-item">
                            <i className="fa-brands fa-css3-alt"></i>
                            <span>Advanced CSS3</span>
                        </div>
                        <div className="roadmap-item">
                            <i className="fa-brands fa-js"></i>
                            <span>JavaScript Logic</span>
                        </div>
                        <div className="roadmap-item">
                            <i className="fa-solid fa-server"></i>
                            <span>Python Backend</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
