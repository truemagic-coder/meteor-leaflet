# Leaflet for Meteor

[Leaflet.js](http://leafletjs.com/), a Javascript library for mobile-friendly interactive maps. 

## How to install 
1. npm install meteorite (if not already installed)
2. git clone https://github.com/bevanhunt/meteor-leaflet.git 
3. cd meteor-leaflet
4. cp -r leaflet your_meteor_project/public 
5. ditto styles/leaflet.css your_meteor_project/client/styles/leaflet.css
6. cd your_meteor_project
7. mrt add leaflet
8. write the map code in Template.myTemplate.rendered
9. set in your client code the default image path
10. enclose the map div in your template with the constant tag 

step 9
```javascript
L.Icon.Default.imagePath = '../../leaflet'
```

step 10
```html
{{#constant}}<div id="map">{{/constant}} 
```

## Notes: 
Meteor/Meteorite packages only allow Javascript (js) files to be inserted into the client and/or server - not css files or images.