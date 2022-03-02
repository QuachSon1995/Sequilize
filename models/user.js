const {Sequilize, DataTypes} = require('sequelize')
const db = require('../config/db')

const User = db.define('users', {
    id:{type: DataTypes.INTEGER, autoIncrement:true, allowNull:false, primaryKey:true},
    userName:{ type: DataTypes.STRING, allowNull:false},
    email:{ type:DataTypes.STRING, allowNull:false},
    password:{type:DataTypes.STRING, allowNull:false}
});
db.sync();
module.exports = User
