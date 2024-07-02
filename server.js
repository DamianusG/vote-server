const { Sequelize } = require('sequelize');

// Create a new Sequelize instance and configure the database connection
const sequelize = new Sequelize('vote_app_s','root','', {
    host: 'localhost',
    dialect: 'mysql'
});

// Authenticate and establish the connection
sequelize.authenticate().then (() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});

// Export the Sequelize instance for use in other parts of the application
module.exports = sequelize;