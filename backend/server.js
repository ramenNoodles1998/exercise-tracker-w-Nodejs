const express = require('express')
const mongoose = require('mongoose')
const {setEnvironment} = require('./config/env')
const {connectToDB} = require('./config/db')
const {registerRoutes} = require('./routes')

const app = express()
const port = process.env.PORT || 5000

setEnvironment(app)
connectToDB()
registerRoutes(app)

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})

