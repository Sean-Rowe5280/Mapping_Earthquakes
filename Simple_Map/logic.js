// 1) Add console.log to check to see if our code is working.
        //The console.log() function with the phrase "working" inside the parentheses will help us confirm that our logic.js file is being accessed in the console on Chrome.

        // console.log("working");



// 2) Add a Map Object

    // 2.1) An alternative to using the setView() method is to modify each attribute in the map object using the curly braces notation as follows:
        // Create the map object with a center and zoom level.
            // method is useful when we need to add multiple tile layers, or a background image of our map(s), which we will do later in this module.

            //    let map = L.map("mapid", {
            //    center: [
            //    40.7, -94.5
            //    ],
            //    zoom: 4
            //    });

    // 2.2) Create the map object with a center and zoom level.

    // We're assigning the variable map to the object L.map(), and we'll instantiate the object with the given string 'mapid'.
    // The mapid will reference the id tag in our <div> element on the index.html file.
    // The setView() method sets the view of the map with a geographical center, where the first coordinate is latitude (40.7) and the second is longitude (-94.5). We set the zoom level of "4" on a scale 0–18.

            //      let map = L.map('mapid').setView([40.7, -94.5], 4);

// 3) Add a Tile Layer for Our Map

    // 3.1) We create the tile layer that will be the background of our map.

        // let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        //     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        //     maxZoom: 18,
        //     id: 'mapbox/streets-v11',
        //     tileSize: 512,
        //     zoomOffset: -1,
        //     accessToken: API_KEY
        // });


// Let's break down what's happening in this code block:

        // We assign the tileLayer() method, as shown in the Quick Start Guide's "Setting up the map" section to the variable streets. Leaflet doesn't provide a tile layer. 
            // Instead, it offers various tile layer APIs.
        // The following URLs appear in the parentheses of our tileLayer() method:
                // The API URL with a reference to the accessToken
                // The OpenStreetMap URL inside the curly braces of our tileLayer() method
        // We add the maxZoom attribute and assign it a value of 18.
        // We add the id attribute and assign it mapbox/streets-v11, which will show the streets on the map.
        // We add the accessToken attribute and assign it the value of our API_KEY.
        // Finally, we call the addTo() function with our map object, map on our graymap object tile layer. The addTo() function will add the graymap object tile layer to our let map.
        // To change the map's style, change the map id using the list of Mapbox ids below:

        // mapbox/streets-v11
        // mapbox/outdoors-v11
        // mapbox/light-v10
        // mapbox/dark-v10
        // mapbox/satellite-v9
        // mapbox/satellite-streets-v11



// 3.2) Use the Mapbox Styles API for the above(replace)
    // We create the tile layer that will be the background of our map.

        // let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        // attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        //     maxZoom: 18,
        //     accessToken: API_KEY
        // });

// 4) Then we add our 'graymap' tile layer to the map.
        
        // streets.addTo(map);


// ALL TOGETHER:

// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy;<a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// The we add our 'streets' tile layer to the map.
streets.addTo(map);