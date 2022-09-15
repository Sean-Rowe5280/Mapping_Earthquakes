# Mapping_Earthquakes

## Overview
The following map visualizes Earthquake data from the US Geological Survey(usgs) over the last 7 years. 

![image](https://user-images.githubusercontent.com/107006216/190522466-7d422518-de1e-49a0-b101-5eb81499939c.png)

To present this data Leaflet, Mapbox and JavaScript were utilized. Three overlay layers were added to the map to display earthquakes, tectonic plates and major earhtquakes data. Additionally three base layer views were added providing 3 different map styles to choose from; a darkview, a satellite view and an outdoor view with elevation lines.
 
### Overlays
In constrast to the base layers any or all of the overlays can be selected and displayed simulataneously.

#### Earthquakes
This overlay mapped the location of each earthquake over the last 7 years with a circle marker at each latitude/longitude. The size of each marker is scaled to the magnitude of the quake, larger markers reflect greater magnitude earthquakes and vice versa. The color of each marker was also defined based on the magnitude and a legend(bottom right) was added. A popup was added to each marker to display the specific magnitude and location details. 

### Tectonic Plates
The tectonic plates overlay mapped the fault lines into our map with a red line.

### Major Earthquakes
In addition to the Earthquake data in the first overlay we mapped out all major earthquakes, those with a magnitude greater than 4.5 and created this seperate overlay.

## Earthquakes
![image](https://user-images.githubusercontent.com/107006216/190522654-396604e8-9573-433e-a2d8-421a3f440f51.png)


## Major Earthquakes
![image](https://user-images.githubusercontent.com/107006216/190522563-724b3d01-3ac6-49b8-bd08-b36c62479f09.png)


## Tectonic Plates
![image](https://user-images.githubusercontent.com/107006216/190522369-d2a84951-8b42-4801-ae24-a1773f3c1398.png)


### Resources and Tools
- Earthquake URL: https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson
- JavaScript/HTML
- Leaflet
- Mapbox





