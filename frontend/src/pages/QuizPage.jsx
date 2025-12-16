import { useParams, useNavigate } from 'react-router-dom';

export default function QuizPage() {
    const { topic } = useParams();
    const navigate = useNavigate();
    const isPython = topic === 'python';

    return (
        <div className="animate-fade-in" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '60vh',
            gap: '24px'
        }}>
            <h1 className="page-title" style={{
                color: isPython ? 'var(--accent-secondary)' : 'var(--accent-primary)',
                fontSize: '3rem'
            }}>
                {isPython ? 'Python' : 'Math'} Quiz
            </h1>

            <div className="glass glass-panel" style={{ width: '100%', maxWidth: '600px', textAlign: 'center' }}>
                <p style={{ fontSize: '1.2rem', marginBottom: '32px', color: 'var(--text-secondary)' }}>
                    Ready to test your {isPython ? 'Python programming' : 'mathematical'} skills?
                    <br />
                    The quiz will begin shortly.
                </p>

                <button
                    className="btn"
                    onClick={() => navigate(`/${topic}`)}
                    style={{
                        background: 'var(--bg-secondary)',
                        color: 'var(--text-primary)',
                        marginRight: '1rem'
                    }}
                >
                    Cancel
                </button>

                <button
                    className="btn"
                    style={{
                        background: isPython ? 'var(--accent-secondary)' : 'var(--accent-primary)'
                    }}
                >
                    Begin Quiz
                </button>
            </div>
        </div>
    );
}
