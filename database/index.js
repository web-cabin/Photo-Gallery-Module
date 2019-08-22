const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/photogallery', { useNewUrlParser: true });

const photoSchema = new mongoose.Schema({
  id: Number,
  listing_id: Number,
  photo_url: String,
  desription: String,
});

const PhotoGallery = mongoose.model('PhotoGallery', photoSchema);

const save = (photos, callback) => {

  photos.forEach((photo) => {
    let newPhotos = new PhotoGallery({
      id: photo.id,
      listing_id: photo.listing_id,
      photo_url: photo.photo_url,
      description: photo.description,
    });
    PhotoGallery.create({
      id: photo.id,
      listing_id: photo.listing_id,
      photo_url: photo.photo_url,
      description: photo.description,
    }, (err, newPhotos) => {
      if (err) return handleError(err);
    });
  });
};

console.log('Connected to Mongoose');

module.exports = {
  save,
};
