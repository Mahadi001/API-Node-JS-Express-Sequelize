const {Sequelize} = require('sequelize');

// Connect database
const db = new Sequelize('playlists', 'postgres', '123456', {
    host: 'localhost',
    dialect:  'postgres'
  });


  module.exports = db;