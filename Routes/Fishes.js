import express from 'express';
import {v4 as uuidv4} from 'uuid';

const router = express.Router();

const fishes =[
    
]

router.get('/', (req, res) => {
    res.send(fishes);
})

router.post('/', (req, res)=> {    
    const fish = req.body;
    fishes.push({ id: uuidv4(),...fish })
    res.send(`Fish of type: ${fish.type} added to database.`)
})

export default router;