const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

app.get('/', (req,res) => {
    res.send('Hello!')
})

app.listen(5000);

