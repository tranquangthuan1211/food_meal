const express = require("express")
const router = express.Router()
const homeController = require("../controller/homeController")
router.get("/",homeController.index)
router.post("/",homeController.handleLogin)

module.exports = router;


