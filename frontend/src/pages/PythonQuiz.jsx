import { useState, useRef, useEffect } from 'react';
import { pythonQuestions } from '../data/pythonQuestions';
import { useNavigate } from 'react-router-dom';
import { saveQuizResult } from '../dataUsers/dataUsers';
import './css/PythonQuiz.css';

export default function PythonQuiz() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [feedback, setFeedback] = useState({ text: '', type: '' });
    const [stats, setStats] = useState({
        correct: 0,
        incorrect: 0,
        easy: 0,
        medium: 0,
        hard: 0
    });
    const [isFinished, setIsFinished] = useState(false);
    const [timer, setTimer] = useState(0);
    const [isTimerActive, setIsTimerActive] = useState(true);
    const navigate = useNavigate();

    // Timer Logic
    // useEffect(() => { // Start when component mounts 
    // Is already inside component so it runs on mount
    // }, []);

    useEffect(() => {
        let interval;
        if (isTimerActive && !isFinished) {
            interval = setInterval(() => {
                setTimer(prev => prev + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isTimerActive, isFinished]);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const handleEndQuiz = (completed) => {
        const isSuccess = completed === true;
        setIsTimerActive(false);
        setIsFinished(true);


        const finalIQ = calculateIQ();

        saveQuizResult({
            quizState: 'completed',
            quizType: 'Python',
            quizLevel: isSuccess ? pythonQuestions.length : currentQuestionIndex,
            estimatedIQ: finalIQ,
            wrongAttempts: stats.incorrect,
            timeTaken: formatTime(timer),
            date: new Date().toISOString().split('T')[0]
        });
    };

    const currentQuestion = pythonQuestions[currentQuestionIndex];

    const submitAnswer = () => {
        const numAnswer = parseFloat(userAnswer);

        if (isNaN(numAnswer)) {
            setFeedback({ text: 'SyntaxError: Please enter a valid number!', type: 'incorrect' });
            return;
        }

        const isCorrect = Math.abs(numAnswer - currentQuestion.answer) < 0.01;

        if (isCorrect) {
            setFeedback({ text: '✓ Correct! Well done, Pythonista!', type: 'correct' });
            const difficulty = currentQuestion.difficulty;
            setStats(prev => ({
                ...prev,
                correct: prev.correct + 1,
                [difficulty]: prev[difficulty] + 1
            }));
        } else {
            setFeedback({ text: `✗ Wrong! Expected output: ${currentQuestion.answer}`, type: 'incorrect' });
            setStats(prev => ({
                ...prev,
                incorrect: prev.incorrect + 1
            }));
        }

        setTimeout(() => {
            if (currentQuestionIndex < pythonQuestions.length - 1) {
                setCurrentQuestionIndex(prev => prev + 1);
                setUserAnswer('');
                setFeedback({ text: '', type: '' });
            } else {
                handleEndQuiz(true);
            }
        }, 1500);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') submitAnswer();
    };

    const restartTest = () => {
        setCurrentQuestionIndex(0);
        setUserAnswer('');
        setFeedback({ text: '', type: '' });
        setStats({ correct: 0, incorrect: 0, easy: 0, medium: 0, hard: 0 });
        setTimer(0);
        setIsTimerActive(true);
        setIsFinished(false);
    };

    const calculateIQ = () => {
        const easyWeight = 0.2;
        const mediumWeight = 0.35;
        const hardWeight = 0.45;

        const score = (stats.easy / 10) * easyWeight * 100 +
            (stats.medium / 10) * mediumWeight * 100 +
            (stats.hard / 10) * hardWeight * 100;

        return Math.round(70 + (score * 0.6));
    };

    const getIQLevel = (iq) => {
        if (iq >= 140) return '🐍 Python Master - Genius Level';
        if (iq >= 130) return '⚡ Advanced Pythonista';
        if (iq >= 120) return '🔥 Skilled Python Developer';
        if (iq >= 110) return '✨ Competent Programmer';
        if (iq >= 90) return '📚 Average Python User';
        if (iq >= 80) return '🌱 Learning Pythonista';
        return '💪 Keep Coding!';
    };

    if (isFinished) {
        const iq = calculateIQ();
        return (
            <div className="python-quiz-wrapper">
                <div className="python-quiz-container result-container">
                    <h1 className="result-title">Test Complete!</h1>
                    <div className="iq-level" style={{ marginTop: '-1rem', marginBottom: '2rem', color: '#64748b', fontSize: '1.2rem', fontWeight: 600 }}>
                        {getIQLevel(iq)}
                    </div>

                    <div className="result-stats">
                        <div className="stat-item">
                            <span className="stat-label">Estimated IQ</span>
                            <span className="stat-value" style={{ color: '#8b5cf6' }}>{iq}</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-label">Correct Answers</span>
                            <span className="stat-value">{stats.correct}/{pythonQuestions.length}</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-label">Wrong Attempts</span>
                            <span className="stat-value" style={{ color: '#ef4444' }}>{stats.incorrect}</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-label">Time Taken</span>
                            <span className="stat-value">{formatTime(timer)}</span>
                        </div>
                    </div>

                    <div className="result-actions">
                        <button className="quiz-btn" onClick={restartTest}>Restart Test</button>
                        <button
                            className="quiz-btn"
                            onClick={() => navigate('/python')}
                            style={{
                                background: 'transparent',
                                border: '2px solid #cbd5e1',
                                color: '#475569',
                                boxShadow: 'none'
                            }}
                        >
                            Exit
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    const progress = ((currentQuestionIndex) / pythonQuestions.length) * 100;

    return (
        <div className="python-quiz-wrapper">
            <div className="python-quiz-container">
                <div className="header-controls" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', width: '100%' }}>
                    <div className="timer-display" style={{ background: '#334155', color: '#e2e8f0', padding: '5px 12px', borderRadius: '8px', fontSize: '1.2rem', fontFamily: 'monospace' }}>
                        ⏱ {formatTime(timer)}
                    </div>
                    <button
                        onClick={() => handleEndQuiz(false)}
                        style={{
                            background: '#ef4444',
                            color: 'white',
                            border: 'none',
                            padding: '6px 12px',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontWeight: 'bold'
                        }}
                    >
                        End
                    </button>
                </div>
                <div className="python-logo">🐍</div>
                <h1>Python Challenge</h1>
                <p className="info">Question <span>{currentQuestionIndex + 1}</span> of {pythonQuestions.length}</p>

                <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${progress}%` }}></div>
                </div>

                <div className="question-container">
                    <span className={`difficulty-badge ${currentQuestion.difficulty}`}>
                        {currentQuestion.difficulty.toUpperCase()}
                    </span>
                    <div
                        className="question-text"
                        dangerouslySetInnerHTML={{ __html: currentQuestion.q }}
                    />
                </div>

                <div className="answer-wrapper">
                    <input
                        type="number"
                        className="answer-input"
                        placeholder="Enter your result..."
                        value={userAnswer}
                        onChange={(e) => setUserAnswer(e.target.value)}
                        onKeyPress={handleKeyPress}
                        autoFocus
                    />
                </div>

                <div className={`feedback ${feedback.type}`}>{feedback.text}</div>

                <button className="quiz-btn" onClick={submitAnswer}>Run Code</button>
            </div>
        </div>
    );
}
