const express = require('express')

// files
const registerUser = require('../controller/registerUser')
const checkEmail = require('../controller/checkEmail')
const checkPassword = require('../controller/checkPassword')

const router = express.Router()

// --------------------------------------------------------- code -----------------------------------------------------------------------------------

// create user api
router.post('/register', registerUser)
// check user email
router.post("/email", checkEmail)
// check password
router.post('/password', checkPassword)

module.exports = router