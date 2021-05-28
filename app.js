const express = require('express');
const connDB = require('./db');
const router = express.Router();
const controller = require('./controller');
const bodyparser = require('body-parser');

require('dotenv').config();
const {
    PORT
} = process.env;


connDB();

const app = express();
app.use(bodyparser.urlencoded({
    extended: true
}))
app.use(express.json({
    extended: false
}));



app.post('/post', controller.post);

app.get('/find/:id', controller.find);

app.patch('/update/:id', controller.update);

app.delete('/delete/:id', controller.delete);

const port = process.env || PORT;

app.listen(port);