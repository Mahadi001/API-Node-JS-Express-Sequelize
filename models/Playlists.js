const Sequelize = require('sequelize');
const db = require('../database/config');

const Playlist = db.define('playlist', {
    id:{
      field: 'id',
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    name:{
      field: 'name',
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false
  });


module.exports = Playlist;