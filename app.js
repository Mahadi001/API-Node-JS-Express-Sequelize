const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const db = require('./database/config');
const Playlist = require('./models/Playlists');

const app = express();

// Test database connection
db.authenticate()
  .then(() => console.log('Database connected successfully...'))
  .catch(err => console.log('Error: '+err))


// Main route
app.get('/', (req,res) => {
    res.send('Hello!')
})

// Get all Playlists using API endpoints
app.get('/api/playlists/', (req,res) => {
  Playlist.findAll()
          .then((playlists) => { res.json(playlists) })
          .catch(err => console.log('Error: '+err))
})

// Get single Playlist using API endpoints
app.get('/api/playlists/:id', (req,res) => {
  let id = req.params.id;
  Playlist.findByPk(id)
          .then((playlist) => { 
            if(playlist){
              res.json(playlist)
            }
            else{
              res.status(404).send();
            } 
          })
          .catch(err => console.log('Error: '+err))
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));

