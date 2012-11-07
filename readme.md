# Leaflet for Meteor

[Leaflet.js](http://leafletjs.com/), a Javascript library for mobile-friendly interactive maps. 

## How to install 
1. npm install -g meteorite (if not already installed)
2. mrt add leaflet
3. write the map code in Template.myTemplate.rendered
4. set in your client code the default image path 
5. enclose the map div in your template with the constant tag 

step 4 
```javascript
L.Icon.Default.imagePath = 'packages/leaflet/images'
```

step 5
```html
{{#constant}}<div id="map">{{/constant}} 
```

## Plugins
If you want to add Leaflet plugins to your project - include them in your client folder - I prefer using the client/lib folder.

## Demo
Meteor Leafet Demo  |  [GitHub](http://leaflet.meteor.com)  |  [Demo](https://github.com/bevanhunt/meteor-leaflet-demo)