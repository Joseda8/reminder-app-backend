const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json({limit: '50mb'}));

const db_mongo = require("./mongo");

app.get('/', (req, res) => {
    db_mongo.do_query("FIND_ALL", null, (data) => {
        res.send({
            notes: data
        });
    });
})

app.post("/new_post", (req, res) => {
    const new_post = req.body;
    new_post.date = new_post.date;
    db_mongo.do_query("NEW_NOTE", new_post, (data) => {
        res.send(data);
    });
});

app.post("/delete_post", (req, res) => {
    const post_id = req.body._id;
    db_mongo.do_query("REMOVE_NOTE", post_id, (data) => {
        res.sendStatus(200);
    });
});

const port = process.env.PORT || '5000';
app.listen(port, () => console.log(`Server started on Port ${port}`));
