// const encryption = require('../util/encryption');
const User = require('mongoose').model('User');
const Course = require('../models/Course.js')
const Lecture = require('../models/Lecture.js')


module.exports = {
    addGet: async (req, res) => {
        const courseId = req.params.courseId
        const course = await Course.findById(courseId)
      

        res.render('lecture/add', { course });
    },
    addPost: async (req, res) => {
        console.log(req.body);
        const { title, videoUrl } = req.body
        const courseId = req.params.courseId

        try {
            const createdLecture = await Lecture.create({
                title, videoUrl, course: courseId
            })

            const course = await Course.findById(courseId)
            course.lectures.push(createdLecture._id)
            await course.save()

            return res.redirect(`/lecture/add/${courseId}`)

        } catch (e) {
            console.log(e)
            return
        }

        // res.render('course/create');
    },
}
