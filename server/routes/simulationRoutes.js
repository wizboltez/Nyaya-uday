import express from 'express';
const router = express.Router();
import { submitScore } from '../controllers/simulationController.js';
import { protect } from '../middleware/authMiddleware.js';

router.post('/submit', protect, submitScore);

export default router;
