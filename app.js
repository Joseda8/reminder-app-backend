const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const pokemon_list = require("./pokemon_list");

var times_thesis_madalina = 0;

app.get('/', (req, res) => {
    res.send(`${times_thesis_madalina}`);
})

app.get('/plus1', (req, res) => {
    times_thesis_madalina++;
    res.sendStatus(200);
})

app.get('/less1', (req, res) => {
    times_thesis_madalina--
    res.sendStatus(200);
})

app.get('/pokemon', (req, res) => {
    res.send(pokemon_list);
})

const port = process.env.PORT || '5000';
app.listen(port, () => console.log(`Server started on Port ${port}`));
