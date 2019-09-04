const mongoose = require('mongoose');
const database = require('./database/index.js');

const faker = require('faker');

//use a while loop and then use index to track 
//loop through 4 times to get 100 and have a row 
const insertIntoDb = () => {
  let index = 1; 
  let randomSentence = faker.lorem.sentence(); 
  
  while (index < 101) {
    let randomIndex = Math.floor(Math.random() * Math.floor(90));
    let randomNumOfPhotos = Math.floor(Math.random() * Math.floor(5)) + 5;
    let arrayOfURLs = [];
    for (let i = randomIndex; i < randomIndex + randomNumOfPhotos; i++) {
      arrayOfURLs.push(`https://photogalleryproject.s3.us-east-2.amazonaws.com/image${i}.jpeg`);
    }
    arrayOfURLs = arrayOfURLs.reduce((acc, val) => acc.concat(val), []).join();
    
    let arrayOfDescriptions = [];
    for (let i = 0; i < randomNumOfPhotos; i++) {
      arrayOfDescriptions.push(faker.lorem.sentence());
    }
    console.log(arrayOfDescriptions);
    // arrayOfDescriptions = arrayOfDescriptions.reduce((acc, val) => acc.concat(val), []).join();
    

    let newPhotos = new database.PhotoGallery({
      id: index,
      listing_id: index,
      photo_url: arrayOfURLs,
      description: arrayOfDescriptions,
    });
    database.PhotoGallery.create({
      id: index,
      listing_id: index,
      photo_url: arrayOfURLs,
      description: arrayOfDescriptions,
    }, function (err, newPhotos) {
        if (err) console.log(err);
    });
    index++;    
    console.log(index);
  }
};

insertIntoDb();


module.exports = {
  insertIntoDb,
};
