const express = require('express')
const app = express()
const routes = require('./src/routes')

app.use('/', routes)

module.exports =  { app }