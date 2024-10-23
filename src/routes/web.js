const express = require("express");
const { getHomePage, getAbout, getKhoi, postCreateUser } = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomePage);
router.get("/about", getAbout)
router.get("/khoi", getKhoi)

router.post("/create-user", postCreateUser);
module.exports = router;
