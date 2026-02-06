import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { cases } from '../data/caseData';
import { useAuth } from '../context/AuthContext';

const CaseStudy = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();
    const { user } = useAuth();

    // Find case by ID
    const caseIndex = cases.findIndex(c => c.id === parseInt(id));
    const caseData = cases[caseIndex];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);

    // Language Helper
    const lang = i18n.language === 'hi' ? 'hi' : 'en';

    useEffect(() => {
        // Reset state when case ID changes
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false);
        setSelectedOption(null);
        setIsAnswered(false);
    }, [id]);

    if (!caseData) return <div style={{ padding: '2rem' }}>Case not found</div>;

    const handleOptionClick = (index) => {
        if (isAnswered) return;
        setSelectedOption(index);
        setIsAnswered(true);

        if (index === caseData.questions[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }
    };

    const nextQuestion = () => {
        const nextQ = currentQuestion + 1;
        if (nextQ < caseData.questions.length) {
            setCurrentQuestion(nextQ);
            setSelectedOption(null);
            setIsAnswered(false);
        } else {
            setShowScore(true);
        }
    };

    const prevCase = () => {
        if (caseIndex > 0) {
            navigate(`/simulation/${cases[caseIndex - 1].id}`);
        }
    };

    const nextCase = () => {
        if (caseIndex < cases.length - 1) {
            navigate(`/simulation/${cases[caseIndex + 1].id}`);
        }
    };

    const submitResults = async () => {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        if (userInfo && userInfo.token) {
            try {
                await fetch('http://localhost:5000/api/simulation/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${userInfo.token}`
                    },
                    body: JSON.stringify({ caseId: id, score: score })
                });
            } catch (err) {
                console.error("Failed to submit score", err);
            }
        }
    };

    useEffect(() => {
        if (showScore) {
            submitResults();
        }
    }, [showScore]);

    if (showScore) {
        return (
            <div style={{ padding: '2rem', maxWidth: '600px', margin: '2rem auto', textAlign: 'center', color: 'var(--text-color)' }}>
                <h2>{lang === 'hi' ? 'केस पूरा हुआ!' : 'Case Completed!'}</h2>
                <div style={{ fontSize: '4rem', margin: '2rem 0', color: 'var(--primary-color)' }}>
                    {Math.round((score / caseData.questions.length) * 100)}%
                </div>
                <p>{lang === 'hi' ? `आपने ${caseData.questions.length} में से ${score} स्कोर किया` : `You scored ${score} out of ${caseData.questions.length}`}</p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
                    <button onClick={() => navigate('/simulation')} className="btn btn-primary">{lang === 'hi' ? 'सिमुलेशन सूची' : 'Back to Cases'}</button>
                    {caseIndex < cases.length - 1 && (
                        <button onClick={nextCase} className="btn" style={{ border: '1px solid currentColor' }}>{lang === 'hi' ? 'अगला केस' : 'Next Case'}</button>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', color: 'var(--text-color)' }}>
            {/* Case Navigation Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <button onClick={prevCase} disabled={caseIndex === 0} className="btn" style={{ opacity: caseIndex === 0 ? 0.5 : 1 }}>&larr; Prev</button>
                <button onClick={() => navigate('/simulation')} className="btn">List</button>
                <button onClick={nextCase} disabled={caseIndex === cases.length - 1} className="btn" style={{ opacity: caseIndex === cases.length - 1 ? 0.5 : 1 }}>Next &rarr;</button>
            </div>

            <div style={{ marginBottom: '2rem', padding: '1.5rem', background: '#f8f9fa', borderRadius: '8px', lineHeight: '1.8', color: '#333' }}>
                <h2 style={{ marginTop: 0 }}>{caseData.title[lang]}</h2>
                <div style={{ whiteSpace: 'pre-wrap' }}>{caseData.passage[lang]}</div>
            </div>

            <div style={{ marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.9rem', opacity: 0.8 }}>Question {currentQuestion + 1} of {caseData.questions.length}</span>
                <h4>{caseData.questions[currentQuestion].text[lang]}</h4>
            </div>

            <div style={{ display: 'grid', gap: '1rem' }}>
                {caseData.questions[currentQuestion].options[lang].map((option, index) => {
                    let bgColor = 'var(--bg-color)';
                    let borderColor = '#ddd';
                    let textColor = 'var(--text-color)';

                    if (isAnswered) {
                        if (index === caseData.questions[currentQuestion].correctAnswer) {
                            bgColor = '#d4edda'; // Greenish
                            borderColor = '#c3e6cb';
                            textColor = '#155724';
                        } else if (index === selectedOption) {
                            bgColor = '#f8d7da'; // Reddish
                            borderColor = '#f5c6cb';
                            textColor = '#721c24';
                        }
                    }

                    return (
                        <button
                            key={index}
                            onClick={() => handleOptionClick(index)}
                            disabled={isAnswered}
                            style={{
                                padding: '1rem',
                                textAlign: 'left',
                                borderRadius: '8px',
                                border: `1px solid ${borderColor}`,
                                backgroundColor: bgColor,
                                color: textColor,
                                cursor: isAnswered ? 'default' : 'pointer',
                                fontSize: '1rem',
                                transition: 'all 0.2s'
                            }}
                        >
                            {option}
                        </button>
                    );
                })}
            </div>

            {isAnswered && (
                <div style={{ marginTop: '2rem', animation: 'fadeIn 0.5s' }}>
                    <div style={{ marginBottom: '1rem', padding: '1rem', background: 'var(--secondary-color)', borderRadius: '4px', color: 'var(--text-color)' }}>
                        <strong>{lang === 'hi' ? 'स्पष्टीकरण' : 'Explanation'}:</strong> {caseData.questions[currentQuestion].explanation[lang]}
                    </div>
                    <button onClick={nextQuestion} className="btn btn-primary" style={{ float: 'right' }}>
                        {currentQuestion === caseData.questions.length - 1 ? (lang === 'hi' ? 'समाप्त' : 'Finish') : (lang === 'hi' ? 'अगला प्रश्न' : 'Next Question')}
                    </button>
                </div>
            )}
        </div>
    );
};

export default CaseStudy;
