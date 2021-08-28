import express from 'express';

import { createFish } from '../controllers/FishesController';

const router = express.Router();

let fishes =[
    
]

router.get('/', (req, res) => {
    res.send(fishes);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.send(fishes.find((fish)=> fish.id === id));
});



router.post('/', createFish);


router.delete('/:id', (req, res) => {
    const { id } = req.params;
    fishes = fishes.filter((fish) => fish.id !== id)
    res.send(`Fish with id ${ id } is deleted from the database.`)
});
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { type, lengthInCentimeters, weightInKilos} = req.body;
    
    const fishToUpdate = fishes.find((fish)=> fish.id === id);
    if (type) fishToUpdate.type = type;
    if (lengthInCentimeters) fishToUpdate.lengthInCentimeters = lengthInCentimeters;
    if (weightInKilos) fishToUpdate.weightInKilos = weightInKilos;
    res.send(`Fish with id ${ id } has been updated.`)
    
});

export default router;