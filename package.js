Package.describe({
  summary: "Leaflet.js, mobile-friendly interactive maps. Read https://github.com/bevanhunt/meteor-leaflet for installation instructions."
});

Package.on_use(function (api, where) {
  api.add_files('lib/leaflet.js', 'client');
  api.add_files('lib/leaflet_providers.js', 'client');
  api.add_files('styles/leaflet.css', 'client');
  api.add_files('images/layers-2x.png', 'client');
  api.add_files('images/layers.png', 'client');
  api.add_files('images/marker-icon-2x.png', 'client');
  api.add_files('images/marker-icon.png', 'client');
  api.add_files('images/marker-shadow.png', 'client');
});