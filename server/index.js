const express = require('express');

const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const axios = require('axios');
const database = require('../database/index.js');
const cors = require('cors')
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(cors());

app.get('/api/listings/:id', (req, res) => {
  console.log(req.params.id);

  database.PhotoGallery.find({ listing_id: `${req.params.id}`}, (err, docs) => {
    if (err) {
      throw err; 
    } else {
      res.send(docs); 
    }
  });
});

app.get('/bundle.js', (req, res) => {
  res.sendFile('./bundle.js', (err) => {
    if (err) {
      console.log(err); 
    } else {
      console.log('bundle.js file sent'); 
    }
  }); 
});


app.listen(port, () => console.log(`App listening on port ${port}`));
