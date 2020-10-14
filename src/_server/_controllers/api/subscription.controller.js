var response = require('./../../framework/result')

const { validationResult } = require('express-validator')
var Subscription = require('./../../_models/mongodb/subscription.schema')

module.exports = {

    Subscribe : async (req,res,next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {

            res.send(response.result({
                message : "failedvalidations",
                req: req,
                type : response.type.invalid
            }))            
            
        }else{

            var request_data = req.body;

            //verify if there's already a user subscribed with this email
            var UserSubscriptions = await Subscription.methods.FindByEmail(request_data.email);
    
            if(UserSubscriptions.length > 0){
                res.send(response.result({
                    req: req,
                    result : {},
                    message : "subscription_failed_already_exists"
                }));
            }else{
    
                //[TODO] subscribe the user
                var SubscriptionCreated = await Subscription.methods.SubscribeEmail(request_data.email);
    
    
                res.send(response.result({
                    req: req,
                    result : SubscriptionCreated,
                    message : "subscription_success"
                }));
            }
            
        }
      
        
    }

}