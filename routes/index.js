const express = require('express')

// files
const registerUser = require('../controller/registerUser')

const router = express.Router()

// --------------------------------------------------------- code -----------------------------------------------------------------------------------

// create user api
router.post('/register', registerUser)


module.exports = router