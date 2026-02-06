import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/AuthContext';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const { t } = useTranslation();
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <nav style={{
            height: 'var(--nav-height)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 2rem',
            backgroundColor: 'var(--bg-color)',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
            <div className="logo" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                <Link to="/" style={{ textDecoration: 'none', color: 'var(--primary-color)' }}>Nyaya-Uday</Link>
            </div>

            <div className="nav-links" style={{ display: 'flex', alignItems: 'center' }}>
                <Link to="/roadmap" style={{ textDecoration: 'none', color: 'var(--text-color)', marginRight: '1rem' }}>
                    {t('explore_roadmap')}
                </Link>
                <Link to="/simulation" style={{ textDecoration: 'none', color: 'var(--text-color)', marginRight: '1rem' }}>
                    {t('simulation_tests')}
                </Link>
                <Link to="/leaderboard" style={{ textDecoration: 'none', color: 'var(--text-color)', marginRight: '1rem' }}>
                    Leaderboard
                </Link>
                <Link to="/careertest" style={{ textDecoration: 'none', color: 'var(--text-color)', marginRight: '1rem' }}>
                    Career Test
                </Link>
                <Link to="/judges" style={{ textDecoration: 'none', color: 'var(--text-color)', marginRight: '1rem' }}>
                    Judges
                </Link>

                {user ? (
                    <>
                        <Link to="/dashboard" style={{ textDecoration: 'none', color: 'var(--text-color)', marginRight: '1rem' }}>
                            Dashboard
                        </Link>
                        <button onClick={handleLogout} className="btn btn-primary">Logout</button>
                    </>
                ) : (
                    <Link to="/login" className="btn btn-primary">Login</Link>
                )}

                <LanguageToggle />
                <ThemeToggle />
            </div>
        </nav>
    );
};

export default Navbar;
