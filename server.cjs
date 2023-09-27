require('dotenv').config()
const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const methodOverride = require('method-override')
const userRouter = require('./routes/api/users.cjs')

// Connect to database
require("./config/database.cjs")

const app = express()

//Middleware
//Logger middleware to generate logs about requests made to the server
app.use(logger('dev'))
// middleware to parse incoming JSON data
app.use(express.json())
// Override method
app.use(methodOverride('_method'));

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
// app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'dist')));

// checkToken Middleware. (Sets the req.user & req.exp properties on the request object)
app.use(require('./config/checkToken.cjs'))


////// Put API Routes here, before the "catch all" route

app.get("/test", (req, res) => {
    res.send("You just hit an API route!")
})


//Router Setup
//If the request starts with /api/users/ direct it to the userRouter()
app.use('/api/users', userRouter)

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Express Train Running! Listening to yo business on port: ${PORT}`)
})