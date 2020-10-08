let response = require('./result');

class CRUDA {

    Collection
    Validator
    Middlewares

    constructor (_Collection ,_Validator = null,_Middlewares = null){ 
        this.Collection = _Collection 
        this.Validator = _Validator;
        this.Middlewares = _Middlewares;
    }

    InternalError = (res,message = null) => res.send(response.result({ type : response.type.error, message : message })) 
    Success = (res,result = null,message = null ) => res.send(response.result({ result : result, message : message })) 
    NotFound = (res,result = null,message = null ) => res.send(response.result({ type : response.type.notfound, result : result, message : message })) 

    ExpressValidator(req){

        var result = null;

        if(this.Validator){

            const errors = validationResult(req)
                    
            if (!errors.isEmpty()) {
                result = response.result({
                    type : response.type.invalid,
                    message : errors.array()
                })
            }
        }

        return result;

    }
    
    ReadMany = (router) => {
        router
        .route('/')
        .get( async (req,res) => {

            var Validation = this.ExpressValidator(req);

            if(Validation != null)
                res.send(Validation)
            else{
                
                let query = res.locals.query || {};
                
                this.Collection.find(query,(e,result) => {
                    if(e)
                        this.InternalError(res,e)
                    else
                        this.Success(res,result,'success')
                })

            }
            
        });

    }

    Create = (router) => {

        router
        .route('/')
        .post( async (req,res) => {

            var Validation = this.ExpressValidator(req);

            if(Validation != null)
                res.send(Validation)
            else{

                const newEntry = req.body;

                this.Collection.create(newEntry,(e,result) => {
                    
                    if(e)
                        this.InternalError(res,e)
                    else
                        this.Success(res,result,'success')

                })

            }
            
        });

    }

    Read = (router) => {

        router
        .route('/:id')
        .get( async (req,res) => {

            var Validation = this.ExpressValidator(req);

            if(Validation != null)
                res.send(Validation)
            else{
                const _id  = req.params.id;
                
                this.Collection.findById(_id,(e,result) => {
                    if(e)
                        this.InternalError(res,e)
                    else{
                        if(result != null)
                            this.Success(res,result,'success')
                        else
                            this.NotFound(res,null,'notfound')
                    }
                })

            }
            
        })

    }

    Update = (router) => {

        router
        .route('/:id')
        .put( async (req,res) => {

            var Validation = this.ExpressValidator(req);

            if(Validation != null)
                res.send(Validation)
            else{

                const changedEntry = req.body;

                this.Collection.update({ _id: req.params._id }, { $set: changedEntry }, (e) => {
                    
                    if(e)
                        this.InternalError(res,e)
                    else
                        this.Success(res,null,'success')
                })

            }
            
        });


    }

    CRUD = (router) => {
        this.Create(router)
        this.Read(router)
        this.Update(router)
    }

}

module.exports = CRUDA