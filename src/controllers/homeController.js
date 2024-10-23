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
  console.log(">>>>Req.body: ",req.body)
  res.send("Create user with post method");
};

module.exports = { getHomePage, getAbout, getKhoi, postCreateUser };
