const mongoose = require('mongoose');

mongoose.connect('mongodb://database/photos', { useNewUrlParser: true });

let PhotoSchema = new mongoose.Schema({
  id: 'Number',
  listing_id: 'Number',
  photo_url: [String],
  description: [String],
}, { collection: 'photos' });

let PhotoGallery = mongoose.model('PhotoGallery', PhotoSchema);

console.log('Connected to Mongoose');


module.exports = {
  PhotoSchema: PhotoSchema,
  PhotoGallery: PhotoGallery,
}
