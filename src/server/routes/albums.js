var Albums = require('../models/albums');

module.exports = function(app) {
  // Return a list of available node types
  app.get('/albums', function(req, res) {
    res.json(Albums.all());
  });

  app.get('/albums/:id', function(req, res) {
    var albumId = parseInt(req.param('id'), 10);
    res.json(Albums.get(albumId) || {});
  });
};