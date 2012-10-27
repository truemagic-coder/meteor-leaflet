Package.describe({
  summary: "Leaflet.js is a Javascript library for mobile-friendly interactive maps. See the package git repo for installation instructions."
});

Package.on_use(function (api, where) {
  where = where || ['client']
  api.add_files('lib/leaflet/dist/leaflet-src.js', where);
});