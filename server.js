var express = require('./config/express')

var app = express()
app.listen(4000)
module.exports = app

console.info('app running @: http://localhost:4000/')