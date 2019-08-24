import React from 'react';
import { shallow } from 'enzyme';
import PhotoCollage from '../client/src/components/PhotoCollage.jsx';
import PhotoCarousel from '../client/src/components/PhotoCarousel';
import PhotoSlideShow from '../client/src/components/PhotoSlideShow';


//photo collage should render 5 images onto the page 
describe('<PhotoCollage />', () => {
    it('renders five images', () => {
        const photos = [`https://photogalleryproject.s3.us-east-2.amazonaws.com/image1.jpeg`, `https://photogalleryproject.s3.us-east-2.amazonaws.com/image2.jpeg`, `https://photogalleryproject.s3.us-east-2.amazonaws.com/image3.jpeg`, `https://photogalleryproject.s3.us-east-2.amazonaws.com/image4.jpeg`, `https://photogalleryproject.s3.us-east-2.amazonaws.com/image5.jpeg`];

        const wrapper = shallow(<PhotoCollage photos={photos} />);

        expect(wrapper.find('img')).to.have.lengthOf(5);
    });
});

//photocarousel should render images onto the page dependent on the listing id
describe('<PhotoCarousel />', () => {
    it('renders random number of pages onto page dependent on the listing id', () => {
        const wrapper = shallow(<PhotoCarousel photo={photo} />);
        expect(wrapper.containsMatchingElement(<img src="beachHome.jpg" />)).toBe(true)
    });
});
//photoslideshow should render images on the page dependent on the listing id and should match photo carousel
describe('<PhotoSlideShow />', () => {
    it('renders images on the page taht matches the photos in the carousel', () => {
        
    });
});

//save should be clickable
//share should be clickable
//view photos should be clickable 

//App should render 6 components 