

console.log("working");


let map = L.map('mapid').setView([40.7, -94.5], 4);


let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}',{
attribution: 'Map data &copy;<a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 18,
accessToken: API_KEY
        });

    

// Get data from cities.js
let cityData = cities;




// Loop through the cities array and create one marker for each city.
cityData.forEach(city=>{
    console.log(city)
    L.circle(city.location,{radius:city.population/10}).bindPopup('<h2>'+ city.city + ', '+ city.state+'</h2><hr><h3>Population: ' + city.population.toLocaleString() +'</h3>').addTo(map);
});


// 6)The we add our 'streets' tile layer to the map.

streets.addTo(map);