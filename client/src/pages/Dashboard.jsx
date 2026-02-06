import React, { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Dashboard = () => {
    const { user, logout, loading } = useAuth();
    const navigate = useNavigate();
    const { t } = useTranslation();

    useEffect(() => {
        if (!loading && !user) {
            navigate('/login');
        }
    }, [user, loading, navigate]);

    if (loading || !user) return <div>Loading...</div>;

    return (
        <div className="dashboard-container" style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h2>Welcome, {user.name}</h2>
                <button onClick={logout} className="btn" style={{ border: '1px solid #ccc' }}>Logout</button>
            </header>

            <div className="profile-section" style={{ background: '#f8f9fa', padding: '1.5rem', borderRadius: '8px', marginBottom: '2rem' }}>
                <h3>Profile Details</h3>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>State:</strong> {user.state}</p>
                <p><strong>Education:</strong> {user.educationLevel}</p>
            </div>

            <div className="stats-section">
                <h3>Your Progress</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
                    <div className="stat-card" style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '8px', textAlign: 'center' }}>
                        <h4>Tests Taken</h4>
                        <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{user.testHistory?.length || 0}</p>
                    </div>
                    <div className="stat-card" style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '8px', textAlign: 'center' }}>
                        <h4>Badges Earned</h4>
                        <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{user.badges?.length || 0}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
