var express = require('express');
var router = express.Router();

// Controllers
var parcels_controller = require('../controllers/parcelsController');

// Routes
router.get('/', parcels_controller.parcel_get);
router.get('/commercial', parcels_controller.parcel_get_commercial);
router.post('/', parcels_controller.parcel_post);

module.exports = router;