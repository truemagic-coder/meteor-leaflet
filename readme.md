# Leaflet for Meteor

[Leaflet.js](http://leafletjs.com/), a Javascript library for mobile-friendly interactive maps. 

## How to install 
1. npm install meteorite (if not already installed)
2. git clone https://github.com/bevanhunt/meteor-leaflet.git 
3. cd meteor-leaflet
4. cp -r leaflet your_meteor_project/public 
5. cd your_meteor_project
6. mrt add leaflet
7. write the map code in Template.myTemplate.rendered
8. set in your client code the default image path 
9. enclose the map div in your template with the constant tag 

step 9 
```javascript
L.Icon.Default.imagePath = '../../leaflet'
```

step 10
```html
{{#constant}}<div id="map">{{/constant}} 
```

## Demo
http://leaflet.meteor.com

## Notes: 
1. Step 9 - the file setting the path is relative to the leaflet [image] folder - public doesn't count as a folder in the path
2. The Leaflet CSS and JS are in this package
3. A better demo with source is coming soon