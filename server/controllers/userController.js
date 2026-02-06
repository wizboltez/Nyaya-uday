import User from '../models/User.js';

// @desc    Get top users for leaderboard
// @route   GET /api/users/leaderboard
// @access  Public
const getLeaderboard = async (req, res) => {
    try {
        // Aggregate scores from testHistory to get total score
        // Or if we stored a totalScore field. We didn't. So we calculate it.
        // Actually, prompt says "Judicial Aptitude Score: Aggregate score across all attempted tests".

        // We can fetch users and sort by calculated score effectively.
        // For simplicity efficiently, we might want to store total score in User model in future.
        // For now, let's fetch all users (limit 100) and sort in JS or use aggregation. 
        // Aggregation is better.

        const leaderboard = await User.aggregate([
            {
                $project: {
                    name: 1,
                    state: 1,
                    badges: 1,
                    totalScore: {
                        $sum: "$testHistory.score"
                    },
                    testsTaken: { $size: "$testHistory" }
                }
            },
            { $sort: { totalScore: -1 } },
            { $limit: 100 }
        ]);

        res.json(leaderboard);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

export { getLeaderboard };
