var MainController = require('./../../_controllers/api/index.controller')
var Middlewares = require('./../../_middlewares/index')

var Validator = require('./../../_validators/login.express-validator')

module.exports = (router) => {
    
    router
    .route('/')
    .get(Middlewares.example,Validator, MainController.Index)

}