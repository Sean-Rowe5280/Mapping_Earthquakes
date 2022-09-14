// 13.6.3
// ### Add Color and a Popup for Each Earthquake ###




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





// ### ADD STYLE TO THE EARTHQUAKE DATA(13.6.2) ### LOGICSTEP2.JS
    // REWIND: For the pointToLayer callback function, the basic syntax for adding functionality to a marker is:
            // L.geoJSON(data, {
            //   pointToLayer: function(feature, latlng) {
            //   return L.marker(latlng);
            //   }
            //   });
    // USE CIRCLEMARKER() INSTEAD OF MARKER
    // CREATE A FUNCTION styleInfo()-WILL CONTAIN ALL THE STYLE PARAMETERS FOR EACH EATHQUAKE PLOTTED. USE WITHIN THE D3.json() METHOD TO RETRIEVE THE DATA
            // In the styleInfo() function, we passed the argument feature to reference each object's features.
            // The opacity and fillOpacity are set at 1, the stroke is "true," and the weight is 0.5.
            // The fillColor is light orange, and the color is "#000000" (black).
            // The getRadius() function retrieves the earthquake's magnitude. Next, we'll create the getRadius() function to calculate the radius of the circle from the magnitude.
    // CREATE A getRadius() FUNCTION TO CALCULATE THE RADIUS FOR EACH EARTHQUAKE

  // ### ADD COLOR AND POPUP FOR EACH EARTHQUAKE(13.6.3) ###
        // CREATE A FILL-COLOR RANGE FOR THE MAGNITUDE
                // In the styleInfo() function, our fillColor was set with fillColor: "#ffae42". 
                // We'll replace the hexadecimal color code with the function getColor(). 
        // WRITE GETCOLOR() FUNCTION
                // WRITE A CONDITIONAL EXPRESSION WITH LOGICAL OPERATORS FOR THE MAGNITUDES
                // ADD BELOW THE STYLEINFO FUNCTION AND ABOVE THE RADIUS FUNCTION
        // ADD THE POPUP FOR THE MAGNITUDE AND LOCATION
                // USE THE ONEACHFEATURE
                   



// ### ADD EARTHQUAKE DATA AS AN OVERLAY ### LOGICSTEP3.JS
// NOTE:
// The base layers or tile layers, the Streets and Satellite, are mutually exclusive, and only one can be visible at a time on our map. 
// Whereas, overlays are anything that you want to add to the map, which are "laid over" all the base layers and are visible all the time.

// ACCESS THE  GEOJSON URL THROUGH GITHUB
let quakeData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

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
  layers: [streets]
});

    // In the styleInfo() function, we passed the argument feature to reference each object's features.
    // The opacity and fillOpacity are set at 1, the stroke is "true," and the weight is 0.5.
    // The fillColor is light orange, and the color is "#000000" (black).
    // The getRadius() function retrieves the earthquake's magnitude. Next, we'll create the getRadius() function to calculate the radius of the circle from the magnitude.


// PASS OUR MAP LAYERS INTO OUR LAYER CONTROL AND ADD THE LAYERS TO THE MAP 
L.control.layers(baseMaps).addTo(map);


// Grabbing our GeoJSON data.
    // 4) Next, we'll add the d3.json() method, which returns a promise with the then() method and the anonymous function().

        // Inside the d3.json() method we'll add the airportData variable.
        // Inside the anonymous function() we'll add the data parameter, which references the airportData.
        // We'll pass this data to the L.geoJSON() layer and then it'll be added to the map with addTo(map).

d3.json(quakeData).then(function(data) {
console.log(data);

// CREATE STYLE FUNCTION-styleInfo()
    // This function returns the style data for each of the earthquakes we plot on
    // the map. We pass the magnitude of the earthquake into a function
    // to calculate the radius: Next, we'll create the getRadius() function to calculate the radius of the circle from the magnitude.
function styleInfo(feature) {
  return {
    opacity: 1,
    fillOpacity: 1,
    fillColor: getColor(feature.properties.mag),
    color: "#000000",
    radius: getRadius(feature.properties.mag),
    stroke: true,
    weight: 0.5
  };
}

// This function determines the color of the circle based on the magnitude of the earthquake.
function getColor(magnitude) {
  if (magnitude > 5) {
    return "#ea2c2c";
  }
  if (magnitude > 4) {
    return "#ea822c";
  }
  if (magnitude > 3) {
    return "#ee9c00";
  }
  if (magnitude > 2) {
    return "#eecc00";
  }
  if (magnitude > 1) {
    return "#d4ee00";
  }
  return "#98ee00";
}

// CREATE RADIUS FUNCTION-getRadius()
    // This function determines the radius of the earthquake marker based on its magnitude.
    // Earthquakes with a magnitude of 0 will be plotted with a radius of 1.
function getRadius(magnitude) {
  if (magnitude === 0) {
  return 1;
  }
  return magnitude * 4;
}
// Creating a GeoJSON layer with the retrieved data.
L.geoJSON(data, {

// We turn each feature into a circleMarker on the map.
  pointToLayer: function(feature, latlng) {
      console.log(data);
      return L.circleMarker(latlng);
    },
  
// We set the style for each circleMarker using our styleInfo function.
style: styleInfo,

// We create a popup for each circleMarker to display the magnitude and
//  location of the earthquake after the marker has been created and styled.

  onEachFeature: function(feature, layer) {
  layer.bindPopup("Magnitude: " + feature.properties.mag + "<br>Location: " + feature.properties.place);
}
}).addTo(map);

})



