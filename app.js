const express = require('express')
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res, next) => {
    console.log('working')
    next();
})

app.post('/', (req, res, next) => {
    res.send('hello')
    console.log('hello')
})

app.listen(3000, () => {
    console.log('coffeebot is listening');
});