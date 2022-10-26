const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;

const courses = require('./data/Courses.json');
const course = require('./data/Course.json');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send(`<h1 style="text-align: center">Programing HUB Server is Running...</h1>`);
})

app.get('/courses', (req, res) => {
    res.send(courses);
})

app.get('/course', (req, res) => {
    res.send(course);
})

app.listen(port, () => {
    console.log(`Server is Running on port ${port}`);
})