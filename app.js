const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const {Sequelize} = require('sequelize');

// Connect database
const db = new Sequelize('playlists', 'postgres', '123456', {
    host: 'localhost',
    dialect:  'postgres'
  });

const app = express();

// Test database connection
db.authenticate()
  .then(() => console.log('Database connected successfully...'))
  .catch(err => console.log('Error: '+err))

const Playlist = db.define('playlist', {
  id:{
    field: 'PlaylistId',
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name:{
    field: 'Name',
    type: Sequelize.STRING
  }
},
{
  timestamps: false
});


app.get('/', (req,res) => {
    res.send('Hello!')
})

app.get('/api/playlists/', (req,res) => {
    Playlist.findAll()
            .then(playlists => res.json(playlists))
            .catch(err => console.log('Error: '+err))
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));

