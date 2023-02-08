const router = require('express').Router()
const controller = require('../controller/apiController')


router.post('/addition',controller.getAddition)
 
module.exports = router