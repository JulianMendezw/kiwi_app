const { Router } = require('express')
const kiwiCtrl = require('../controllers/kiwi.controllers')
const route = Router()

route.post('/newBot', kiwiCtrl.newBot)
route.post('/newDelivery', kiwiCtrl.newDelivery)
route.get('/getDelivery', kiwiCtrl.getDelivery)
route.get('/getAllDeliveries', kiwiCtrl.getAllDeliveries)

module.exports = route
