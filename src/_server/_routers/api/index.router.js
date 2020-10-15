var MainController = require('./../../_controllers/api/index.controller')

// var Middlewares = require('./../../_middlewares/index')
// var Validator = require('./../../_validators/login.express-validator')


var SubscriptionRouter = require('./subscription.router')

module.exports = (router) => {
    
    router
    .route('/')
    .get(MainController.Index)

    //invoke the subscription router
    SubscriptionRouter(router)

}