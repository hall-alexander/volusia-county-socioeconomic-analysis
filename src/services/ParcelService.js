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

async function getCommercialGeoJson() {
    let geojson;
    try {
        const [results, meta] = await sequelize.query(`
        with parid_found as (
            select distinct(s.parid), cp.adrno, cp.adrstr, cp.adrsuf, cp.city
            from volusia.commercial_properties cp
            left join volusia.situs s
            on s.adrstr=cp.adrstr and s.adrno=cp.adrno and s.adrsuf=cp.adrsuf),
        valid_parid as (select parid
            from parid_found 
            where parid is not null)
        select st_asgeojson(st_transform(gp.geom, 4326))
        from volusia.gis_parcels gp, valid_parid vp
        where gp.altkey=vp.parid;`);

        geojson = results;
       
    } catch(e) {
        geojson = null;
        console.log("getCommercialGeoJson() failed. Check if commercial property table exists.")
    }

    return geojson;
    
}

module.exports.getGeoJson = getGeoJson;
module.exports.getAllGeoJson = getAllGeoJson;
module.exports.getCommercialGeoJson = getCommercialGeoJson;