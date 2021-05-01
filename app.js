const express = require('express');
const app = express();
const pokemon_list = require("./pokemon_list");

app.get('/pokemon', (req, res) => {
    res.send(pokemon_list);
})

const port = process.env.PORT || '5000';
app.listen(port, () => console.log(`Server started on Port ${port}`));
