const { Sequelize, DataTypes} = require('sequelize');

let configuration = require('./../configurations/database').sequelize

const connect = (configuration) => new Sequelize();

module.exports = {
    configuration : configuration,
    connect : connect
};

