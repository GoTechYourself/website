module.exports = {
    mongodb : {
        url : "mongodb://localhost:27017/goteachyourself",
        options :{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        }
    },
    sequelize : {
        host : '',
        dialect : 'mssql',
        username : "",
        password : "",
        database : "",
    },
    mysql :{
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'custom_mysqldb'
    },
    redis : {

    }
}