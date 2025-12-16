import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getMathResults } from '../dataUsers/dataUsers';

export default function MathPage() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setData(getMathResults());
    }, []);

    // Sort by: 1. Level (Desc), 2. Wrong Attempts (Asc), 3. Time (Asc)
    const sortedData = [...data].sort((a, b) => {
        if (b.quizLevel !== a.quizLevel) return b.quizLevel - a.quizLevel;
        if ((a.wrongAttempts || 0) !== (b.wrongAttempts || 0)) return (a.wrongAttempts || 0) - (b.wrongAttempts || 0);
        return a.timeTaken.localeCompare(b.timeTaken);
    });

    return (
        <div className="animate-fade-in">
            <div className="contenar">
                <h2 className="page-title">Math Leaderboard</h2>
                <button
                    className="btne"
                    onClick={() => navigate('/math/start')}
                    style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                    Start
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>


            <div className="glass glass-panel">
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th style={{ width: '60px', background: 'var(--color-periwinkle)' }}>Rank</th>
                                <th style={{ background: 'var(--color-periwinkle)' }}>User ID</th>
                                <th style={{ background: 'var(--color-periwinkle)' }}>Estimated IQ</th>
                                <th style={{ background: 'var(--color-periwinkle)' }}>Quiz Level</th>
                                <th style={{ background: 'var(--color-periwinkle)' }}>Wrong Attempts</th>
                                <th style={{ background: 'var(--color-periwinkle)' }}>Time Taken</th>
                                <th style={{ background: 'var(--color-periwinkle)', textAlign: 'right' }}>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedData.map((user, index) => (
                                <tr key={index}>
                                    <td className={`rank-${index + 1}`}>#{index + 1}</td>
                                    <td>
                                        {user.userId}
                                    </td>
                                    <td style={{ fontWeight: '800', color: '#6a5acd' }}>{user.estimatedIQ || 'N/A'}</td>
                                    <td style={{ fontWeight: 'bold' }}>{user.quizLevel}</td>
                                    <td style={{ color: '#ef4444' }}>{user.wrongAttempts}</td>
                                    <td style={{ fontFamily: 'monospace' }}>{user.timeTaken}</td>
                                    <td style={{ textAlign: 'right', color: '#64748b' }}>{user.date.substring(0, 10)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
