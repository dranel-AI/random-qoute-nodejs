const express = require('express')
const app = express()

app.set('json spaces', 2)
// static file
app.use(express.static('public'))

// view ejs
app.set('view engine', 'ejs')

// routers
app.use(require('./routers/get'))

module.exports = app
