const connection = require("../config/database");
const getAllUsers = async () => {
  let [results, field] = await connection.query("SELECT * FROM Users");
  return results;
};
module.exports = {
  getAllUsers,
};
