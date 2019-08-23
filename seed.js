const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/photos', { useNewUrlParser: true });
const faker = require('faker');

let PhotoSchema = new mongoose.Schema({
  id: 'Number',
  listing_id: 'Number',
  photo_url: 'String',
  description: 'String',
}, { collection: 'photos' });

let PhotoGallery = mongoose.model('PhotoGallery', PhotoSchema);

console.log('Connected to Mongoose');

//use a while loop and then use index to track 
//loop through 4 times to get 100 and have a row 
const insertIntoDb = () => {
  let index = 1; 
  let randomSentence = faker.lorem.sentence();

  while (index < 101) {
    let newPhotos = new PhotoGallery({
      id: index,
      listing_id: index,
      photo_url: `https://photogalleryproject.s3.us-east-2.amazonaws.com/image${index}.jpeg`,
      description: randomSentence,
    });
    PhotoGallery.create({
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
