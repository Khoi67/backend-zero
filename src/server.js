require("dotenv").config();

const express = require("express"); //commonjs
const path = require("path");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web"); 
const connection = require("./config/database");

const app = express();
const port = process.env.PORT;
const hostname = process.env.HOST_NAME;

//config template engine
configViewEngine(app);

//khai báo route
app.use('/', webRoutes);

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
