import express from 'express';
import {v4 as uuidv4} from 'uuid';

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


router.post('/', (req, res)=> {    
    const fish = req.body;
    fishes.push({ id: uuidv4(),...fish });
    res.send(`Fish of type: ${fish.type} added to database.`);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    fishes = fishes.filter((fish) => fish.id !== id)
    res.send(`Fish with id ${ id } is deleted from the database.`)
});
router.patch('/:id', (req, res) => {
    
})

export default router;