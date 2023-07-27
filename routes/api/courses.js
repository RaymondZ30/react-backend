const express = require('express');
const router = express.Router();
const courses = require('../../Courses');

// Get all courses
router.get('/', (req, res) => res.json(courses));

// Get course with specified ID
router.get('/:id', (req, res) => {
    const found = courses.some(course => course.id === parseInt(req.params.id));

    if (found) {
        res.json(courses.filter(course => course.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({ msg: `No course with course id: ${req.params.id}`});
    }
});

module.exports = router;