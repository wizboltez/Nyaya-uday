import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getRoadmap, INDIAN_STATES, EDUCATION_LEVELS, ROLES } from '../data/roadmapData';
import Modal from '../components/Modal';

const Roadmap = () => {
    const { t } = useTranslation();
    const [state, setState] = useState(INDIAN_STATES[0]);
    const [education, setEducation] = useState(EDUCATION_LEVELS[0]);
    const [role, setRole] = useState(ROLES[0]);
    const [steps, setSteps] = useState([]);
    const [selectedStep, setSelectedStep] = useState(null);

    useEffect(() => {
        const generatedSteps = getRoadmap(state, education, role, t);
        setSteps(generatedSteps);
    }, [state, education, role, t]);

    return (
        <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '1rem', color: 'var(--primary-color)' }}>
                {t('roadmap.title', 'Judicial Career Roadmap')}
            </h1>

            {/* Selectors */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
                marginBottom: '3rem',
                backgroundColor: 'var(--bg-color)',
                padding: '1.5rem',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                border: '1px solid var(--text-color)' // Border for visibility in dark mode
            }}>
                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Select State</label>
                    <select
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc', backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}
                    >
                        {INDIAN_STATES.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                </div>
                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Current Education</label>
                    <select
                        value={education}
                        onChange={(e) => setEducation(e.target.value)}
                        style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc', backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}
                    >
                        {EDUCATION_LEVELS.map(e => <option key={e} value={e}>{e}</option>)}
                    </select>
                </div>
                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Career Goal</label>
                    <select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc', backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}
                    >
                        {ROLES.map(r => <option key={r} value={r}>{r}</option>)}
                    </select>
                </div>
            </div>

            <p style={{ textAlign: 'center', marginBottom: '3rem', color: '#666' }}>
                {t('roadmap.click_for_details', 'Click on any step to view details')}
            </p>

            <div className="roadmap-container" style={{ position: 'relative', paddingLeft: '2rem' }}>
                {/* Vertical Line */}
                <div style={{
                    position: 'absolute',
                    left: '20px',
                    top: '0',
                    bottom: '0',
                    width: '4px',
                    backgroundColor: 'var(--primary-color)',
                    zIndex: 0
                }}></div>

                {steps.map((step, index) => (
                    <div
                        key={step.id}
                        className="roadmap-step"
                        onClick={() => setSelectedStep(step)}
                        style={{
                            position: 'relative',
                            marginBottom: '2rem',
                            cursor: 'pointer',
                            zIndex: 1,
                            backgroundColor: 'var(--bg-color)',
                            padding: '1rem',
                            borderRadius: '8px',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                            border: '1px solid #eee',
                            marginLeft: '2rem',
                            display: 'flex',
                            alignItems: 'center',
                            transition: 'transform 0.2s',
                            color: 'var(--text-color)' // Ensure text adapts
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(5px)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
                    >
                        {/* Circle Indicator */}
                        <div style={{
                            position: 'absolute',
                            left: '-2.5rem',
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--primary-color)',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 'bold',
                            border: '4px solid var(--bg-color)'
                        }}>
                            {index + 1}
                        </div>

                        <div style={{ fontSize: '2rem', marginRight: '1rem' }}>{step.icon}</div>
                        <div>
                            <h3 style={{ margin: '0 0 0.5rem 0' }}>{step.title}</h3>
                            <p style={{ margin: 0, opacity: 0.8, fontSize: '0.9rem' }}>
                                {step.desc.substring(0, 80)}...
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <Modal
                isOpen={!!selectedStep}
                onClose={() => setSelectedStep(null)}
                title={selectedStep ? selectedStep.title : ''}
            >
                {selectedStep && (
                    <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'black' }}> {/* Hardcode black for modal text if modal bg is white */}
                        {selectedStep.desc}
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default Roadmap;
