const express = require('express');
const chalk = require("chalk");
const debug = require('debug')('server');
const cors = require('cors');
const mongoose = require("mongoose");
const routes = require('./routes/index');

const app = express();
app.use(cors());

const port = 3600;

app.use('/', routes);

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/CAROUSAL",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Connected to MongoDB");
        }
    }
);

app.get('/', (req, res) => {
    res.send('Eyepax Solution 2022');
});

app.listen(port, () => {
    debug(`Listening to port ${chalk.green(port)}`);
});