// Deliverable 1: Add Tectonic Plate Data (35 points)
// Using your knowledge of JavaScript, Leaflet.js, and geoJSON data, you’ll add tectonic plate data using d3.json(), 
// add the data using the geoJSON() layer, set the tectonic plate LineString data to stand out on the map, 
// and add the tectonic plate data to the overlay object with the earthquake data.

// Deliverable 2: Add Major Earthquake Data (50 points)
// Using your knowledge of JavaScript, Leaflet.js, and geoJSON data, you’ll add major earthquake data to the map using d3.json(). 
// You'll also add color and set the radius of the circle markers based on the magnitude of earthquake, 
// and add a popup marker for each earthquake that displays the magnitude and location of the earthquake using the GeoJSON layer, geoJSON().



// Tectonic Plates URL: https://github.com/fraxen/tectonicplates
var plates="https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json"

// M4.5+ Earthquakes URL: https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson
var majorQuakes ="https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson"

// Add console.log to check to see if our code is working.
console.log("working");

// We create the tile layer that will be the background of our map.
// Del. #3) 1. Add a third map style as a tile layer object

let elevation = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

// We create the second tile layer that will be the background of our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
	center: [40.7, -94.5],
	zoom: 3,
	layers: [elevation]
});

// Create a base layer that holds all three maps.
let baseMaps = {
  "Dark": dark,
  "Satellite": satelliteStreets,
  "Elevation": elevation
};

// Del. #1) 1. Add a 2nd layer group for the tectonic plate data.
// Del. #2) 1. Add a 3rd layer group for the major earthquake data.
let allEarthquakes = new L.LayerGroup();
let allTectonicPlates = new L.layerGroup();
let majorEarthquakes = new L.layerGroup();

// Del. #1) 2. Add a reference to the tectonic plates group to the overlays object.
// Del. #2) 2. Add a reference to the major earthquake group to the overlays object.
let overlays = {
  "Earthquakes": allEarthquakes,
  "Tectonic Plates": allTectonicPlates,
  "Major Earthquakes": majorEarthquakes,
};

// Then we add a control to the map that will allow the user to change which
// layers are visible.
L.control.layers(baseMaps, overlays).addTo(map);

// Retrieve the earthquake GeoJSON data.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {

  // This function returns the style data for each of the earthquakes we plot on
  // the map. We pass the magnitude of the earthquake into two separate functions
  // to calculate the color and radius.
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

  // This function determines the color of the marker based on the magnitude of the earthquake.
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

  // This function determines the radius of the earthquake marker based on its magnitude.
  // Earthquakes with a magnitude of 0 were being plotted with the wrong radius.
  function getRadius(magnitude) {
    if (magnitude === 0) {
      return 1;
    }
    return magnitude * 4;
  }

  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data, {
    	// We turn each feature into a circleMarker on the map.
    	pointToLayer: function(feature, latlng) {
      		console.log(data);
      		return L.circleMarker(latlng);
        },
      // We set the style for each circleMarker using our styleInfo function.
    style: styleInfo,
     // We create a popup for each circleMarker to display the magnitude and location of the earthquake
     //  after the marker has been created and styled.
     onEachFeature: function(feature, layer) {
      layer.bindPopup("Magnitude: " + feature.properties.mag + "<br>Location: " + feature.properties.place);
    }
  }).addTo(allEarthquakes);

  // Then we add the earthquake layer to our map.
  allEarthquakes.addTo(map);


// Del. #2) 3. Retrieve the major earthquake GeoJSON data >4.5 mag for the week.
d3.json(majorQuakes).then(function(data) {

// 4. Use the same style as the earthquake data.
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


  
// 5. Change the color function to use three colors for the major earthquakes based on the magnitude of the earthquake.
// This function determines the color of the marker based on the magnitude of the earthquake.
// Three colors for the following magnitudes; magnitude less than 5, a magnitude greater than 5, and a magnitude greater than 6.
function getColor(magnitude) {
  if (magnitude >= 6) {
    return "#ea2c2c";
  }
  if (magnitude >= 5) {
    return "#ea2c2c";
  }
  if (magnitude < 5) {
    return "#ea822c";
  }
  
} 
  
// 6. Use the function that determines the radius of the earthquake marker based on its magnitude.
function getRadius(magnitude) {
  if (magnitude === 0) {
    return 1;
  }
  return magnitude * 4;
}

// 7. Creating a GeoJSON layer with the retrieved data that adds a circle to the map 
// sets the style of the circle, and displays the magnitude and location of the earthquake
//  after the marker has been created and styled.
L.geoJson(data, {
  pointToLayer: function(feature, latlng) {
    console.log(data);
    return L.circleMarker(latlng);
  },
  style: styleInfo,
  onEachFeature(feature,layer){
    layer.bindPopup("Magnitude: "+ feature.properties.mag + "<br>Location: " + feature.properties.place)
  }

  // 8. Add the major earthquakes layer to the map.
}).addTo(majorEarthquakes);
 


// 9. Close the braces and parentheses for the major earthquake data.
majorEarthquakes.addTo(map);

});

  // Here we create a legend control object.
let legend = L.control({
  position: "bottomright"
});

// Then add all the details for the legend
legend.onAdd = function() {
  let div = L.DomUtil.create("div", "info legend");

  const magnitudes = [0, 1, 2, 3, 4, 5];
  const colors = [
    "#98ee00",
    "#d4ee00",
    "#eecc00",
    "#ee9c00",
    "#ea822c",
    "#ea2c2c"
  ];

// Looping through our intervals to generate a label with a colored square for each interval.
  for (var i = 0; i < magnitudes.length; i++) {
    console.log(colors[i]);
    div.innerHTML +=
      "<i style='background: " + colors[i] + "'></i> " +
      magnitudes[i] + (magnitudes[i + 1] ? "&ndash;" + magnitudes[i + 1] + "<br>" : "+");
    }
    return div;
  };

  // Finally, we our legend to the map.
  legend.addTo(map);


  // Del. # 1) 3. Use d3.json to make a call to get our Tectonic Plate geoJSON data.
  d3.json(plates).then(function(tecData) {
    console.log(tecData);
    // Pass the tectonic plate data to the geoJSON() layer.
    
    L.geoJson(tecData,{
    // Style the lines with a color and weight that will make it stand out on all maps.
      color:"red",
      weight:2,
      pointToLayer: function(feature,latlng){
        console.log(tecData);
        return L.marker(latlng);
      }
    // Add the tectonic layer group variable you created in Step 1 to the map.
    }).addTo(allTectonicPlates)
    allEarthquakes.addTo(map);
  });
});