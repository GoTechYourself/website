let mysql = require('mysql')
let configurations_db = require('./../configurations/database').mysql;

var bd = mysql.createConnection(configurations_db);

bd.connect(function(err) {
    if (err) throw err;
    console.log(`Database connection initialized successfully.`);
})


module.exports.bd = bd;
