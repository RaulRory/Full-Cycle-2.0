const express = require('express')
const router =  express.Router()
const index = require('../controllers')  

router.get('/', index.show)

module.exports = router
