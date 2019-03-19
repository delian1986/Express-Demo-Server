// const encryption = require('../util/encryption');
const User = require('mongoose').model('User');
const Course = require('../models/Course.js')


module.exports = {
    createGet: (req, res) => {
        res.render('course/create');
    },
    createPost: async (req, res) => {
        const { title, description, imageUrl } = req.body
        const isListed = req.body.isListed === 'on'
        const creator = req.user.id

        try {
            const createdCourse = await Course.create({
                title, description, imageUrl, isListed,creator
            })
            return res.redirect(`/lecture/create/${createdCourse._id}`)

        } catch (e) {
            console.log(e)
            return
        }

        // res.render('course/create');
    },
    editGet:async (req,res)=>{
        const courses= await Course.find()

        res.render('course/edit',{courses})
    }
}
