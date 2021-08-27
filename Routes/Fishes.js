import express from 'express';

const router = express.Router();

const fishes =[
    {
        Id: 0,
        type: "Pike",
        length: "110cm",
        weight: "10,5kg"
    },
    {
        Id: 1,
        type: "Perch",
        length: "48cm",
        weight: "1,5kg"
    }
]

router.get('/', (req, res) => {
    console.log(fishes);
    
    res.send(fishes);
})

router.post('/', (req, res)=> {
    console.log('Post Route reached');

    res.send('Post Route reached');
})

export default router;