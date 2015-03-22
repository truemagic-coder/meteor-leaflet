# Leaflet for Meteor

[Leaflet.js](http://leafletjs.com/), a Javascript library for mobile-friendly interactive maps. 

Packaged Files:
- Leaflet: 0.7.3 (stable at 2015-03-21)
- Leaflet Providers: 1.0.23 (stable at 2015-03-22)

## Demo
Meteor Leafet Demo  |  [GitHub](https://github.com/bevanhunt/meteor-leaflet-demo)  |  [Demo](http://leaflet.meteor.com)

## How to install 
1. meteor add beavanhunt:leaflet
2. write the map code in Template.myTemplate.rendered
3. set in your client code the default image path 
4. optional - set your free tile provider - [Read Docs](https://github.com/leaflet-extras/leaflet-providers)

step 3 
```javascript
L.Icon.Default.imagePath = 'packages/bevanhunt_leaflet/images';
```

step 4 - example
```javascript
L.tileLayer.provider('Stamen.Watercolor').addTo(map);
```

## Plugins
If you want to add Leaflet plugins to your project - include them in your client folder - I prefer using the client/lib folder.

## GeoJSON 
I suggest the free web service - [Orge Web Service](http://ogre.adc4gis.com/) 

## License
MIT/X11
