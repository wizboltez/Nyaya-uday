import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Roadmap from './pages/Roadmap';
import Simulation from './pages/Simulation';
import CaseStudy from './pages/CaseStudy';
import Leaderboard from './pages/Leaderboard';
import CareerTest from './pages/CareerTest';
import Judges from './pages/Judges';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import VoiceAssistant from './components/VoiceAssistant';

// Placeholder Pages
const Home = () => {
    const { t } = useTranslation();
    return (
        <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
            <h1 style={{ fontSize: '2.5rem', color: 'var(--primary-color)' }}>{t('welcome', 'Nyaya-Uday')}</h1>
            <p style={{ fontSize: '1.2rem', color: '#666' }}>{t('tagline', 'Judicial Career Discovery')}</p>
            <div style={{ marginTop: '2rem' }}>
                <a href="/signup" className="btn btn-primary" style={{ textDecoration: 'none', marginRight: '1rem', fontSize: '1.1rem' }}>Get Started</a>
                <a href="/login" className="btn" style={{ textDecoration: 'none', border: '1px solid #ccc', fontSize: '1.1rem' }}>Login</a>
            </div>
        </div>
    )
};

function App() {
    const { t } = useTranslation();

    return (
        <Router>
            <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Navbar />
                <main style={{ flex: 1 }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/roadmap" element={<Roadmap />} />
                        <Route path="/simulation" element={<Simulation />} />
                        <Route path="/simulation/:id" element={<CaseStudy />} />
                        <Route path="/leaderboard" element={<Leaderboard />} />
                        <Route path="/careertest" element={<CareerTest />} />
                        <Route path="/judges" element={<Judges />} />
                    </Routes>
                </main>
                <Footer />
                <VoiceAssistant />
            </div>
        </Router>
    );
}

export default App;
