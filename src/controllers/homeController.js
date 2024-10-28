const connection = require("../config/database");
const { getAllUsers, getUserById } = require("../services/CRUDService");

const getHomePage = async (req, res) => {
  let results = await getAllUsers();
  return res.render("home.ejs", { listUsers: results });
};
const getAbout = (req, res) => {
  res.send("Hello getAbout!");
};

const getKhoi = (req, res) => {
  res.render("sample.ejs");
};

const postCreateUser = async (req, res) => {
  try {
    let { email, name, city } = req.body;
    let [results, fields] = await connection.query(
      "INSERT INTO Users (email, name, city) VALUES (?, ?, ?)",
      [email, name, city]
    );

    res.send("Create user successfully!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating user");
  }
};
// create user
const getCreatePage = (req, res) => {
  return res.render("create.ejs");
};

const getUpdatePage = async (req, res) => {
  const userId = req.params.id;

  let user = await getUserById(userId);

  return res.render("edit.ejs", { user: user });
};

module.exports = {
  getHomePage,
  getAbout,
  getKhoi,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
};
