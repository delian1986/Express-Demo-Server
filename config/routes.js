const restrictedPages = require('./auth');
<<<<<<< HEAD
const homeController=require('../controllers/home-controller')
const userController=require('../controllers/user-controller')
const productController=require('../controllers/product-controller')
const orderController=require('../controllers/order-controller')

module.exports = app => {
    app.get('/', homeController.index);
    //usr routes
    app.get('/user/register',restrictedPages.isAnonymous, userController.registerGet);
    app.post('/user/register',restrictedPages.isAnonymous, userController.registerPost);
    app.get('/user/logout',restrictedPages.isAuthed,userController.logout);
    app.get('/user/login', restrictedPages.isAnonymous, userController.loginGet);
    app.post('/user/login',restrictedPages.isAnonymous, userController.loginPost);

    //product routes
    app.get('/product/add',restrictedPages.hasRole('Admin'),productController.addGet)
    app.post('/product/add',restrictedPages.hasRole('Admin'),productController.addPost)

    //order routes
    app.get('/order/place/:id',restrictedPages.isAuthed,orderController.placeGet)

=======
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
    
>>>>>>> 61c313b9ea93a48919015c841d457a83f35443e1
    app.all('*', (req, res) => {
        res.status(404);
        res.send('404 Not Found');
        res.end();
    });
};