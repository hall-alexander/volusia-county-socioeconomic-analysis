var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('This is where the map API will connect to...');
});

module.exports = router;