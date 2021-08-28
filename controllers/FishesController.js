import {v4 as uuidv4} from 'uuid';

export const createFish = (req, res)=> {    
    const fish = req.body;
    fishes.push({ id: uuidv4(),...fish });
    res.send(`Fish of type: ${fish.type} added to database.`);
}