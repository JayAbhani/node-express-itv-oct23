const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// to parse json
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Welcome to ITVedant");
})

app.post('/submit', (req, res) => {
    // const data = req.body;
    // username = data.username;
    // email = data.email;

    const {username, email} = req.body;
    res.send(`Received data - Username: ${username}, Email: ${email}`);
})

app.listen(port, () => {
    console.log(`server is started at http://localhost:${port}`);
})