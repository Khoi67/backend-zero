const getHomePage = (req, res) => {
  res.send("Hello getHomePage!");
};
const getAbout = (req, res) => {
  res.send("Hello getAbout!");
}

const getKhoi = (req, res) => {
  res.render("sample.ejs");
}

module.exports = { getHomePage, getAbout, getKhoi };
