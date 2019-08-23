const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/photos', { useNewUrlParser: true });

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


module.exports = {
  PhotoSchema: PhotoSchema,
  PhotoGallery: PhotoGallery,
}
