const express = require('express');

const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const axios = require('axios');
const database = require('../database/index.js');
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/api/displayphotos/:id', (req, res) => {
  console.log(req.params.id);

  database.PhotoGallery.find({ listing_id: `${req.params.id}`}, (err, docs) => {
    if (err) {
      throw err; 
    } else {
      res.send(docs); 
    }
  });
});



app.listen(port, () => console.log(`App listening on port ${port}`));
