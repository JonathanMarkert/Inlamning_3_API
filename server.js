import express from 'express';
import fishesRoutes from './routes/Fishes.js'

const app = express();
const PORT = 5000;

app.use('/fishes', fishesRoutes )

app.get('/', (req, res) => {
    console.log('Test');

    res.send('Hello from the homepage');
})

app.listen(PORT, () => console.log(`Server up and running on port: http://localhost:${PORT}`));