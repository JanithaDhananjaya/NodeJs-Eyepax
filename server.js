const express = require('express');
const chalk = require("chalk");
const debug = require('debug')('server');
const cors = require('cors');
const routes = require('./routes/index');

const app = express();
app.use(cors());

const port = 3600;

app.use('/', routes);

app.get('/', (req, res) => {
    res.send('Eyepax Solution 2022');
});

app.listen(port, () => {
    debug(`Listening to port ${chalk.green(port)}`);
});