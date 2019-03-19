const restrictedPages = require('./auth');
const homeController = require('../controllers/home-controller')
const userController = require('../controllers/user-controller')
const courseController=require('../controllers/course-controller')
const lectureController=require('../controllers/lecture-controller')

module.exports = app => {
    app.get('/', homeController.index)

    //user routes
    app.get('/user/login', userController.loginGet)
    app.post('/user/login', userController.loginPost)

    //admin routes
    app.get('/course/create',restrictedPages.hasRole('Admin'),courseController.createGet)
    app.post('/course/create',restrictedPages.hasRole('Admin'),courseController.createPost)
    app.get('/course/edit',restrictedPages.hasRole('Admin'),courseController.editGet)

    app.get('/lecture/add/:courseId',restrictedPages.hasRole('Admin'),lectureController.addGet)
    app.post('/lecture/add/:courseId',restrictedPages.hasRole('Admin'),lectureController.addPost)
    
    app.all('*', (req, res) => {
        res.status(404);
        res.send('404 Not Found');
        res.end();
    });
};