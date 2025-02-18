const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const captainSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            trim: true,
            minLength: [3, 'Firstname must be at least 3 characters'],
        },
        lastname: {
            type: String,
            required: true,
            trim: true,
            minLength: [3, 'Lastname must be at least 3 characters'],
        }
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        select: false,
        minLength: [6, 'Password must be at least 6 characters'],
    },
    socketId: {
        type: String,
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive',
    },
    vehicle:{
        color:{
            type: String,
            required: true,
            minlength: [3, 'color must be at least 3 characters'],
        },
        plate: {
            type: String,
            required: true,
            minlength: [3, 'plate must be at least 3 characters'],
        },
        capacity: {
            type: String,
            required: true,
            minlength: [1, 'capacity must be at least 1 characters'],
        },
        vehicleType: {
            type: String,
            required: true,
            enum: ['car', 'motorcycle', 'auto'],
        }
    },
    location: {
        latitude: {
            type: Number,
        },
        longitude: {
            type: Number,
        }
    }


})

captainSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET, {expiresIn: '24h'});
    return token;
}

captainSchema.methods.comparePassword = async function(password) {
return await bcrypt.compare(password, this.password)
}

captainSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password, 10)
}



const captainModel = mongoose.model('Captain', captainSchema)
module.exports = captainModel