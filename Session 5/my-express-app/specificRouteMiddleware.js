const express = require('express');
const app = express();

const authMiddleware = (req, res, next) => {
    const isAuthorized = true;
    if(isAuthorized) {
        next();
    } else {
        res.status(401).send("Unauthorized");
    }
}

app.get('/', (req, res) => {
    res.send("Hello from ITVedant!");
})

app.get('/protected', authMiddleware, (req, res) => {
    res.send("Welcome to your LMS Portal");
})

app.listen(3000, () => {
    console.log("server is started!");
});