var express = require('express');
var router = express.Router();

// Controllers
var map_controller = require('../controllers/mapController');

// Map routes
router.get('/', map_controller.map_get);

module.exports = router;