// Map GeoJSON Point Type

// NOTE
// Please note that the coordinates appear in reverse order [-122.375, 37.61899948120117], compared to their order in the setView() method. 
// This is because the GeoJSON data coordinates are set with the first parameter as X (longitude) and the second parameter as Y (latitude), as documented in the GeoJSON Standard. 
// (Links to an external site.) The L.geoJSON()layer reverses the coordinates to plot them on the map.


// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.5, -122.5], 10);


// Grabbing our GeoJSON data.

        // L.geoJSON(sanFranAirport).addTo(map);



let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}',{
attribution: 'Map data &copy;<a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 18,
accessToken: API_KEY
        });

    


// 6)The we add our 'streets' tile layer to the map.

streets.addTo(map);

//Bind a Popup to the Marker

        // To display data on a map with a popup marker, we have to bind the marker with the GeoJSON layer, L.geoJSON(), using a callback function.
        // Our options to add data to a marker are to use the callback functions:
          // pointToLayer 
          // onEachFeature

// The pointToLayer Function:

          L.geoJson(data, {
            pointToLayer: function(feature, latlng) {
              return L.marker(latlng);
             }
          });

          // 1. We add two arguments: the data and the pointToLayer callback function.
          // 2. The data will be our sanFranAirport data.
          // 3. For the pointToLayer callback function, we are first going to call a function() where we pass each GeoJSON feature as feature, and its latitude and longitude as latlng.
          // 4. Then we add a marker for each feature with a latitude and longitude in the pointToLayer callback function argument by using return L.marker(latlng).

//### if we open the console on our developer tools, we will see that the feature is the JavaScript object geometry and properties of our GeoJSON object.##//


  // To add a popup marker, we need to use the bindPopup() method to the pointToLayer callback function
          // Add the city to the popup marker. 
              //In our logic.js file, after the return L.marker(latlng) in our L.geoJSON() layer, 

              // return L.marker(latlng).bindPopup("<h2>" + feature.properties.city + "</h2>")

                  // Grabbing our GeoJSON data.

                  // L.geoJSON(sanFranAirport, {
                    // We turn each feature into a marker on the map.
                    // pointToLayer: function(feature, latlng) {
                      // console.log(feature);
                      // return L.marker(latlng).bindPopup("<h2>" + feature.properties.city + "</h2>");
                      //   }
                  
                  // }).addTo(map);


// The onEachFeature Function
          // When we use the onEachFeature callback function we can add a popup marker for each feature and add data from the properties of the JavaScript object



                    // L.geoJSON(sanFranAirport, {
                    // onEachFeature: function(feature, layer) {
                    // console.log(layer);
                    // layer.bindPopup();

                    // }
                    // });

                  // First, we add two arguments: the data and the onEachFeature callback function.
                  // The data will be our sanFranAirport data.
                  // With the onEachFeature callback function we are first going to call an anonymous function, function(), 
                      // where we pass each GeoJSON feature as feature, and any properties to the second argument, layer.



//return L.marker(latlng).bindPopup('<h2>'+ 'Airport code: '+ feature.properties.faa+'</h2><hr><h3>'+'Airport name: '+feature.properties.name+'</h3>')

    // SKILL DRILL
    // Edit your logic.js to create a popup marker for the San Francisco Airport on the outdoor map. When you click on the popup, it will display the airport code and name of the airport.   

L.geoJSON(sanFranAirport, {
onEachFeature: function(feature, layer) {
console.log(layer);
layer.bindPopup('<h2>'+ 'Airport code: '+ feature.properties.faa+'</h2><hr><h3>'+'Airport name: '+feature.properties.name+'</h3>');
}
}).addTo(map);
