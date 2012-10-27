# Leaflet for Meteor

[Leaflet.js](http://leafletjs.com/), a Javascript library for mobile-friendly interactive maps. 

## How to install 
1. git clone https://github.com/bevanhunt/meteor-leaflet.git leaflet 
2. cd leaflet
3. ditto leaflet ~/to_your_meteor_project/public/leaflet (copy all images to this dir)
4. cd css 
5. cp * ~/to_your_meteor_project/client/styles (copy all files - make sure the directory tree exists first)
6. cd ~/to_your_meteor_project/
7. mrt add leaflet

## Notes:
1. Meteor/Meteorite packages only allow Javascript (js) files to be inserted into the client and/or server - not css files or images.
2. Step #5 - it can be any one-level deep subfolder - for example rather than client/styles you can choose client/css 