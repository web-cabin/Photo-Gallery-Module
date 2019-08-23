const express = require('express');

const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const axios = require('axios');
const database = require('../database/index.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/api/displayphotos/:id', (req, res) => {
    req.params.id
  let randomIndex = Math.floor(Math.random() * Math.floor(100));

  database.find({ index: { $gte: randomIndex }}, (err, docs) => {
    if (err) {
      throw err; 
    } else {
      res.send(docs); 
    }
  });
});

app.listen(port, () => console.log(`App listening on port ${port}`));
