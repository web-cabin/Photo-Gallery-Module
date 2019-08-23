const mongoose = require('mongoose');
const database = require('./database/index.js');

const faker = require('faker');

//use a while loop and then use index to track 
//loop through 4 times to get 100 and have a row 
const insertIntoDb = () => {
  let index = 1; 
  let randomSentence = faker.lorem.sentence();

  while (index < 101) {
    let newPhotos = new database.PhotoGallery({
      id: index,
      listing_id: index,
      photo_url: `https://photogalleryproject.s3.us-east-2.amazonaws.com/image${index}.jpeg`,
      description: randomSentence,
    });
    database.PhotoGallery.create({
        id: index,
        listing_id: index,
        photo_url: `https://photogalleryproject.s3.us-east-2.amazonaws.com/image${index}.jpeg`,
        description: randomSentence,
    }, function (err, newPhotos) {
        if (err) return handleError(err);
    });
    index++;    
    console.log(index);
  }
};

insertIntoDb();


module.exports = {
  insertIntoDb,
};
