import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageToggle = () => {
    const { i18n } = useTranslation();

    useEffect(() => {
        const savedLang = localStorage.getItem('language');
        if (savedLang) {
            i18n.changeLanguage(savedLang);
        }
    }, [i18n]);

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'hi' : 'en';
        i18n.changeLanguage(newLang);
        localStorage.setItem('language', newLang);
    };

    return (
        <button onClick={toggleLanguage} className="btn" style={{ background: 'transparent', border: '1px solid #ccc', marginLeft: '1rem' }}>
            {i18n.language === 'en' ? 'EN | हिं' : 'हिं | EN'}
        </button>
    );
};

export default LanguageToggle;
