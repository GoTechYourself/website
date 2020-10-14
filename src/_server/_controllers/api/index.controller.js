var response = require('./../../framework/result')

module.exports = {


    Index : (req,res,next) => {
    
        res.send(response.result({
            result : null,
            message : 'hello',
            req: req
        }))
        
    }
}