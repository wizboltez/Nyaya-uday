import React from 'react';
import { useTranslation } from 'react-i18next';
import { judges } from '../data/judgesData';

const Judges = () => {
    const { t, i18n } = useTranslation();
    const lang = i18n.language === 'hi' ? 'hi' : 'en';

    return (
        <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--primary-color)' }}>
                {lang === 'hi' ? 'प्रेरक न्यायाधीश' : 'Inspirational Judges'}
            </h1>

            {judges.map(judge => (
                <div key={judge.id} style={{
                    marginBottom: '3rem',
                    backgroundColor: 'var(--bg-color)',
                    padding: '2rem',
                    borderRadius: '12px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    border: '1px solid var(--text-color)'
                }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '2rem' }}>
                        <div style={{ width: '150px', height: '150px', borderRadius: '50%', backgroundColor: '#eee', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                            {/* Placeholder for image if authentic URL fails or for demo */}
                            <span style={{ fontSize: '3rem' }}>⚖️</span>
                        </div>
                        <h2 style={{ margin: '0.5rem 0' }}>{judge.name[lang]}</h2>
                        <p style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>{judge.role}</p>
                        <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>Born: {judge.dob} in {judge.bornIn}</p>
                        <p style={{ fontSize: '0.9rem', fontStyle: 'italic' }}>{judge.education}</p>
                    </div>

                    <h3 style={{ borderBottom: '2px solid var(--secondary-color)', paddingBottom: '0.5rem' }}>Top 5 Cases</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {judge.cases.map((c, i) => (
                            <li key={i} style={{ marginBottom: '1rem', padding: '1rem', backgroundColor: 'var(--secondary-color)', borderRadius: '8px', color: 'var(--text-color)' }}>
                                <strong style={{ display: 'block', fontSize: '1.1rem' }}>{c.title[lang]}</strong>
                                <span style={{ opacity: 0.9 }}>{c.desc[lang]}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Judges;
