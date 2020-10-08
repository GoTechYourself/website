const redis = require("redis")
let redisconfig = require('./../configurations/database').redis;

let client;

if(redisconfig != {}){
    client = redis.createClient(redisconfig)
}else{
    //normally will bind automatically without configs
    client = redis.createClient()
}

module.exports = client
  
