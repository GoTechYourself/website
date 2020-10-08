let emitter = require('./EventEmitter').Emitter
let moment = require('moment')

class Request {

    constructor(){
        
    }

    Initialize(req,res,next){

        var ip = req.headers['x-forwarded-for'] || 
        req.connection.remoteAddress || 
        req.socket.remoteAddress ||
        (req.connection.socket ? req.connection.socket.remoteAddress : null);

        emitter.emit('info',`:: [REQUEST - ${req.method }] ${moment().format("LLL")} : IP - ${ip}  | ${req.url} `)
        next();
    }
}

var RequestLogger = new Request();

module.exports = { RequestLogger }