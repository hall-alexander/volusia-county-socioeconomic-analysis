const {getGeoJson} = require('../src/services/ParcelService');

exports.map_get = (req, res, next) => {
    console.log(req.params);
    res.render('map', { title: "map"});
};