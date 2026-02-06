import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { cases } from '../data/caseData';

const Simulation = () => {
    const { t, i18n } = useTranslation();
    const lang = i18n.language === 'hi' ? 'hi' : 'en';

    return (
        <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--primary-color)' }}>
                {t('simulation_tests', 'Junior Judge Simulations')}
            </h1>
            <div style={{ display: 'grid', gap: '1.5rem' }}>
                {cases.map(c => (
                    <div key={c.id} style={{
                        border: '1px solid var(--text-color)', // Border visible in dark mode
                        borderRadius: '8px',
                        padding: '1.5rem',
                        backgroundColor: 'var(--bg-color)',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                        color: 'var(--text-color)'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                            <h3 style={{ margin: 0 }}>{c.title[lang]}</h3>
                            <span style={{
                                background: c.difficulty === 'Easy' ? '#e6f4ea' : (c.difficulty === 'Medium' ? '#fff3e0' : '#fce8e6'),
                                color: c.difficulty === 'Easy' ? '#1e8e3e' : (c.difficulty === 'Medium' ? '#e65100' : '#c5221f'),
                                padding: '0.25rem 0.5rem',
                                borderRadius: '4px',
                                fontSize: '0.8rem',
                                fontWeight: 'bold'
                            }}>
                                {c.difficulty}
                            </span>
                        </div>
                        <p style={{ opacity: 0.8, marginBottom: '1rem' }}>Category: {c.category}</p>
                        <p style={{ marginBottom: '1rem', fontSize: '0.9rem' }}>
                            {c.passage[lang].substring(0, 100)}...
                        </p>
                        <Link to={`/simulation/${c.id}`} className="btn btn-primary" style={{ textDecoration: 'none', display: 'inline-block' }}>
                            {lang === 'hi' ? 'केस शुरू करें' : 'Start Case'}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Simulation;
