const { Sequelize, DataTypes} = require('sequelize');

const Project = sequelize.define('project',{
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    NomeProjecto: DataTypes.STRING,
    IdPlataformaProjecto :	DataTypes.INTEGER,
    IdProjectoPlataforma :	DataTypes.INTEGER,
    NomeProjecto :	DataTypes.STRING,
    IdLingua : DataTypes.INTEGER,
    IsActive : DataTypes.BOOLEAN,
    IdExternoProjecto : DataTypes.STRING,
    Localizacao	: DataTypes.STRING,
    CoordenadasGPS	: DataTypes.STRING,
    Distrito : DataTypes.STRING
}, { schema: "AppMunicipios" , freezeTableName: true , tableName : "Projecto", timestamps: false })

// Project.associate = function(models) {
//     // associations can be defined here
// };

module.exports = Project