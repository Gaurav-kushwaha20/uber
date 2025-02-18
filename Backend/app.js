// configuration of environment
const dotenv = require('dotenv')
dotenv.config()
// configuration of cors
const cors = require('cors')

// user routes imports
const userRoutes = require('./routes/user.routes')

// captain routes imports
const captainRoutes = require('./routes/captain.routes')

// cookie parser to interact with cookies on server
const cookieParser = require('cookie-parser')
// configuration of express
const express = require('express');
const app = express();

// connect to database
const connectToDb = require("./db/db")

// using database
connectToDb();

// using cors package
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

// using user routes
app.use('/users', userRoutes)

// using captain routes
app.use('/captains', captainRoutes)

app.get('/', (req, res) => {
    res.send('Hello world!');
})


module.exports = app;