const router = require('express').Router();
let Course = require('../models/course.model');

router.route('/').get((req, res) => {
    Course.find()
    .then(courses => res.json(courses))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Course.findById(req.params.id)
    .then(courses => res.json(courses))
    .catch(err => res.status(400).json('Error: ' + err));
});

/* router.get('/:id', (req, res) => {
    const found = Course.some(course => course.id === parseInt(req.body.id));

    if (found) {
        res.json(Course.filter(course => course.id === parseInt(req.body.id)));
    } else {
        res.status(400).json({msg: `No course with ID of ${req.body.id}`});
    }
}) */

router.post('/', (req, res) => {
    const courseID = Number(req.body.id);
    const courseName = req.body.name;

    const newCourse = new Course({courseID, courseName});

    newCourse.save()
    .then(() => res.json('Course added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Course.findByIdAndDelete(req.params.id)
    .then(() => res.json('Course Deleted'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;