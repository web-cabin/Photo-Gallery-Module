import React from 'react';
import { shallow } from 'enzyme';
import PhotoCollage from '../client/src/components/PhotoCollage.jsx';
import PhotoCarouselThumbnails from '../client/src/components/PhotoCarouselThumbnails';
import PhotoSlideShow from '../client/src/components/PhotoSlideShow';
import Share from '../client/src/components/Share';
import ViewPhotos from '../client/src/components/ViewPhotos.jsx';
=======


//photo collage should render 5 images onto the page 
describe('<PhotoCollage />', () => {
    it('renders five images', () => {
        const photos = [`https://photogalleryproject.s3.us-east-2.amazonaws.com/image1.jpeg`, `https://photogalleryproject.s3.us-east-2.amazonaws.com/image2.jpeg`, `https://photogalleryproject.s3.us-east-2.amazonaws.com/image3.jpeg`, `https://photogalleryproject.s3.us-east-2.amazonaws.com/image4.jpeg`, `https://photogalleryproject.s3.us-east-2.amazonaws.com/image5.jpeg`];

        const wrapper = shallow(<PhotoCollage photos={photos} />);

        expect(wrapper.find('img')).to.have.lengthOf(5);
    });
});

//photocarousel should render images onto the page dependent on the listing id
describe('<PhotoCarouselThumbnails />', () => {
    it('renders random number of pages onto page dependent on the listing id', () => {
        const wrapper = shallow(<PhotoCarouselThumbnails photo={photo} />);
=======

     
//photoslideshow should render images on the page dependent on the listing id and should match photo carousel
describe('<PhotoSlideShow />', () => {
    it('renders images on the page that matches the photos in the carousel', () => {

    });
});

//save should be clickable
//share should be clickable
describe('<Share />', () => {
    it('should call function when button is clicked', () => {
        const button = shallow(<Button name='share-button' handleClick={func} />)
        button.simulate('click');
        expect(func).toHaveBeenCalled();
    });

    it('should render correctly', () => {
        const button = shallow(<Button name='share-button' />);
        expect(button).toMatchSnapshot();
    });
})


//view photos should be clickable 
describe('<ViewPhotos />', () => {
    it('should call function when button is clicked', () => {
        const button = shallow(<Button name='view-photos-button' handleClick={func} />)
        button.simulate('click');
        expect(func).toHaveBeenCalled();
    });

    it('should render correctly', () => {
        const button = shallow(<Button name='view-photos-button' />);
        expect(button).toMatchSnapshot();
    });
})
=======
//view photos should be clickable 

//App should render 6 components 