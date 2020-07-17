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

$.getJSON("public/geojson/blockgroups.geojson", function(data) {
    addFeatureToLayer(data);
}).fail(function(){
    console.log("Could not get inside $.getJSON");
});
    