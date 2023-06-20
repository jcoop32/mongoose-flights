var express = require('express');
var router = express.Router();

const flightsCtrl = require('../controllers/flights')

/* GET flight listing. */
//create new flight path: /flights/new
router.get('/new', flightsCtrl.new);
//POST new Flight path: /flights
router.post('/', flightsCtrl.create)
//GET path: /flights
router.get('/', flightsCtrl.index)


module.exports = router;
