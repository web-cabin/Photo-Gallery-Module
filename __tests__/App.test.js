import React from 'react';
import { shallow, mount, render } from 'enzyme';
import PhotoCollage from '../client/src/components/PhotoCollage.jsx';
import PhotoSlideShow, { LeftArrow, RightArrow, BackArrow, NextArrow } from '../client/src/components/PhotoSlideShow.jsx';
import ThumbnailGallery, { Thumbnails, Thumbnail } from '../client/src/components/ThumbnailGallery.jsx';


describe('<PhotoCollage />', () => {
    it('renders five images', () => {
        const photos = ['https://photogalleryproject.s3.us-east-2.amazonaws.com/image1.jpeg', 'https://photogalleryproject.s3.us-east-2.amazonaws.com/image2.jpeg', 'https://photogalleryproject.s3.us-east-2.amazonaws.com/image3.jpeg', 'https://photogalleryproject.s3.us-east-2.amazonaws.com/image4.jpeg', 'https://photogalleryproject.s3.us-east-2.amazonaws.com/image5.jpeg'];

        const wrapper = shallow(<PhotoCollage photos={photos} />);

        expect(wrapper.find('#image')).toHaveLength(5);
    });

    it('tests click event', () => {
        const photos = ['https://photogalleryproject.s3.us-east-2.amazonaws.com/image1.jpeg', 'https://photogalleryproject.s3.us-east-2.amazonaws.com/image2.jpeg', 'https://photogalleryproject.s3.us-east-2.amazonaws.com/image3.jpeg', 'https://photogalleryproject.s3.us-east-2.amazonaws.com/image4.jpeg', 'https://photogalleryproject.s3.us-east-2.amazonaws.com/image5.jpeg'];

        const button1 = shallow((<PhotoCollage photos={photos} renderCarousel={() => 1}></PhotoCollage>));
        button1.find('#image').at(0).simulate('click')
        expect(button1).toHaveLength(1);

        const button2 = shallow((<PhotoCollage photos={photos} renderCarousel={() => 1}></PhotoCollage>));
        button2.find('#image').at(1).simulate('click')
        expect(button2).toHaveLength(1);

        const button3 = shallow((<PhotoCollage photos={photos} renderCarousel={() => 1}></PhotoCollage>));
        button3.find('#image').at(2).simulate('click')
        expect(button3).toHaveLength(1);

        const button4 = shallow((<PhotoCollage photos={photos} renderCarousel={() => 1}></PhotoCollage>));
        button4.find('#image').at(3).simulate('click')
        expect(button4).toHaveLength(1);

        const button5 = shallow((<PhotoCollage photos={photos} renderCarousel={() => 1}></PhotoCollage>));
        button5.find('#image').at(4).simulate('click')
        expect(button5).toHaveLength(1);
    });
});
     

//check for buttons 
describe('<PhotoSlideShow />', () => {
    const photos = ['https://photogalleryproject.s3.us-east-2.amazonaws.com/image1.jpeg', 'https://photogalleryproject.s3.us-east-2.amazonaws.com/image2.jpeg', 'https://photogalleryproject.s3.us-east-2.amazonaws.com/image3.jpeg', 'https://photogalleryproject.s3.us-east-2.amazonaws.com/image4.jpeg', 'https://photogalleryproject.s3.us-east-2.amazonaws.com/image5.jpeg'];

  const wrapper = shallow(<PhotoSlideShow photos={photos} />);
  it ('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
  });

  it('tests click events for back arrow', () => {
      const mockcallback = jest.fn();
      const button = shallow((<LeftArrow handleClick={mockcallback} ></LeftArrow>));
      button.find('.back-arrow').simulate('click');
      expect(button).toHaveLength(1);
  })

  it('tests click events for next arrow', () => {
      const mockCB = jest.fn();

      const nextButton = shallow((<RightArrow handleClick={mockCB}></RightArrow>));
      nextButton.find('.next-arrow').simulate('click');
      expect(nextButton).toHaveLength(1);
  });
});

describe('<ThumbnailGallery />', () => {
    const images = ['https://photogalleryproject.s3.us-east-2.amazonaws.com/image1.jpeg', 'https://photogalleryproject.s3.us-east-2.amazonaws.com/image2.jpeg', 'https://photogalleryproject.s3.us-east-2.amazonaws.com/image3.jpeg', 'https://photogalleryproject.s3.us-east-2.amazonaws.com/image4.jpeg', 'https://photogalleryproject.s3.us-east-2.amazonaws.com/image5.jpeg'];

    let wrapper = shallow(<Thumbnails images={images} />);
    it ('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it ('test click event', () => {
        const mockCallback = jest.fn();

        const button = shallow((<Thumbnails handleClick={mockCallback}></Thumbnails>));
        button.find('.thumbnail').simulate('click');
        expect(mockCallback).toHaveBeenCalled();
    });

    it ('should test for the array', () => {
        const images = ['https://photogalleryproject.s3.us-east-2.amazonaws.com/image1.jpeg', 'https://photogalleryproject.s3.us-east-2.amazonaws.com/image2.jpeg', 'https://photogalleryproject.s3.us-east-2.amazonaws.com/image3.jpeg', 'https://photogalleryproject.s3.us-east-2.amazonaws.com/image4.jpeg', 'https://photogalleryproject.s3.us-east-2.amazonaws.com/image5.jpeg'];

        let wrap = shallow(<Thumbnails images={images} />);
        expect(wrap.find('Thumbnails')).toHaveLength(5);
    });

});









