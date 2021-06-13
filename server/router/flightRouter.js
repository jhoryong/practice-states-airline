const express = require('express');
const {findFlight} = require( '../controller/flightController')
const router = express.Router();

router.get('/', findFlight);

module.exports = router;
