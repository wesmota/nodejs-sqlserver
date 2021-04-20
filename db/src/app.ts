import express from 'express'
import * as bodyParser from 'body-parser'

const app = express();

app.get('/', (req, res) => {
    res.send("Hello");
});

app.listen(5000, () => console.log("Server running."));