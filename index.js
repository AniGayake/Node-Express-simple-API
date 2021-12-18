const Joi = require('joi');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());

// Temporarly used this array, we will use db here in next phase 
const courses = [
    { id: 1, name: 'Java' },
    { id: 2, name: 'Boomi' },
    { id: 3, name: 'IICS' },
    { id: 4, name: 'Python' }
];

    // GET METHOD

// Root of Resource
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Get list of courses
app.get('/api/courses', (req, res) => {
    res.send(courses);
});

// api/courses/1
app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));

    if (!course) res.status(404).send('The course with given Id not found');
    res.send(course);
});

// Query parameter
app.get('/api/courses/:year/:month', (req, res) => {
    res.send(req.query);
});


//POST METHOD
app.post('/api/courses', (req, res) => {
    

    if (!req.body.name || req.body.name.length < 3) {
        res.status(400).send('Name is required and should be >3 chars');
        return;
    }

    const newcourse = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(newcourse);
    res.send(newcourse);
});





//app.post();
//app.put();
//app.delete();
