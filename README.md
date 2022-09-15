# Mapping_Earthquakes

Earthquake URL: https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson

## Overview
The following map visualizes Earthquake data from the US Geological Survey(usgs) over the last 7 years. 

To present this data Leaflet, Mapbox and JavaScript were utilized. Three overlay layers were added to the map to display earthquakes, tectonic plates and major earhtquakes data. Additionally three base layer views were added providing 3 different map styles to choose from; a darkview, a satellite view and an outdoor view with elevation lines.
 
 ![image](https://user-images.githubusercontent.com/107006216/190502431-683abc96-cd5a-4c1b-b706-4301697de37a.png)
 
### Overlays
In constrast to the base layers any or all of the overlays can be selected and displayed simulataneously.

#### Earthquakes
This overlay mapped the location of each earthquake with a circle marker at each latitude/longitude. The size of each marker is scaled to the magnitude of the quake, larger markers reflect greater magnitude earthquakes and vice versa. The color of each marker was also defined based on the magnitude and a legend(bottom right) was added. A popup was added to each marker to display the specific magnitude and location details. 

### Tectonic Plates
The tectonic plates overlay renders the fault lines into our map with a red line.

### Major Earthquakes
In addition to the Earthquake data in the first overlay we mapped out Major earthquakes, those with a mgnitude greater than 4.








