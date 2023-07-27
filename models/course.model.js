const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const courseSchema = new Schema({
    courseID: {
        type: Number,
        required: true
    },
    courseName: {
        type: String,
        required: true
    }
});

const Course = mongoose.model('Courses', courseSchema);

module.exports = Course;