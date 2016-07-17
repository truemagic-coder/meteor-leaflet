Package.describe({
  name: "bevanhunt:leaflet",
  summary: "leaflet - mobile-friendly maps.",
  git: "https://github.com/bevanhunt/meteor-leaflet.git",
  author: "Bevan Hunt <bevan@bevanhunt.com> (http://bevanhunt.com)",
  version: "2.0.1",
  license: "MIT"
});

Npm.depends({
  "spin.js": "2.3.2",
  "leaflet": "0.7.7",
  "leaflet-providers": "1.1.7"
});

Package.onUse(function (api) {
  api.versionsFrom('1.2');
  api.addFiles([
    '.npm/package/node_modules/leaflet/dist/leaflet-src.js',
    '.npm/package/node_modules/leaflet-providers/leaflet-providers.js',
    '.npm/package/node_modules/spin.js/spin.js',
    'lib/leaflet_spin.js',
    'styles/leaflet.css',
  ], 'client');
  api.addAssets([
    'images/layers-2x.png',
    'images/layers.png',
    'images/marker-icon-2x.png',
    'images/marker-icon.png',
    'images/marker-shadow.png'
  ],'client');
});
