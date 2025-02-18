const express = require('express')
const router = express.Router()
const { body } = require('express-validator')
const userController = require('../controllers/user.controller')
const authMiddleware = require('../middlewares/auth.middleware')


// register the user
router.post('/register',[body('email').isEmail().withMessage('Invalid email address'),
    body('fullname.firstname').isLength({min:3}).withMessage('first name must be at least 3 characters'),
    body('password').isLength({min:6}).withMessage('password must be at least 6 characters'),
],userController.registerUser)

// login the user
router.post('/login',[body('email').isEmail().withMessage('Invalid email address'),
body('password').isLength({min:6}).withMessage('password must be at least 6 characters')
],
    userController.loginUser
    )

// show the user profile
router.get('/profile',authMiddleware.authUser ,userController.getUserProfile)

// Log out user
router.get('/logout', authMiddleware.authUser, userController.logoutuser )

router.post('/', async (req, res) => {})
module.exports = router