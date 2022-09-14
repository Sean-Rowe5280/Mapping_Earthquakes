// ### MAPPING POLYGONS ###
  
  // In the JSON data, we can see that the geometry type is "Polygon." 
  // To form a POLYGON, the coordinates have to be an ARRAY of linear ring (LinearRing) coordinate arrays. 
  // A LinearRing is a LineString with at least four or more sets of coordinates, where the starting and end points have the same coordinates.

// MULTIPLE LINEARRINGS:
  // In addition, the polygon can have multiple LinearRings, each with a different shape. 
  // The outer boundary of the polygon is one LinearRing shape, and there can be one or more LinearRing shapes inside that polygon. Consider the following solid polygon:

// SOLID POLYGON:
// A solid polygon, like the neighborhood boundaries we'll map. 
// There are no LinearRing shapes inside. 
// However, if we add boundaries around the livable areas of a neighborhood with two bodies of water, like a lake or pond, then the polygon might look like the following, where the blue areas represent those bodies of water. This polygon would have multiple LinearRing shapes inside the outer boundary LinearRing:

// 1) CHANGE THE LAYERS
// We'll use the Streets and Satellite Streets map styles, so we'll need to change the variables and the API code for each style:

// Use streets as the variable for the Streets style.
// Use satelliteStreets as the variable for the Satellite Streets style.

// SKILL DRILL
// Edit your logic.js file with the following changes:
    // Make the lines blue, with a weight of 1.
      // CREATE A STYLE VARIABLE TO ADD TO THE MAP. WEIGHT: 1, COLOR:"BLUE"
    // Make the polygon fill color yellow.
      // FILLCOLOR:"YELLOW"
    // Add a popup to show each neighborhood.
      // USE ONEACHFEATURE METHOD(using anonymous function) LAYER.BINDOPOUP(FEATURE.GEOMETRY or PROPERTY. what your looking for)
    // Make the default map layer Streets with Satellite Streets as the second option.
    // Your map should look like the following: 



// MULTIPLE MAP LAYERS

let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});


let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/tiles/{z}/{x}/{y}?access_token={accessToken}',{
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
  center: [43.7, -79.3],
  zoom: 11,
  layers: [satelliteStreets]
});

// CREATE STYLE FOR THE LINES

let myStyle = {
  color: "blue",
  fillColor:"yellow",
  fillOpacity: 0.2,
  weight: 1,
  
}


// PASS OUR MAP LAYERS INTO OUR LAYER CONTROL AND ADD THE LAYERS TO THE MAP 

L.control.layers(baseMaps).addTo(map);


// ACCESS THE  GEOJSON URL THROUGH GITHUB ###
   
let torontoHoods = "https://raw.githubusercontent.com/Sean-Rowe5280/Mapping_GeoJSON/main/torontoNeighborhoods.json";



// GRABBING OUR GEOJSON DATA. 

d3.json(torontoHoods).then(function(data) {
  console.log(data);

// ### OVERLAY ###
// var overlayMaps = {
//   "Cities": cities

// CREATING A GEOJSON LAYER WITH THE RETRIEVED DATA
L.geoJSON(data,{
  style: myStyle,
  onEachFeature: function(feature,layer){
    layer.bindPopup('<h2>'+ 'Neighborhood: '+ feature.properties.AREA_NAME+'</h2><hr>')
  }
}).addTo(map);
});
  // L.geoJSON(data, {
  // color: 'yellow',
  // weight: 2,
  // onEachFeature:function(feature,layer) {
  //   layer.bindPopup('<h2>'+ 'Airport code: '+ feature.properties.airline+'</h2><hr><h3>'+'Airport: '+feature.properties.dst +'</h3>')
  //   }

// SKILL DRILL
// Edit your logic.js file with the following changes:
    // Make the lines blue, with a weight of 1.
    // Make the polygon fill color yellow.
    // Add a popup to show each neighborhood.
    // Make the default map layer Streets with Satellite Streets as the second option.
    // Your map should look like the following: 