import User from '../models/User.js';

// @desc    Submit test score
// @route   POST /api/simulation/submit
// @access  Private
const submitScore = async (req, res) => {
    const { caseId, score } = req.body;

    const user = await User.findById(req.user._id);

    if (user) {
        const newScore = {
            caseId,
            score,
            dateTaken: Date.now()
        };

        user.testHistory.push(newScore);

        // Check for badges
        // Simple logic: If score is 5/5 (assuming 5 qs), give "Legal Eagle" badge if not already present
        // You can expand this logic based on total score or specific achievements
        const maxScore = 5; // Assuming 5 questions
        if (score === maxScore) {
            const badgeExists = user.badges.find(b => b.name === 'Legal Eagle');
            if (!badgeExists) {
                user.badges.push({ name: 'Legal Eagle' });
            }
        }

        // First test badge
        if (user.testHistory.length === 1) {
            user.badges.push({ name: 'First Steps' });
        }

        await user.save();

        res.json({
            testHistory: user.testHistory,
            badges: user.badges
        });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
};

export { submitScore };
