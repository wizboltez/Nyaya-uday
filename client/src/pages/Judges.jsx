import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { judges } from '../data/judgesData';

const Judges = () => {
    const { t, i18n } = useTranslation();
    const lang = i18n.language === 'hi' ? 'hi' : 'en';
    const [selectedJudge, setSelectedJudge] = useState(null);
    const [selectedCase, setSelectedCase] = useState(null);

    const openJudgeModal = (judge) => {
        setSelectedJudge(judge);
        setSelectedCase(null);
    };

    const openCaseModal = (caseData) => {
        setSelectedCase(caseData);
    };

    const closeModal = () => {
        setSelectedJudge(null);
        setSelectedCase(null);
    };

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Lora:ital,wght@0,400;0,500;0,600;1,400&display=swap');

                .judges-container {
                    min-height: 100vh;
                    background: #ffffff;
                    padding: 4rem 2rem;
                    position: relative;
                    overflow-x: hidden;
                }

                .judges-container::before {
                    content: '';
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-image: none;
                    pointer-events: none;
                    z-index: 0;
                    display: none;
                }

                .judges-content {
                    max-width: 1400px;
                    margin: 0 auto;
                    position: relative;
                    z-index: 1;
                }

                .page-title {
                    font-family: 'Cinzel', serif;
                    font-size: clamp(2.5rem, 5vw, 4rem);
                    font-weight: 700;
                    text-align: center;
                    margin-bottom: 1rem;
                    color: #0055a4;
                    letter-spacing: 2px;
                    text-shadow: 0 2px 10px rgba(0, 85, 164, 0.15);
                    animation: titleGlow 3s ease-in-out infinite;
                }

                @keyframes titleGlow {
                    0%, 100% { filter: drop-shadow(0 0 10px rgba(0, 85, 164, 0.3)); }
                    50% { filter: drop-shadow(0 0 20px rgba(0, 85, 164, 0.5)); }
                }

                .page-subtitle {
                    font-family: 'Lora', serif;
                    font-size: 1.2rem;
                    text-align: center;
                    color: #333333;
                    margin-bottom: 4rem;
                    font-style: italic;
                }

                .judges-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                    gap: 2.5rem;
                    margin-bottom: 4rem;
                }

                .judge-card {
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(10px);
                    border-radius: 20px;
                    padding: 2.5rem 2rem;
                    cursor: pointer;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    border: 2px solid #0055a4;
                    position: relative;
                    overflow: hidden;
                    box-shadow: 0 4px 15px rgba(0, 85, 164, 0.1);
                }

                .judge-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 4px;
                    background: linear-gradient(90deg, #0055a4, #0078d4, #0055a4);
                    transform: scaleX(0);
                    transform-origin: left;
                    transition: transform 0.4s ease;
                }

                .judge-card:hover::before {
                    transform: scaleX(1);
                }

                .judge-card:hover {
                    transform: translateY(-10px);
                    border-color: #0078d4;
                    box-shadow: 0 20px 60px rgba(0, 85, 164, 0.25);
                    background: #f8fbff;
                }

                .judge-avatar {
                    width: 140px;
                    height: 140px;
                    margin: 0 auto 1.5rem;
                    border-radius: 50%;
                    background: linear-gradient(135deg, #0055a4 0%, #0078d4 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 4rem;
                    box-shadow: 0 10px 30px rgba(0, 85, 164, 0.3);
                    position: relative;
                    transition: transform 0.4s ease;
                }
                .judge-avatar img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 50%;
                }

                .judge-card:hover .judge-avatar {
                    transform: scale(1.1) rotate(5deg);
                }

                .judge-name {
                    font-family: 'Cinzel', serif;
                    font-size: 1.6rem;
                    font-weight: 600;
                    text-align: center;
                    color: #0055a4;
                    margin-bottom: 0.5rem;
                }

                .judge-role {
                    font-family: 'Lora', serif;
                    text-align: center;
                    color: #0078d4;
                    font-size: 1rem;
                    margin-bottom: 0.5rem;
                    font-weight: 500;
                }

                .judge-tenure {
                    font-family: 'Lora', serif;
                    text-align: center;
                    color: #666666;
                    font-size: 0.9rem;
                    margin-bottom: 1.5rem;
                }

                .judge-bio-preview {
                    font-family: 'Lora', serif;
                    color: #555555;
                    font-size: 0.95rem;
                    line-height: 1.6;
                    text-align: center;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    margin-bottom: 1.5rem;
                }

                .view-details-btn {
                    font-family: 'Cinzel', serif;
                    background: linear-gradient(135deg, #0055a4 0%, #0078d4 100%);
                    color: #ffffff;
                    border: none;
                    padding: 0.8rem 2rem;
                    border-radius: 30px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    display: block;
                    margin: 0 auto;
                    font-size: 0.95rem;
                    letter-spacing: 1px;
                }

                .view-details-btn:hover {
                    transform: scale(1.05);
                    box-shadow: 0 10px 30px rgba(0, 85, 164, 0.4);
                }

                /* Modal Styles */
                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.85);
                    backdrop-filter: blur(8px);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 1000;
                    padding: 2rem;
                    animation: fadeIn 0.3s ease;
                    overflow-y: auto;
                }

                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                .modal-content {
                    background: #ffffff;
                    border-radius: 24px;
                    max-width: 900px;
                    width: 100%;
                    max-height: 90vh;
                    overflow-y: auto;
                    position: relative;
                    border: 2px solid #0055a4;
                    box-shadow: 0 30px 80px rgba(0, 85, 164, 0.2);
                    animation: slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }

                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(50px) scale(0.9);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }

                .modal-header {
                    background: linear-gradient(135deg, rgba(0, 85, 164, 0.08) 0%, rgba(0, 120, 212, 0.05) 100%);
                    padding: 1.5rem 2rem 1rem;
                    border-bottom: 2px solid #0055a4;
                    position: sticky;
                    top: 0;
                    z-index: 10;
                    backdrop-filter: blur(10px);
                }

                .close-btn {
                    position: absolute;
                    top: 1.5rem;
                    right: 1.5rem;
                    background: rgba(0, 85, 164, 0.1);
                    border: 1px solid rgba(0, 85, 164, 0.3);
                    color: #0055a4;
                    font-size: 1.8rem;
                    width: 45px;
                    height: 45px;
                    border-radius: 50%;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                    line-height: 1;
                }

                .close-btn:hover {
                    background: rgba(0, 85, 164, 0.2);
                    transform: rotate(90deg);
                }

                .modal-judge-name {
                    font-family: 'Cinzel', serif;
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #0055a4;
                    margin-bottom: 0.3rem;
                    text-align: center;
                }

                .modal-judge-role {
                    font-family: 'Lora', serif;
                    font-size: 1.2rem;
                    color: #0078d4;
                    text-align: center;
                    margin-bottom: 0.3rem;
                }

                .modal-judge-details {
                    font-family: 'Lora', serif;
                    color: #555555;
                    text-align: center;
                    font-size: 0.95rem;
                    line-height: 1.4;
                }

                .modal-body {
                    padding: 2.5rem 2rem;
                }

                .section-title {
                    font-family: 'Cinzel', serif;
                    font-size: 1.6rem;
                    color: #0055a4;
                    margin-bottom: 1.5rem;
                    padding-bottom: 0.8rem;
                    border-bottom: 2px solid #0055a4;
                    display: flex;
                    align-items: center;
                    gap: 0.8rem;
                }

                .section-title::before {
                    content: '⚖';
                    font-size: 1.4rem;
                }

                .biography-text {
                    font-family: 'Lora', serif;
                    color: #333333;
                    font-size: 1.05rem;
                    line-height: 1.8;
                    margin-bottom: 2.5rem;
                    text-align: justify;
                }

                .cases-grid {
                    display: grid;
                    gap: 1.5rem;
                }

                .case-card {
                    background: linear-gradient(135deg, rgba(0, 85, 164, 0.08) 0%, rgba(0, 120, 212, 0.05) 100%);
                    border: 1px solid #0055a4;
                    border-radius: 16px;
                    padding: 1.8rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                }

                .case-card::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 0;
                    bottom: 0;
                    width: 4px;
                    background: linear-gradient(180deg, #0055a4, #0078d4);
                    transform: scaleY(0);
                    transition: transform 0.3s ease;
                }

                .case-card:hover::before {
                    transform: scaleY(1);
                }

                .case-card:hover {
                    background: linear-gradient(135deg, rgba(0, 85, 164, 0.15) 0%, rgba(0, 120, 212, 0.1) 100%);
                    border-color: #0078d4;
                    transform: translateX(5px);
                }

                .case-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    margin-bottom: 0.8rem;
                    gap: 1rem;
                }

                .case-title {
                    font-family: 'Cinzel', serif;
                    font-size: 1.2rem;
                    font-weight: 600;
                    color: #0055a4;
                    flex: 1;
                }

                .case-year {
                    font-family: 'Lora', serif;
                    background: rgba(0, 85, 164, 0.15);
                    color: #0055a4;
                    padding: 0.3rem 0.8rem;
                    border-radius: 20px;
                    font-size: 0.85rem;
                    font-weight: 600;
                    white-space: nowrap;
                }

                .case-desc {
                    font-family: 'Lora', serif;
                    color: #555555;
                    font-size: 0.95rem;
                    line-height: 1.7;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                .read-more {
                    font-family: 'Cinzel', serif;
                    color: #0055a4;
                    font-size: 0.9rem;
                    margin-top: 0.8rem;
                    font-weight: 600;
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .read-more::after {
                    content: '→';
                    transition: transform 0.3s ease;
                }

                .case-card:hover .read-more::after {
                    transform: translateX(5px);
                }

                /* Case Detail Modal */
                .case-modal-content {
                    background: #ffffff;
                    border-radius: 24px;
                    max-width: 800px;
                    width: 100%;
                    max-height: 90vh;
                    overflow-y: auto;
                    position: relative;
                    border: 2px solid #0055a4;
                    box-shadow: 0 30px 80px rgba(0, 85, 164, 0.2);
                    animation: slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .case-modal-header {
                    background: linear-gradient(135deg, rgba(0, 85, 164, 0.08) 0%, rgba(0, 120, 212, 0.05) 100%);
                    padding: 2.5rem 2rem;
                    border-bottom: 2px solid #0055a4;
                }

                .case-modal-title {
                    font-family: 'Cinzel', serif;
                    font-size: 1.8rem;
                    font-weight: 700;
                    color: #0055a4;
                    margin-bottom: 1rem;
                    line-height: 1.4;
                }

                .case-modal-body {
                    padding: 2.5rem 2rem;
                }

                .case-detail-section {
                    margin-bottom: 2rem;
                }

                .case-detail-label {
                    font-family: 'Cinzel', serif;
                    color: #0055a4;
                    font-size: 1.1rem;
                    margin-bottom: 0.8rem;
                    font-weight: 600;
                }

                .case-detail-text {
                    font-family: 'Lora', serif;
                    color: #333333;
                    font-size: 1.05rem;
                    line-height: 1.9;
                    text-align: justify;
                }

                .impact-badge {
                    background: linear-gradient(135deg, rgba(0, 85, 164, 0.12) 0%, rgba(0, 120, 212, 0.08) 100%);
                    border: 1px solid #0055a4;
                    border-radius: 12px;
                    padding: 1.5rem;
                    margin-top: 2rem;
                }

                .impact-badge-title {
                    font-family: 'Cinzel', serif;
                    color: #0055a4;
                    font-size: 1rem;
                    margin-bottom: 0.8rem;
                    font-weight: 600;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .impact-badge-title::before {
                    content: '★';
                    font-size: 1.2rem;
                }

                /* Scrollbar Styles */
                .modal-content::-webkit-scrollbar,
                .case-modal-content::-webkit-scrollbar {
                    width: 8px;
                }

                .modal-content::-webkit-scrollbar-track,
                .case-modal-content::-webkit-scrollbar-track {
                    background: rgba(0, 85, 164, 0.1);
                    border-radius: 10px;
                }

                .modal-content::-webkit-scrollbar-thumb,
                .case-modal-content::-webkit-scrollbar-thumb {
                    background: linear-gradient(180deg, #0055a4, #0078d4);
                    border-radius: 10px;
                }

                /* Responsive */
                @media (max-width: 768px) {
                    .judges-container {
                        padding: 2rem 1rem;
                    }

                    .page-title {
                        font-size: 2rem;
                    }

                    .judges-grid {
                        grid-template-columns: 1fr;
                        gap: 2rem;
                    }

                    .modal-overlay {
                        padding: 1rem;
                    }

                    .modal-judge-name {
                        font-size: 1.6rem;
                    }

                    .case-modal-title {
                        font-size: 1.4rem;
                    }
                }
            `}</style>

            <div className="judges-container">
                <div className="judges-content">
                    <h1 className="page-title">
                        {lang === 'hi' ? 'प्रेरक न्यायाधीश' : 'Inspirational Judges'}
                    </h1>
                    <p className="page-subtitle">
                        {lang === 'hi' 
                            ? 'भारतीय न्यायपालिका के स्तंभ और संवैधानिक मूल्यों के रक्षक' 
                            : 'Pillars of Indian Judiciary and Guardians of Constitutional Values'}
                    </p>

                    <div className="judges-grid">
                        {judges.map((judge) => (
                            <div 
                                key={judge.id} 
                                className="judge-card"
                                onClick={() => openJudgeModal(judge)}
                            >
                                <div className="judge-avatar">
                                {judge.image ? (
                                    <img
                                    src={judge.image}
                                    alt={judge.name[lang]}
                                    className="judge-avatar-img"
                                    onError={(e) => {
                                        e.target.style.display = "none";
                                    }}
                                    />
                                ) : (
                                    <span>⚖️</span>
                                )}
                                </div>

                                <h2 className="judge-name">{judge.name[lang]}</h2>
                                <p className="judge-role">
                                    {typeof judge.role === 'object' ? judge.role[lang] : judge.role}
                                </p>
                                <p className="judge-tenure">
                                    {typeof judge.tenure === 'object' ? judge.tenure[lang] : judge.tenure}
                                </p>
                                <p className="judge-bio-preview">
                                    {judge.biography[lang]}
                                </p>
                                <button className="view-details-btn">
                                    {lang === 'hi' ? 'विवरण देखें' : 'VIEW DETAILS'}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Judge Detail Modal */}
                {selectedJudge && !selectedCase && (
                    <div className="modal-overlay" onClick={closeModal}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <div className="modal-header">
                                <button className="close-btn" onClick={closeModal}>×</button>
                                <h2 className="modal-judge-name">{selectedJudge.name[lang]}</h2>
                                <p className="modal-judge-role">
                                    {typeof selectedJudge.role === 'object' ? selectedJudge.role[lang] : selectedJudge.role}
                                </p>
                                <div className="modal-judge-details">
                                    <div>{lang === 'hi' ? 'जन्म' : 'Born'}: {selectedJudge.dob} {lang === 'hi' ? 'में' : 'in'} {typeof selectedJudge.bornIn === 'object' ? selectedJudge.bornIn[lang] : selectedJudge.bornIn}</div>
                                    <div>{lang === 'hi' ? 'शिक्षा' : 'Education'}: {selectedJudge.education}</div>
                                    <div>{lang === 'hi' ? 'कार्यकाल' : 'Tenure'}: {typeof selectedJudge.tenure === 'object' ? selectedJudge.tenure[lang] : selectedJudge.tenure}</div>
                                </div>
                            </div>

                            <div className="modal-body">
                                <h3 className="section-title">
                                    {lang === 'hi' ? 'जीवनी' : 'Biography'}
                                </h3>
                                <p className="biography-text">
                                    {selectedJudge.biography[lang]}
                                </p>

                                <h3 className="section-title">
                                    {lang === 'hi' ? 'शीर्ष 5 ऐतिहासिक मामले' : 'Top 5 Landmark Cases'}
                                </h3>
                                <div className="cases-grid">
                                    {selectedJudge.cases.map((caseData, index) => (
                                        <div 
                                            key={index} 
                                            className="case-card"
                                            onClick={() => openCaseModal(caseData)}
                                        >
                                            <div className="case-header">
                                                <h4 className="case-title">{caseData.title[lang]}</h4>
                                                <span className="case-year">{caseData.year}</span>
                                            </div>
                                            <p className="case-desc">{caseData.desc[lang]}</p>
                                            <span className="read-more">
                                                {lang === 'hi' ? 'पूरा विवरण पढ़ें' : 'Read Full Details'}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Case Detail Modal */}
                {selectedCase && (
                    <div className="modal-overlay" onClick={closeModal}>
                        <div className="case-modal-content" onClick={(e) => e.stopPropagation()}>
                            <div className="case-modal-header">
                                <button className="close-btn" onClick={closeModal}>×</button>
                                <h2 className="case-modal-title">{selectedCase.title[lang]}</h2>
                                <span className="case-year" style={{ display: 'inline-block', marginTop: '0.5rem' }}>
                                    {selectedCase.year}
                                </span>
                            </div>

                            <div className="case-modal-body">
                                <div className="case-detail-section">
                                    <h3 className="case-detail-label">
                                        {lang === 'hi' ? 'मामले का विवरण' : 'Case Details'}
                                    </h3>
                                    <p className="case-detail-text">
                                        {selectedCase.desc[lang]}
                                    </p>
                                </div>

                                {selectedCase.impact && (
                                    <div className="impact-badge">
                                        <h4 className="impact-badge-title">
                                            {lang === 'hi' ? 'प्रभाव और महत्व' : 'Impact & Significance'}
                                        </h4>
                                        <p className="case-detail-text">
                                            {selectedCase.impact[lang]}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Judges;