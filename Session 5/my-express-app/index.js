const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("hello world!")
});

app.get('/about', (req, res) => {
    res.send("About Us Page");
})

app.get('/contact', (req, res) => {
    res.send("Contact Us Page");
})

app.get('/users/:userId', (req, res) => {
    const userId = req.params.userId;
    res.send(`User Id: ${userId}`);
})

app.get('*', (req, res) => {
    res.send("404 Page Not Found");
})

app.listen(3000, () => {
    console.log("server is started!");
});