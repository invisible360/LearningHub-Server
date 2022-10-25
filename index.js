const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;

const courses = require ('./data/Courses.json')

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send(`<h1 style="text-align: center">IT HUB Server is Running...</h1>`);
})

app.get ('/courses', (req, res)=> {
    res.send (courses);
})

app.listen(port, () => {
    console.log(`Server is Running on port ${port}`);
})