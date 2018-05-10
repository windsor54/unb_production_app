var env = require('dotenv').load(),
    morgan = require('morgan'),
    express = require('express'),
    compress = require('compression'),
    bodyParser = require('body-parser')

module.exports = () => {
  var app = express()

  if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
  }else if(process.env.NODE_ENV === 'production'){
    app.use(compress())
  }

  app.use(bodyParser.urlencoded({extended:true}))
  app.use(bodyParser.json())

  app.set('views', './app/views')
  app.set('view engine', 'ejs')

  require('../app/routes/index.route')(app)

  app.use(express.static('./public'))

  return app
}