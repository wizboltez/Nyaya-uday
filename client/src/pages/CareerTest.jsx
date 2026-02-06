import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { careerQuestions, careerProfiles } from '../data/careerData';

const CareerTest = () => {
    const { t, i18n } = useTranslation();
    const lang = i18n.language === 'hi' ? 'hi' : 'en';

    const [currentQ, setCurrentQ] = useState(0);
    const [scores, setScores] = useState({ judiciary: 0, criminal_lawyer: 0, corporate_lawyer: 0, prosecutor: 0 });
    const [result, setResult] = useState(null);

    const handleAnswer = (type) => {
        const newScores = { ...scores, [type]: scores[type] + 1 };
        setScores(newScores);

        if (currentQ < careerQuestions.length - 1) {
            setCurrentQ(currentQ + 1);
        } else {
            // Calculate Winner
            const winner = Object.keys(newScores).reduce((a, b) => newScores[a] > newScores[b] ? a : b);
            setResult(winner);
        }
    };

    if (result) {
        const profile = careerProfiles[result];
        return (
            <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                <h1 style={{ color: 'var(--primary-color)' }}>{lang === 'hi' ? 'आपका परिणाम' : 'Your Result'}</h1>
                <div style={{ padding: '2rem', backgroundColor: 'var(--bg-color)', border: '1px solid var(--primary-color)', borderRadius: '8px', marginBottom: '2rem' }}>
                    <h2>{profile.title[lang]}</h2>
                    <p style={{ fontSize: '1.2rem' }}>{profile.desc[lang]}</p>
                </div>

                <h3>{lang === 'hi' ? 'कैरियर तुलना' : 'Career Comparison'}</h3>
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem', color: 'var(--text-color)' }}>
                        <thead>
                            <tr style={{ backgroundColor: 'var(--secondary-color)' }}>
                                <th style={{ padding: '1rem', border: '1px solid #ddd' }}>Role</th>
                                <th style={{ padding: '1rem', border: '1px solid #ddd' }}>Difficulty</th>
                                <th style={{ padding: '1rem', border: '1px solid #ddd' }}>Work-Life Balance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.values(careerProfiles).map((p, idx) => (
                                <tr key={idx} style={{ backgroundColor: p === profile ? 'rgba(26, 115, 232, 0.1)' : 'transparent' }}>
                                    <td style={{ padding: '1rem', border: '1px solid #ddd' }}>{p.title[lang]}</td>
                                    <td style={{ padding: '1rem', border: '1px solid #ddd' }}>{p.difficulty}</td>
                                    <td style={{ padding: '1rem', border: '1px solid #ddd' }}>{p.wlb}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <button onClick={() => window.location.reload()} className="btn btn-primary" style={{ marginTop: '2rem' }}>
                    {lang === 'hi' ? 'फिर से टेस्ट लें' : 'Retake Test'}
                </button>
            </div>
        );
    }

    return (
        <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--primary-color)' }}>
                {lang === 'hi' ? 'व्यक्तित्व और करियर परीक्षण' : 'Personality & Career Test'}
            </h2>

            <div style={{ padding: '2rem', backgroundColor: 'var(--bg-color)', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', border: '1px solid var(--text-color)' }}>
                <h3 style={{ marginBottom: '1.5rem', color: 'var(--text-color)' }}>
                    {currentQ + 1}. {careerQuestions[currentQ].text[lang]}
                </h3>
                <div style={{ display: 'grid', gap: '1rem' }}>
                    {careerQuestions[currentQ].options.map((opt, idx) => (
                        <button
                            key={idx}
                            onClick={() => handleAnswer(opt.type)}
                            className="btn"
                            style={{
                                padding: '1rem',
                                border: '1px solid #ccc',
                                textAlign: 'left',
                                backgroundColor: 'var(--bg-color)',
                                color: 'var(--text-color)',
                                transition: 'transform 0.1s'
                            }}
                            onMouseEnter={e => e.target.style.borderColor = 'var(--primary-color)'}
                            onMouseLeave={e => e.target.style.borderColor = '#ccc'}
                        >
                            {opt.text[lang]}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CareerTest;
