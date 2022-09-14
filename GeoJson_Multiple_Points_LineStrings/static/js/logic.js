// ### ADDITIONAL MAP LAYERS ###

    // Create the map object with center and zoom level.
    // 1) Change the geographical center of the map to the geographical center of the Earth and set the zoom level as follows:
          // let map = L.map('mapid').setView([30, 30], 2);


// ### ADD ADDITIONAL TILE LAYER ###
// We create the dark view tile layer that will be an option for our map.
// 1.2.1) First, we'll add another tileLayer() to create a dark map. 
// 1.2.2) If you don't have the tileLayer() code for the dark map, add the following code block below the code for the streets map.
// 2.2.1) Don't add the addTo(map) at the end of your streets or dark tileLayer() code. We'll add it later.
// 3.2.2) At this point, your logic.js file should look like the following:



let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});


    // tileLayer()
let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}',{
attribution: 'Map data &copy;<a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 18,
accessToken: API_KEY
        });


// ### CREATE A BASE LAYER THAT HOLDS BOTH MAPS. ###
// 4.2.1) Next, we'll add both map variables to a new variable, baseMaps. This variable will be used as our base layer, which we'll reference later.
// 5.2.1) After the code for the dark map, add the following variable to reference the base layer.
// 6.2.1) In the base layer code, the Street and Dark keys set the text, which we'll see in the index.html file, while the corresponding values reference the tile layers. 
    // Street and Dark can be used to toggle between styles in the index.html file and will look like the following: 

let baseMaps = {
  Light: light,
  Dark: dark
};
    // Add tileLayer to the map     With one Layer:  
          
        // streets.addTo(map);


// ### MODIFY THE MAP OBJECT ### 
// 7.2.1) Modify the map object to change the center and zoom level, and add the base layer with the default map. 
    //For the map object, we won't use the setView() method; instead, we'll apply the alternative method that we used earlier in this module.          
    // An alternative to using the setView()method is to modify each attribute in the map object using the curly braces notation as follows:
// 8.2.1) Add the following code after the base layer code:

let map = L.map("mapid", {
  center: [40.7, -94.5],
  zoom: 4,
  layers: [dark]
});

// ### CHANGE THE LINE COLOR
// Create a style for the lines.
let myStyle = {
  color: "#ffffa1",
  weight: 2
}


// ### PASS OUR MAP LAYERS INTO OUR LAYER CONTROL AND ADD THE LAYERS TO THE MAP
// 9.2.1) To complete the code for the map layers, use the Leaflet control.layers, which will control the layers we'll see on the map. 
// 10.2.1) When creating the Layers Control, the argument passed, baseMaps, is the base layer object, which will allow the two different map styles to be shown on the index.html file. The Layers Control will look like the following before it is clicked to show the Street and Dark options:    
//Add the following code below the map object:

L.control.layers(baseMaps).addTo(map);


    // Access the airport GeoJSON URL through GitHub
    // 2) Next, we'll access the majorAirports.json file on GitHub with the following airportData variable. Your URL may be different, but it should begin with https://raw.githubusercontent.com.
    // 3) Add the following code after your tileLayer() method:
        // NOTE
        // Having the tileLayer() method before accessing large datasets ensures that the map gets loaded before the data is added to it.


let torontoData = "https://raw.githubusercontent.com/Sean-Rowe5280/Mapping_GeoJSON/main/torontoRoutes.json";


// SKILL DRILL
// Edit the L.geoJSON() layer so that it displays the following:

// The default map layer as night navigation with day navigation as another option.

// The airline routes are in light yellow with a weight of 2.

// Each airline route has a popup marker that shows the airline code and destination.

// Your map should look like the following: 

// ### GRABBING OUR GEOJSON DATA. ###
d3.json(torontoData).then(function(data) {
  console.log(data);
// ### CREATING A GEOJSON LAYER WITH THE RETRIEVED DATA ###.
L.geoJSON(data, {
  // color: 'yellow',
  // weight: 2,
  onEachFeature:function(feature,layer) {
    layer.bindPopup('<h2>'+ 'Airport code: '+ feature.properties.airline+'</h2><hr><h3>'+'Airport: '+feature.properties.dst +'</h3>')
    }
}).addTo(map);
});

