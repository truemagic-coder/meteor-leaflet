Package.describe({
  name: "bevanhunt:leaflet",
  summary: "leaflet 1.0.0-beta.1 - mobile-friendly maps.",
  git: "https://github.com/bevanhunt/meteor-leaflet.git",
  author: "Bevan Hunt <bevan@bevanhunt.com> (http://bevanhunt.com)",
  version: "1.0.2",
  license: "MIT"
});

Npm.depends({
  "spin.js": "2.3.1",
  "leaflet": "1.0.0-beta.1",
  "leaflet-providers": "1.1.1"
});

Package.onUse(function (api) {
  api.versionsFrom('1.0');
  api.addFiles([
    '.npm/package/node_modules/leaflet/dist/leaflet-src.js',
    '.npm/package/node_modules/leaflet-providers/leaflet-providers.js',
    '.npm/package/node_modules/spin.js/spin.js',
    'lib/leaflet_spin.js',
    'styles/leaflet.css',
    'images/layers-2x.png',
    'images/layers.png',
    'images/marker-icon-2x.png',
    'images/marker-icon.png',
    'images/marker-shadow.png'
  ],'client');
});
