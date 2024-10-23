const connection = require("../config/database");

const getHomePage = (req, res) => {
  return res.render("home.ejs");
};
const getAbout = (req, res) => {
  res.send("Hello getAbout!");
};

const getKhoi = (req, res) => {
  res.render("sample.ejs");
};

const postCreateUser = (req, res) => {
  // let email = req.body.email;
  // let name = req.body.name;
  // let city = req.body.city;

  let { email, name, city } = req.body;
  console.log(">>>>Email = ", email, "Name = ", name, "City = ", city);

  // INSERT INTO Users (email, name, city)
  // VALUES ("test@gmail.com", "Kit", "Sai Gon")
  connection.query(
    `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
    [email, name, city],
    function (error, results) {
      console.log(results);
      res.send("Create user successfully!");
    }
  );
};

module.exports = { getHomePage, getAbout, getKhoi, postCreateUser };
