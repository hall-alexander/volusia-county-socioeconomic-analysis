const { sequelize } = require("../persistence/db");

async function getGeoJson(data) {
    let geojson;
    try {
        const [results, meta] = await sequelize.query(`
        select st_asgeojson(st_transform(geom, 4326))
        from volusia.gis_parcels
        where altkey=${data} limit 1;`);

        geojson = results[0]["st_asgeojson"];
       
    } catch(e) {
        geojson = null;
        console.log("getGeoJson() failed. Check the input for valid parcel ID.")
    }

    console.log(geojson);
    return geojson;
    
}

async function getAllGeoJson() {
    let geojson;
    try {
        const [results, meta] = await sequelize.query(`
        select st_asgeojson(st_transform(geom, 4326))
        from volusia.gis_parcels;`);

        geojson = results;
       
    } catch(e) {
        geojson = null;
        console.log("getAllGeoJson() failed.")
    }

    return geojson;
    
}

module.exports.getGeoJson = getGeoJson;
module.exports.getAllGeoJson = getAllGeoJson;