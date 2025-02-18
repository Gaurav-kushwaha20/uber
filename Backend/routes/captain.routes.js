const express = require('express')
const router = express.Router()
const {body} = require('express-validator')
const captainController = require('../controllers/captain.controller')
const authMiddleware = require('../middlewares/auth.middleware')


// register the captain
router.post('/register', [body('email').isEmail().isEmail().withMessage('Invalid email'),
        body('fullname.firstname').isLength({min: 3}).withMessage('first name at least 3  characters'),
        body('password').isLength({min: 6}).withMessage('password must be at least 6 characters'),
        body('vehicle.color').isLength({min: 3}).withMessage('vehicle color must be at least 3 characters'),
        body('vehicle.plate').isLength({min: 3}).withMessage('vehicle plate must be at least 3 characters'),
        body('vehicle.capacity').isLength({min: 1}).withMessage('vehicle capacity must be at least 1'),
        body('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage('Invalid vehicle type'),],
    captainController.registerCaptain)

// login the captain
router.post('/login', [
        body('email').isEmail().withMessage('Invalid email'),
        body('password').isLength({min: 6}).withMessage('password must be at least 6 characters')],
    captainController.loginCaptain
)

// captain profile
router.get('/profile', authMiddleware.authCaptain, captainController.getCaptainProfile)

// logout the captain
router.get('/logout', authMiddleware.authCaptain, captainController.logoutCaptain)


module.exports = router;