Package.describe({
    name: "bevanhunt:leaflet",
    summary: "Leaflet.js, mobile-friendly interactive maps. Read https://github.com/bevanhunt/meteor-leaflet for installation instructions. http://leafletjs.com",
    git: "https://github.com/bevanhunt/meteor-leaflet.git",
    author: "Bevan Hunt <bevan@bevanhunt.com> (http://www.bevanhunt.com)",
    version: "0.3.10",
    license: "MIT/X11"
});

Package.onUse(function (api) {

    api.versionsFrom('1.0');

    api.addFiles([
        'lib/leaflet.js',
        'lib/leaflet_providers.js',
        'styles/leaflet.css',
        'images/layers-2x.png',
        'images/layers.png',
        'images/marker-icon-2x.png',
        'images/marker-icon.png',
        'images/marker-shadow.png'
    ],'client');
});