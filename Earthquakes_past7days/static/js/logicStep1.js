// 13.6.2
// ### Add Style to the Earthquake Data ###




// ### MAPPING EARTHQUAKES ###
// ### USING JSON DATA FROM URL(13.6.1) ### LOGICSTEP1.JS

//LINKS:
// https://earthquake.usgs.gov/
  // https://www.usgs.gov/programs/earthquake-hazards/earthquakes
    // https://earthquake.usgs.gov/earthquakes/feed/
        // https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php
          // https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson
              // USE THE LINKS ON THE RIGHT OF THE PAGE TO GET A URL FOR JSON BELOW:
               // https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson


// MULTIPLE MAP LAYERS

let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});


let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}',{
attribution: 'Map data &copy;<a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 18,
accessToken: API_KEY
        });


// CREATE A BASE LAYER THAT HOLDS BOTH MAPS.

let baseMaps = {
  "Streets": streets,
  "Satellite Streets": satelliteStreets
};
    

// MODIFY THE MAP OBJECT


let map = L.map("mapid", {
  center: [39.5, -98.5],
  zoom: 5,
  layers: [satelliteStreets]
});

// CREATE STYLE FOR THE LINES

// let myStyle = {
//   color: "blue",
//   fillColor:"yellow",
//   fillOpacity: 0.2,
//   weight: 1,
  
// }

// PASS OUR MAP LAYERS INTO OUR LAYER CONTROL AND ADD THE LAYERS TO THE MAP 

L.control.layers(baseMaps).addTo(map);


// ACCESS THE  GEOJSON URL THROUGH GITHUB ###
   
let quakeData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";



// GRABBING OUR GEOJSON DATA. 

d3.json(quakeData).then(function(data) {
  console.log(data);


// CREATING A GEOJSON LAYER WITH THE RETRIEVED DATA

L.geoJSON(data).addTo(map);
});


