var mymap;
var parcelLayer;

mymap = new L.map('mapid', {
    preferCanvas: true //for performance when loading all parcel geometries
});
mymap.setView([29.198, -81.08], 13)
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibGV0aGFsY2FmZmVpbmUiLCJhIjoiY2tiemlicjByMWEyeTJ2bnQxaDJoMnUzayJ9.YE5cT09nbl3jCO45Oh8Qog'
}).addTo(mymap);

parcelLayer = L.geoJSON().addTo(mymap);

function makeAjaxGetCall(url) {
    return $.ajax({
        url: url,
        method: "GET",
        contentType: 'application/json',
    });
}

function makeAjaxPostCall(url, data) {
    return $.ajax({
                url: url,
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({ name: data.val() })
            });
}

function addFeatureToLayer(geojson) {
    if (mymap.hasLayer(parcelLayer)) {
        parcelLayer.addData(geojson);
    }
    else {
        parcelLayer = L.geoJSON().addTo(mymap);
        parcelLayer.addData(geojson);
    }
}

$('#formParcel').on('submit', function(event){
    event.preventDefault();

    var parcelInput = $('#parcelId');

    console.log("Client requested parcel ID: " + parcelInput.val());
    var geojson = makeAjaxPostCall('/parcels', parcelInput);
    parcelInput.val('');
    
    geojson.then(function(response){
        console.log(response);
        var obj = JSON.parse(response);
        addFeatureToLayer(obj);
    });
});

$('#clearMap').on('click', function(event){
    event.preventDefault();
    console.log("Clear layers");
    parcelLayer.remove();
});

$('#plotAllParcels').on('click', function(event){
    event.preventDefault();
    console.log("Plot all parcels");
    var geometries = makeAjaxGetCall('/parcels');
    geometries.then(function (response) {
        const array = response;
        array.forEach(function(item) {
            try {
                addFeatureToLayer(JSON.parse(item["st_asgeojson"]));
            }
            catch {
                console.log(item);
            }
        });
    });
});

$('#plotBlockGroups').on('click', function(event){
    event.preventDefault();

    function getGeoJson() {
        let url = "https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/Tracts_Blocks/MapServer/8/query?where=STATE%3D+%2712%27+AND+COUNTY+%3D+%27127%27&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=*&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&resultOffset=&resultRecordCount=&queryByDistance=&returnExtentsOnly=false&datumTransformation=&parameterValues=&rangeValues=&f=geojson"

        var response = fetch(url).then(response => {
            return response.json();
        });

        response.then(data => {
            data.features.sort((a, b) => parseInt(a.properties.BLKGRP) - parseInt(b.properties.BLKGRP));
            console.log("sorted");
            data.features.forEach(item => {
                console.log(item.properties.BLKGRP + " " + item.properties.TRACT);
            });
        });
    }

    function getBlockGroupData() {
        var key = '125d1b7224cadc62c574b7c23b49e700d740bbb4';
        var getParams='NAME,B19001_001E';
        let url = `https://api.census.gov/data/2018/acs/acs5?get=${getParams}&for=block%20group:*&in=state:12%20county:127%20tract:*&key=${key}`;

        var response = fetch(url).then(response => {
                return response.json();
            });
        
        response.then(data => {
            var dict = {};
            data[0].forEach((item, index) => {
                console.log(item);
                dict[item] = index;
            });

            data.sort((a, b) => parseInt(a[dict["block group"]]) - parseInt(b[dict["block group"]]));
            data.forEach(row => {
                console.log(row[dict["block group"]] + " " + row[dict["tract"]]);
            }); 
        });
    }

    function insertDataInGeoJson() {

        getGeoJson().then(data => {
            data.features.sort((a, b) => parseInt(a.properties.BLKGRP) - parseInt(b.properties.BLKGRP));
            getBlockGroupData().then(blockData => {
                var dict = {};
                blockData[0].forEach((item, index) => {
                    dict[item] = index;
                });
                blockData.sort((a, b) => parseInt(a[dict["block group"]]) - parseInt(b[dict["block group"]]));
                data.features.forEach(item => {
                    item.properties.INCOME = blockData[dict["B19001_001E"]];
                    console.log(item.properties.INCOME);
                });
            }); 
        });
    }

    getGeoJson();
    getBlockGroupData();

    function applyStyle(){

        var incomeStyle = {
            "color": "#ff7800",
            "weight": 5,
            "opacity": 0.65
        };

    }

});

$.getJSON("public/geojson/blockgroups.geojson", function(data) {
    addFeatureToLayer(data);
}).fail(function(){
    console.log("Could not get inside $.getJSON");
});
    
