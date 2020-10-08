let uuid = require('uuid')
let rootpath = require('app-root-path')

module.exports = {
    name : 'Node base project',
    port : process.env.PORT || 3000,
    cors : {
        "origin": "*",
        "methods": "GET,PUT,POST,DELETE",
        "allowedHeaders" : [ 'Content-Type','application/json','Authorization'],
        "preflightContinue": false,
        "optionsSuccessStatus": 204
    },
    session : {
        secret: uuid.v4() + uuid.v1(),
        resave: false,
        saveUninitialized: true
    },
    resources : {
        queryinputs : ["lang","language","l"],
        languages : [
            {
                name : 'portuguese',
                codes : ['pt','pt-pt','portuguese'],
                resource : require(`${rootpath}/_server/resources/portuguese.lang.js`)
            },
            {
                default : true,
                name : 'english',
                codes : ['en','english'],
                resource : require(`${rootpath}/_server/resources/default.lang.js`)
            }
        ]
    }
}