const express = require('express');
/*
    In Terminal, from this directory, run:
        nodemon report.js
    Simulate updates to the data by editing and saving program.js.
*/

const { isConstructorDeclaration } = require('typescript');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');

const program = require('./program').program;

app.use('/', cors());  // globally expose all endpoints

app.get('/program', (req, res) => {
    res.json(program);
});

app.use((req, res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});

app.use((err, req, res, next) => {
    console.error(err.message);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error - err.message');
});

app.listen(port, () => console.log(
    `Fake data server started on http://localhost:${port};
    press Ctrl-C to terminate.`));

