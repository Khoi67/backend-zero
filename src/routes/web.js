const express = require("express");
const { getHomePage, getAbout, getKhoi } = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomePage);

router.get("/about", getAbout)

router.get("/khoi", getKhoi)

module.exports = router;
