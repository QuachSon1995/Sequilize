const {Sequelize} = require('sequelize')
const sequelize = new Sequelize ('testproject', 'root','', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: true,
        underscored: true
    },
    logging: false,
    pool: {
        max: 1500,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

module.exports = sequelize;