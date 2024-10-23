require("dotenv").config();
//test connection
const mysql = require("mysql2");

// const connection = mysql.createConnection({
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT, //default 3306
//   user: process.env.DB_USER,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
// })
const connection = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT, //default 3306
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
})

module.exports = connection;