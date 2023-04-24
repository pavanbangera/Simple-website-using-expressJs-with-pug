const express = require("express");
const path = require("path");
const { title } = require("process");
const port = 3000;
const app = express();

app.use('/static', express.static('static'));

app.set('view engine', 'pug');
app.set("views", path.join(__dirname, "templets"));

app.get('/', (req, res) => {
    res.render("index.pug")
})
app.get('/contact', (req, res) => {
    res.render("contact.pug")
})

app.listen(port, () => {
    console.log(`Listening at ${port}`)
})