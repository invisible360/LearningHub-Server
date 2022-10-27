const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;

const courses_categories = require('./data/Courses.json');
const course_details = require('./data/Course.json');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send(`<h1 style="text-align: center">Learning HUB Server is Running...</h1>`);
})

app.get('/courses_categories', (req, res) => {
    res.send(courses_categories);
})

app.get('/course', (req, res) => {
    res.send(course_details);
})

app.get('/courses_categories/:id', (req, res) => {
    const id = req.params.id;
    const allCourse = course_details.filter(c => c.category_id === id);
    res.send(allCourse);
})
app.get('/course_details/:id', (req, res) => {
    const id = req.params.id;
    const cDetails = course_details.find(details => details.id === id);
    res.send(cDetails);
})

app.listen(port, () => {
    console.log(`Server is Running on port ${port}`);
})