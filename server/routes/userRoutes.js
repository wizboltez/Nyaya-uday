import express from 'express';
const router = express.Router();
import { getLeaderboard } from '../controllers/userController.js';

router.get('/leaderboard', getLeaderboard);

export default router;
