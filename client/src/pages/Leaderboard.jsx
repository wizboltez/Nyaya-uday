import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

const Leaderboard = () => {
    const { t } = useTranslation();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLeaderboard = async () => {
            try {
                const { data } = await axios.get('/api/users/leaderboard');
                setUsers(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching leaderboard", error);
                setLoading(false);
            }
        };

        fetchLeaderboard();
    }, []);

    if (loading) return <div style={{ textAlign: 'center', padding: '2rem' }}>Loading Leaderboard...</div>;

    return (
        <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ textAlign: 'center', color: 'var(--primary-color)', marginBottom: '2rem' }}>Global Leaderboard 🏆</h1>

            <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'var(--bg-color)', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                    <thead style={{ backgroundColor: 'var(--primary-color)', color: 'white' }}>
                        <tr>
                            <th style={{ padding: '1rem', textAlign: 'left' }}>Rank</th>
                            <th style={{ padding: '1rem', textAlign: 'left' }}>Name</th>
                            <th style={{ padding: '1rem', textAlign: 'left' }}>State</th>
                            <th style={{ padding: '1rem', textAlign: 'center' }}>Tests</th>
                            <th style={{ padding: '1rem', textAlign: 'right' }}>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id} style={{ borderBottom: '1px solid #eee' }}>
                                <td style={{ padding: '1rem', fontWeight: 'bold' }}>#{index + 1}</td>
                                <td style={{ padding: '1rem' }}>
                                    {user.name}
                                    {index === 0 && ' 👑'}
                                </td>
                                <td style={{ padding: '1rem' }}>{user.state}</td>
                                <td style={{ padding: '1rem', textAlign: 'center' }}>{user.testsTaken}</td>
                                <td style={{ padding: '1rem', textAlign: 'right', fontWeight: 'bold' }}>{user.totalScore}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Leaderboard;
