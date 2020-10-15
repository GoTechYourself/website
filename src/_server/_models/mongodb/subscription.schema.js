var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var UserSubscription = new Schema({
    email : { type : String, required : true}, 
    create_date  : { type: Date, default: Date.now },
    update_date : {type : Date,default: Date.now  },
    enabled : { type: Boolean, default: false },
    active : { type: Boolean, default: true }
})

var SubscriptionModel = mongoose.model("Subscription",UserSubscription);

let methods = {
    FindAll : () => {
        return new Promise((resolve,reject) => {
            SubscriptionModel.find().exec((err,res) => {
                if(err)
                    reject(err)
                else
                    resolve(res)
            })
        });
    },
    FindById : (id) => {
        return new Promise((resolve,reject) => {
            SubscriptionModel.findById(id).exec((err,res) => {
                if(err)
                    reject(err)
                else
                    resolve(res)
            })
        })
    },

    FindByEmail : (email) => {
        return new Promise((resolve,reject) => {
            SubscriptionModel.find({ email : email}).exec((err,res) => {
                if(err)
                    reject(err)
                else
                    resolve(res)
            })
        })
    },

    SubscribeEmail : (email) => {
        return new Promise((resolve, reject) => {

            let newUser = new SubscriptionModel({
              email : email
            });
    
            newUser.save(function(err,result){
                if(err) reject(err)
                resolve(result)
            })
        })   
    }
}

module.exports = {
    model : SubscriptionModel,
    schema : UserSubscription,
    methods : methods
}