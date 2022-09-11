
// 1) Add console.log to check to see if our code is working.
console.log("working");

// 2) Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);


//3) We create the tile layer that will be the background of our map.
    
    // To achieve map syle with dark circle:

        //let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}');


        // let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}',{
            attribution: 'Map data &copy;<a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            accessToken: API_KEY
        });

    


// 4) Add a Marker to the Map

        // var marker = L.marker([51.5, -0.09]).addTo(map);


    // We're going to edit this line of code with the latitude and longitude for Los Angeles, California, and add it to our logic.js file that we used to create a simple map.
    // Add the following line of code before our tileLayer()code

        // let marker = L.marker([34.0522, -118.2437]).addTo(map);

// 5) Add a Circle to the Map
    
    // To change the marker on our
        
        // L.circle([34.0522, -118.2437], {
        //     radius: 100
        //  }).addTo(map);
   
    // When using the circle() function, the default is just a small dot on the map, but we want to adjust the radius so that it's bigger and easier to see. 
        //The radius for the circle() function is measured in meters.       
        // Copy the code for the circle function and replace it with the marker() function we used previously. We're also going to zoom in to a level of 14 on the setView() method. After editing your logic.js file, it should look like the following:

    // Alternatively, we can create a circle using the circleMarker() function
        //The circleMarker() function measures the radius of the circle in pixels, with the default radius set at 10 pixels.

        // L.circleMarker([34.0522, -118.2437]).addTo(map);


   
// Add a marker to the map for Los Angeles, California.
    // Can change style of the marker:
let marker = L.circle([34.0522, -118.2437], {
    radius: 300,
    color: "black",
    fillcolor:'#ffffa1'
 }).addTo(map);

// 6)The we add our 'streets' tile layer to the map.
streets.addTo(map);
