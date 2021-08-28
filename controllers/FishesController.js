import {v4 as uuidv4} from 'uuid';

export const getFishes = (req, res) => {
    res.send(fishes);
};

export const getFishById =  (req, res) => {
    const { id } = req.params;
    res.send(fishes.find((fish)=> fish.id === id));
};

export const createFish = (req, res)=> {    
    const fish = req.body;
    fishes.push({ id: uuidv4(),...fish });
    res.send(`Fish of type: ${fish.type} added to database.`);
};

export const deleteFish = (req, res) => {
    const { id } = req.params;
    fishes = fishes.filter((fish) => fish.id !== id)
    res.send(`Fish with id ${ id } is deleted from the database.`)
};

export const updateFish = (req, res) => {
    const { id } = req.params;
    const { type, lengthInCentimeters, weightInKilos} = req.body;
    
    const fishToUpdate = fishes.find((fish)=> fish.id === id);
    if (type) fishToUpdate.type = type;
    if (lengthInCentimeters) fishToUpdate.lengthInCentimeters = lengthInCentimeters;
    if (weightInKilos) fishToUpdate.weightInKilos = weightInKilos;
    res.send(`Fish with id ${ id } has been updated.`)
    
};