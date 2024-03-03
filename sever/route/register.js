const express = require('express')
const route = express.Router()
const registerController = require('../controller/RegisterController/index')
route.get('/', registerController.index)
route.post('/',registerController.handleRegister)

module.exports = route



