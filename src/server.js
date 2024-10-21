require("dotenv").config();

const express = require("express"); //commonjs
const path = require("path");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web"); 

const app = express();
const port = process.env.PORT;
const hostname = process.env.HOST_NAME;

//config template engine
configViewEngine(app);

//khai báo route
app.use('/', webRoutes);

//test connection
const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: 'localhost',
  port: '3307', //default 3306
  user: 'root',
  database: 'hoidanit',
  password: '123456',
})

//simple query
connection.query(
  "SELECT * FROM Users",
  function(error, results, fields) {
    console.log("Result: ",results);
  }
)

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
