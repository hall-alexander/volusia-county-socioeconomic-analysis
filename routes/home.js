var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('home', { title: "home", message: "KRONK! Pull the lever!", flavorText: 'Wrong lever!!!' })
});

module.exports = router;