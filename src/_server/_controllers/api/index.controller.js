var response = require('./../../framework/result')

let userM = require('./../../_models/mongodb/example.schema');


module.exports = {


    Index : (req,res,next) => {
    
        res.send(response.result({
            result : null,
            message : 'hello',
            req: req
        }))
        
    }
}