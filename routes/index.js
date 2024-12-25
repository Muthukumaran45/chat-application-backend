const express = require('express')

// files
const registerUser = require('../controller/registerUser')
const checkEmail = require('../controller/checkEmail')
const checkPassword = require('../controller/checkPassword')
const logout = require('../controller/logout')
const updateUserDetails = require('../controller/updateUserDetails')
const userDetails = require('../controller/userDetails')

const router = express.Router()


// create user api
router.post('/register', registerUser)
// check user email
router.post("/email", checkEmail)
// check password
router.post('/password', checkPassword)
// login user details
router.get('/user-details', userDetails)
// logout user
router.get('/logout', logout)
// update user details
router.post('/update-user', updateUserDetails)

module.exports = router