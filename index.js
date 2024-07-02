const express = require('express');
const bodyParser = require('body-parser');
// const mysql = require('mysql2');

const app = express();
const PORT = process.env.PORT || 3000;

const votersRoute = require('./routes/Voters')

app.use("/voters", votersRoute);

app.use(bodyParser.json());

// Create a MySQL connection pool
// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'vote_app',
//   });
  
  // Test the MySQL connection
  // pool.getConnection((err, connection) => {
  //   if (err) {
  //     console.error('Error connecting to MySQL database: ', err);
  //   } else {
  //     console.log('Connected to MySQL database!');
  //     connection.release();
  //   }
  // });
  
  // Define a sample route for testing
  app.get('/', (req, res) => {
    res.send('Welcome to my Node.js REST API!');
  });
  
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });