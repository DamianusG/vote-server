const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('vote_app','root','', {
    host: 'localhost',
    dialect: 'mysql'
});
