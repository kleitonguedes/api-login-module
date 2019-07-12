const express = require('express');
const app = new express();
const bodyParser = require('body-parser')

const loginService = require('./services/login');
const signInService = require('./services/sign-in');

app.use( bodyParser.json() );

app.get('/', (req, res) => {
    res.send('Hello World')
});

app.post('/login', async (req, res) => {
    res.send(
        await loginService(req.body)
    );
});

app.post('/sign-in', async (req, res) => {
    res.send(
        await signInService(req.body)
    );
});

app.listen(3000, function() {
    console.log('Server UP')
});
