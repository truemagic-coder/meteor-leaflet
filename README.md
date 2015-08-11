# Leaflet for Meteor

## Purpose

To provide a Meteor package to quickly build real-time cross-platform map apps.

## Demo
Meteor Leafet Demo  |  [GitHub](https://github.com/bevanhunt/meteor-leaflet-demo)  |  [Demo](http://leaflet.meteor.com)

## Packaged Libraries
- Leaflet: 0.7.3
- Leaflet Providers: 1.1.1
- Leaflet Spin: 0.1.0
- Leaflet Marker Cluster: 0.4.0

## Roadmap
[Estimated Release Schedule](https://github.com/bevanhunt/meteor-leaflet/milestones)

## Usage
- add this package to your Meteor project
  ```bash
    meteor add bevanhunt:leaflet
  ```

- add a map div to html
  ```html
    <div id='map'></div>
  ```

- in Javascript client-side code define Leaflet map with default image path

  ```javascript
    if (Meteor.isClient) {
      L.Icon.Default.imagePath = 'packages/bevanhunt_leaflet/images';
      var map = L.map('map');
    }
  ```

- in Javascript client-side code use a free tile provider [optional] - [Read Docs](https://github.com/leaflet-extras/leaflet-providers)

  ```javascript
    if (Meteor.isClient) {
      L.tileLayer.provider('Thunderforest.Outdoors').addTo(map);
    }
  ```

- in Javascript client-side code use Leaflet Spin [optional]

  - to start the loading spinner
    ```javascript
      if (Meteor.isClient) {
        map.spin(true);
      }
    ```

  - to stop the loading spinner
    ```javascript
      if (Meteor.isClient) {
        map.spin(false);
      }
    ```

- in Javascript client-side code user Leaflet Marker Cluster [optional] to add marker cluster
    ```javascript
      if (Meteor.isClient) {
        var markers = new L.MarkerClusterGroup();
        markers.addLayer(new L.Marker([51.5, -0.09]));
        map.addLayer(markers);
      }
    ```

## GeoJSON Conversion
I suggest the free web service - [Orge Web Service](http://ogre.adc4gis.com/)

## License
MIT/X11
