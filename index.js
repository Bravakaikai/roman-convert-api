import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { intToRoman } from './integerToRoman.js'

const app = express();
const port = 3000;

app.use(cors());
// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/:num?', (req, res) => {
    const roman = intToRoman(req.params.num)
    res.send(roman);
});
app.listen(port, () => console.log(`App listening on port ${port}!`))