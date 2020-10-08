var mongoose = require('mongoose')
let dbconfig = require('./../configurations/database').mongodb;

var db = null;

let Connect = async function(){
    try{
        db = await mongoose.connect(dbconfig.url,dbconfig.options);
        console.log(`[MONGODB] - Database connection initialized sucessfully`);
    }catch(err){
        throw err;
    }
}
 
module.exports = { Connect, db };