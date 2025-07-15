const express = require ('express')
const router = express.Router()
const bookingRoutes = require('./bookingRoutes')
const {infoController} = require('../../controller')
router.get('/info',infoController.info);
router.use('/booking',bookingRoutes);
module.exports=router
