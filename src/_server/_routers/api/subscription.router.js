var SubscriptionController = require('./../../_controllers/api/subscription.controller')
var EmailValidator = require('./../../_validators/email.express-validator');


module.exports = (router) => {
    
    router
    .route('/subscription')
    .post(EmailValidator,SubscriptionController.Subscribe)

}