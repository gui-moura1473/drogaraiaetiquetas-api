const express = require('express');
const cors = require('cors');
const routes = require('./router');
const connection = require('./db/connection');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api', routes);

connection().then(() => console.log("Conectado ao database")).catch(err => console.log(err));

module.exports = app;