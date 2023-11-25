const express = require('express');
const app = express();
const port = 3000;

// middleware function
const myMiddleware = (req, res, next) => {
    console.log("middleware executed!");
    next();  //move to the next middleware or route handler
}

// use the middleware for all routes
// app.use(myMiddleware);

// route handler
app.get('/', (req, res) => {
    res.send("hello world!");
})

app.get('/about', (req, res) => {
    res.send("About Page!")
})

app.get('/special', myMiddleware, (req, res) => {
    res.send("Special Route!");
})

app.listen(port, () => {
    console.log(`server is listening at http://localhost:${port}`);
})