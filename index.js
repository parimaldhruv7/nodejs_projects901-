require('dotenv').config()
const express = require("express");
const app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.get('/twitter', (req, res) => {
    res.send("https://mail.google.com/mail/u/0/#inbox");
});

app.get("/login", (req, res) => {
    res.send(`<h1>Hello sir</h1>`);
});

app.listen(process.env.PORT, () => {
    console.log(`Example to learn node in ${port}`);
});
