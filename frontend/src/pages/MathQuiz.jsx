import { useState, useEffect } from 'react';
import { mathQuestions } from '../data/mathQuestions';
import { useNavigate } from 'react-router-dom';
import { saveQuizResult } from '../dataUsers/dataUsers';
import './css/MathQuiz.css';

const Shape = ({ type, value, label }) => {
    return (
        <div className="shape-item">
            <div className={`shape-icon shape-${type}`}>
                {type === 'square' && <span style={{ fontSize: '1.2rem' }}>■</span>}
                {type === 'circle' && <span style={{ fontSize: '1.2rem' }}>●</span>}
                {type === 'triangle' && <span style={{ position: 'absolute', bottom: '5px', fontSize: '0.8rem', color: 'white' }}>▲</span>}
                {type === 'cup' && <span style={{ fontSize: '1.5rem' }}>∪</span>}
                {type === 'number' && <span style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#64748b' }}>{label}</span>}
            </div>
            {type !== 'number' && <div className="value-popover">
                {label ? `${label} = ${value}` : value}
            </div>}
        </div>
    );
};

export default function MathQuiz() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [feedbackState, setFeedbackState] = useState('idle'); // idle, correct, incorrect
    const [shake, setShake] = useState(false);
    const [timer, setTimer] = useState(0);
    const [isTimerActive, setIsTimerActive] = useState(true);
    const [showResult, setShowResult] = useState(false);
    const [wrongAnswers, setWrongAnswers] = useState(0);
    const navigate = useNavigate();

    const currentQuestion = mathQuestions[currentIndex];

    // Timer Logic
    useEffect(() => {
        let interval;
        if (isTimerActive && !showResult) {
            interval = setInterval(() => {
                setTimer(prev => prev + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isTimerActive, showResult]);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const calculateIQ = (levels, wrongs, time) => {
        const baseIQ = 80;
        const maxLevelBonus = 60; // Max IQ 140 if perfect
        const levelScore = (levels / mathQuestions.length) * maxLevelBonus;
        const penalty = wrongs * 1.5; // -1.5 IQ per wrong answer

        // Time Bonus: If avg time < 30s per question?
        // Simple: Just penalize long time? Or bonus for speed.
        // Let's stick to Level - Penalty for robustness.

        let calculated = baseIQ + levelScore - penalty;
        return Math.max(Math.round(calculated), 70); // Min 70
    };

    const handleEndQuiz = (completed = false) => {
        setIsTimerActive(false);
        setShowResult(true);

        // Save Result
        const levelsDone = completed ? mathQuestions.length : currentIndex;
        const finalIQ = calculateIQ(levelsDone, wrongAnswers, timer);

        saveQuizResult({
            quizType: 'Math',
            quizLevel: levelsDone,
            estimatedIQ: finalIQ,
            wrongAttempts: wrongAnswers,
            timeTaken: formatTime(timer),
            date: new Date().toISOString().split('T')[0]
        });
    };

    const handleSubmit = () => {
        const numAnswer = parseFloat(userAnswer);
        if (isNaN(numAnswer)) {
            setShake(true);
            setTimeout(() => setShake(false), 400);
            return;
        }

        if (Math.abs(numAnswer - currentQuestion.answer) < 0.01) {
            setFeedbackState('correct');
        } else {
            setFeedbackState('incorrect');
            setWrongAnswers(prev => prev + 1);
            setShake(true);
            setTimeout(() => setShake(false), 400);
        }
    };

    const handleNext = () => {
        setFeedbackState('idle');
        setUserAnswer('');
        if (currentIndex < mathQuestions.length - 1) {
            setCurrentIndex(prev => prev + 1);
        } else {
            // End of quiz naturally
            handleEndQuiz(true);
        }
    };

    const handleRetry = () => {
        setFeedbackState('idle');
        setUserAnswer('');
    };

    const progress = ((currentIndex) / mathQuestions.length) * 100;

    if (showResult) {
        // Recalculate for display (state might not be updated fast enough for handleEndQuiz var, but here state is stable)
        const levelsDone = currentIndex + (feedbackState === 'correct' ? 1 : 0);
        // Note: currentIndex refers to the *current* question. If finished, it checks logic. 
        // Logic in handleNext handles completion.
        // If showResult is true, user either clicked END or Finished.
        // If END, levelsDone = currentIndex.
        // If Finished, levelsDone = length.

        // We need a stable 'iq' to display. calculateIQ is valid.
        // Better: Store result stats in state upon Finish?
        // For now, re-calc is fine.
        const displayIQ = calculateIQ(levelsDone, wrongAnswers, timer);

        return (
            <div className="math-quiz-wrapper">
                <div className="math-quiz-container result-container">
                    <h1 className="result-title">Quiz Completed!</h1>
                    <div className="iq-level" style={{ marginTop: '-1rem', marginBottom: '2rem', color: '#64748b', fontSize: '1.2rem', fontWeight: 600 }}>
                        Estimated IQ: {displayIQ}
                    </div>

                    <div className="result-stats">
                        <div className="stat-item">
                            <span className="stat-label">Estimated IQ</span>
                            <span className="stat-value" style={{ color: '#8b5cf6' }}>{displayIQ}</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-label">Levels Completed</span>
                            <span className="stat-value">{levelsDone} / {mathQuestions.length}</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-label">Wrong Attempts</span>
                            <span className="stat-value" style={{ color: '#ef4444' }}>{wrongAnswers}</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-label">Time Taken</span>
                            <span className="stat-value">{formatTime(timer)}</span>
                        </div>
                    </div>
                    <div className="result-actions">
                        <button className="math-btn" onClick={() => navigate('/math')}>Return to Menu</button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="math-quiz-wrapper">
            <div className="math-quiz-container">
                <div className="math-header">
                    <div className="quiz-controls">
                        <div className="timer-display">⏱ {formatTime(timer)}</div>
                        <button className="end-btn" onClick={() => handleEndQuiz(false)}>End</button>
                    </div>
                    <h1 className="math-title">Math & Python Logic</h1>
                    <div className="title-separator">
                        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
                    </div>
                    <div style={{ textAlign: 'right', fontSize: '0.8rem', color: '#94a3b8', marginTop: '5px' }}>
                        Level {currentIndex + 1} / {mathQuestions.length}
                    </div>
                </div>

                <div className="visual-stage">
                    {currentQuestion.visuals.map((v, i) => {
                        if (v.type === 'cup_container') {
                            return (
                                <div key={i} className="cup-container-wrapper">
                                    <div className="value-popover">Cup</div>
                                    <div className="cup-content">
                                        {v.contents.map((subV, subI) => (
                                            <div key={subI} className="visual-item-wrapper">
                                                <Shape type={subV.type} value={subV.value} label={subV.label} />
                                                {subI < v.contents.length - 1 && <span className="math-operator">{subV.operator || '+'}</span>}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        }
                        if (v.type === 'loop_visual') {
                            return (
                                <div key={i} className="visual-item-wrapper" style={{ gap: '2rem' }}>
                                    {/* Initial Cup */}
                                    <div className="cup-container-wrapper">
                                        <div className="value-popover">{v.initial.label}</div>
                                        <div className="cup-content" style={{ minWidth: '60px', minHeight: '60px' }}>
                                            {v.initial.contents && v.initial.contents.map((subV, subI) => (
                                                <div key={subI} style={{ margin: '-10px -10px' }}>
                                                    <Shape type={subV.type} value={subV.value} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Loop Arrow */}
                                    <div className="loop-arrow-wrapper">
                                        <div className="value-popover" style={{ width: 'max-content' }}>{v.loop.label}</div>
                                        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                                            <path d="M3 3v5h5" />
                                            <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
                                            <path d="M16 21h5v-5" />
                                        </svg>
                                    </div>

                                    {/* Final Cup */}
                                    <div className="cup-container-wrapper">
                                        <div className="value-popover">{v.final.label}</div>
                                        <div className="cup-content">
                                            {v.final.contents.map((subV, subI) => (
                                                <div key={subI} style={{ margin: '-10px -10px' }}>
                                                    <Shape type={subV.type} value={subV.value} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                        if (v.type === 'if_visual') {
                            return (
                                <div key={i} className="visual-item-wrapper" style={{ gap: '0.8rem' }}>
                                    {/* IF Block */}
                                    <div className="cup-container-wrapper if-block">
                                        <div className="value-popover">Condition</div>
                                        <div className="cup-content">
                                            {v.condition.contents.map((subV, subI) => (
                                                <div key={subI} className="visual-item-wrapper">
                                                    <Shape type={subV.type} value={subV.value} label={subV.label} />
                                                    {subI < v.condition.contents.length - 1 && <span className="math-operator small">{subV.operator}</span>}
                                                </div>
                                            ))}
                                            {/* Last item might have operator too if needed, but usually it's between items */}
                                            {v.condition.contents.length > 0 && v.condition.contents[v.condition.contents.length - 1].operator &&
                                                <span className="math-operator small">{v.condition.contents[v.condition.contents.length - 1].operator}</span>
                                            }
                                        </div>
                                        <div className="if-label">if</div>
                                    </div>

                                    {/* Arrow */}
                                    <div className="math-operator" style={{ fontSize: '2rem', color: '#94a3b8' }}>→</div>

                                    {/* Result Expression */}
                                    <div className="visual-item-wrapper">
                                        {v.result.contents.map((subV, subI) => (
                                            <div key={subI} className="visual-item-wrapper">
                                                <Shape type={subV.type} value={subV.value} label={subV.label} />
                                                {subI < v.result.contents.length - 1 && <span className="math-operator small">{subV.operator || subV.nextOperator}</span>}
                                                {/* Handle operator on the item itself for display after */}
                                                {subV.operator && subI === v.result.contents.length - 1 ? <span className="math-operator small">{subV.operator}</span> : null}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        }
                        return (
                            <div key={i} className="visual-item-wrapper">
                                <Shape type={v.type} value={v.value} label={v.label} />
                                {i < currentQuestion.visuals.length - 1 && (
                                    <span className={`math-operator ${(v.operator || '+').length > 1 ? 'text-op' : ''}`}>
                                        {v.operator || '+'}
                                    </span>
                                )}
                            </div>
                        );
                    })}
                    <span className="math-operator">=</span>
                    <div className="result-placeholder">?</div>
                </div>

                <div className="code-area">
                    {currentQuestion.code.map((token, i) => {
                        if (token.type === 'br') return <br key={i} />;
                        if (token.type === 'indent') return <span key={i} style={{ whiteSpace: 'pre' }}>{token.text}</span>;
                        return (
                            <span
                                key={i}
                                className={`token token-${token.type}`}
                            >
                                {token.text}
                                {token.tooltip && (
                                    <div className="token-tooltip">
                                        <h4>{token.text.trim()}</h4>
                                        <p>{token.tooltip}</p>
                                    </div>
                                )}
                            </span>
                        );
                    })}
                </div>

                <div className="interaction-area">
                    <input
                        type="number"
                        className={`math-input ${shake ? 'animate-shake' : ''}`}
                        placeholder="?"
                        value={userAnswer}
                        onChange={(e) => setUserAnswer(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                        disabled={feedbackState === 'correct'}
                    />
                    <button className="math-btn" onClick={handleSubmit}>
                        Check Answer
                    </button>
                    {/* Progress removed from header and could be placed elsewhere if needed, but image didn't show it explicitly. Keeping it simple. */}
                </div>

                {/* Feedback Overlay */}
                <div className={`feedback-overlay ${feedbackState !== 'idle' ? 'show' : ''}`}>
                    <div className="feedback-card">
                        <div className="feedback-icon">
                            {feedbackState === 'correct' ? '🎉' : '❌'}
                        </div>
                        <div className="feedback-text">
                            {feedbackState === 'correct' ? 'Correct!' : 'Try Again'}
                        </div>
                        <div className="feedback-sub">
                            {feedbackState === 'correct'
                                ? 'Great logic! Ready for the next one?'
                                : 'That wasn\'t quite right. Give it another shot!'}
                        </div>
                        {feedbackState === 'correct' ? (
                            <button className="math-btn" onClick={handleNext}>
                                {currentIndex < mathQuestions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                            </button>
                        ) : (
                            <button className="math-btn" style={{ background: '#64748b' }} onClick={handleRetry}>
                                Retry
                            </button>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
}
