const userModel = require('../models/user.model')
const blacklistModel = require('../models/blacklistToken.model')
const userService = require('../services/user.service')
const {validationResult} = require('express-validator')
const {router} = require("express/lib/application");


// Register the user
module.exports.registerUser = async (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }

    const {fullname, email, password} = req.body

    const isUserRegistered = await userModel.findOne({email})
    if(isUserRegistered){
        return res.status(400).json({message: 'user already exists'})
    }

    const hashedPassword = await userModel.hashPassword(password);

    const user = await userService.createUser({firstname: fullname.firstname, lastname: fullname.lastname, email, password: hashedPassword})

    const token = user.generateAuthToken()
    return res.status(201).json({token, user})

}

// Login the user
module.exports.loginUser = async (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }
    const {email, password} = req.body

    const user = await userModel.findOne({email}).select('+password')

    if (!user) {
        return res.status(401).json({message: 'Invalid email or password'})
    }

    const isMatch = await user.comparePassword(password, user.password)
    if (!isMatch) {
        return res.status(401).json({errors: "Invalid password"})
    }

    const token  = user.generateAuthToken()
    res.cookie('token', token)
    return res.status(200).json({token, user})
}

// user profile
module.exports.getUserProfile = async (req, res) => {

        res.status(200).json(req.user)
}

// Log out user
module.exports.logoutuser = async (req, res, next) => {
    res.clearCookie('token')

    const token = req.cookies.token || req.headers.authorization?.split(' ')[1]

    await blacklistModel.create({token})

    res.status(200).json({message: 'Logged out'})


}