Package.describe({
  summary: "Leaflet.js is a Javascript library for mobile-friendly interactive maps. Read https://github.com/bevanhunt/meteor-leaflet for installation instructions."
});

Package.on_use(function (api, where) {
  where = where || ['client']
  api.add_files('lib/leaflet/dist/leaflet-src.js', where);
});