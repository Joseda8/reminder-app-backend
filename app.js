const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const db_mongo = require("./mongo");

const pokemon_list = require("./pokemon_list");

app.get('/', (req, res) => {
    db_mongo.do_query("FIND_ALL", null, (data) => {        
        res.send({
            jose: data[0].counter,
            ana: data[1].counter,
        });
    });
})

app.get('/plus1_jose', (req, res) => {
    db_mongo.do_query("PLUS_JOSE", null, (data) => {
        res.sendStatus(200);
    });
})

app.get('/less1_jose', (req, res) => {
    db_mongo.do_query("LESS_JOSE", null, (data) => {
        res.sendStatus(200);
    });
})

app.get('/plus1_ana', (req, res) => {
    db_mongo.do_query("PLUS_ANA", null, (data) => {
        res.sendStatus(200);
    });
})

app.get('/less1_ana', (req, res) => {
    db_mongo.do_query("LESS_ANA", null, (data) => {
        res.sendStatus(200);
    });
})

app.get('/pokemon', (req, res) => {
    res.send(pokemon_list);
})

const port = process.env.PORT || '5000';
app.listen(port, () => console.log(`Server started on Port ${port}`));
