# Mapping_Earthquakes

Earthquake URL: https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson

## Overview
The following map visualizes Earthquake data from the US Geological Survey(usgs) over the last 7 years. 

To present this data Leaflet, Mapbox and JavaScript were utilized. Three base layers(Mapbox tile layers) and 3 overlays were added to display earthquakes, tectonic plates and major earhtquakes. The base layers(upper right) consist of 3 different views to select from each displaying a different style map. The option for this map are a darkview, a satellite view and an outdoor view with elevation lines.
 
### Overlays
To display data from the USGS 3 overlay views were added to the map. 

#### Earthquakes
Using Leaflet and Mapbox in our the JavaScript code we mapped each earthquakes location around the globe adding a circle marker at each latitude/longitude. The size of each marker is scaled to the magnitude of the quake, larger markers reflect greater magnitude earthquakes and vice versa. The color of each marker was also defined based on the magnitude and a legend(bottom right) was added for the colors. A popup was added to each marker to display the specific magnitude and location details. 






![image](https://user-images.githubusercontent.com/107006216/190502431-683abc96-cd5a-4c1b-b706-4301697de37a.png)

