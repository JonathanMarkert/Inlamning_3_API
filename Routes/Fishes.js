import express from 'express';

import { getFishes, getFishById, createFish, deleteFish, updateFish } from '../controllers/FishesController.js';

const router = express.Router();


router.get('/', getFishes);

router.get('/:id', getFishById);

router.post('/', createFish);

router.delete('/:id', deleteFish);

router.patch('/:id', updateFish);

export default router;