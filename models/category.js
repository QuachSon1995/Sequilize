const {Sequilize, DataTypes} = require('sequelize')
const db = require('../config/db')

const Category = db.define('categories', {
    id:{type: DataTypes.INTEGER, autoIncrement:true, allowNull:false, primaryKey:true},
    name:{ type: DataTypes.STRING, allowNull:false},
    status:{ type:DataTypes.STRING, allowNull:false},
});
db.sync();
module.exports = Category
