module.exports = (app) => {
  var homePage = require('../controllers/index.controller')

  app.get('/', homePage.render)
}