const cors = require('cors')
const express = require('express')

exports.setEnvironment = (app) => {
    process.env.NODE_ENV = 'production'
    process.env.PORT = 5000
    process.env.DB_URL = 'mongodb+srv://roman:vRiB8vahSH9!Vfa@pickuppals.3erwn.mongodb.net/exertracker?retryWrites=true&w=majority'
    process.env.TOKEN_SECRET = 'my-development-secret'
    console.log('setting production environment')
    app.use(cors())
    app.use(express.json())
}