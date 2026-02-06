import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer style={{
            padding: '2rem',
            backgroundColor: '#f1f3f4',
            marginTop: 'auto',
            textAlign: 'center'
        }}>
            <p>© {new Date().getFullYear()} Nyaya-Uday. {t('footer.all_rights_reserved', 'All rights reserved.')}</p>
            <div style={{ marginTop: '1rem' }}>
                <a href="#" style={{ margin: '0 0.5rem', color: '#5f6368' }}>About</a>
                <a href="#" style={{ margin: '0 0.5rem', color: '#5f6368' }}>Privacy Policy</a>
                <a href="#" style={{ margin: '0 0.5rem', color: '#5f6368' }}>Contact</a>
            </div>
            <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#5f6368' }}>
                Made with ❤️ by Team Liquid
            </p>
        </footer>
    );
};

export default Footer;
