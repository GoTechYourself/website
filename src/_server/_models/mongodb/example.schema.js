var mongoose = require('mongoose')
var Schema = mongoose.Schema;


var UserSchema = new Schema({
    username : { type : String, required: true },
    password : { type : String, required: true },
    settings : {
        activation_key : {type : String, required : true},
        user_api_key : { type : String },
        language : { type : Number, required : true }
    },
    data : {
        first_name : String,
        last_name : String
    },
    create_date  : { type: Date, default: Date.now },
    update_date : {type : Date,default: Date.now  },
    enabled : { type: Boolean, default: false },
    active : { type: Boolean, default: true }
})

var UserModel = mongoose.model("Application",UserSchema);

let methods = {
    FindAll : () => {
        return new Promise((resolve,reject) => {
            UserModel.find().exec((err,res) => {
                if(err)
                    reject(err)
                else
                    resolve(res)
            })
        });
    },
    FindById : (id) => {
        return new Promise((resolve,reject) => {
            UserModel.findById(id).exec((err,res) => {
                if(err)
                    reject(err)
                else
                    resolve(res)
            })
        })
    }
}

module.exports = {
    model : UserModel,
    schema : UserSchema,
    methods : methods
}