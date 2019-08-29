import React from 'react';
import { shallow, mount, render } from 'enzyme';
import PhotoCollage from '../client/src/components/PhotoCollage.jsx';
import PhotoSlideShow, { DescriptionList, BackArrow, NextArrow, LeftArrow, RightArrow } from '../client/src/components/PhotoSlideShow.jsx';
import App from '../client/src/components/PhotoCollage.jsx';
import ThumbnailGallery, { Thumbnails, Thumbnail } from '../client/src/components/ThumbnailGallery.jsx';
import { wrap } from 'module';


//photo collage should render 5 images onto the page 
describe('<PhotoCollage />', () => {
    it('renders five images', () => {
        const photos = ['https://photogalleryproject.s3.us-east-2.amazonaws.com/image1.jpeg', 'https://photogalleryproject.s3.us-east-2.amazonaws.com/image2.jpeg', 'https://photogalleryproject.s3.us-east-2.amazonaws.com/image3.jpeg', 'https://photogalleryproject.s3.us-east-2.amazonaws.com/image4.jpeg', 'https://photogalleryproject.s3.us-east-2.amazonaws.com/image5.jpeg'];

        const wrapper = shallow(<PhotoCollage photos={photos} />);

        expect(wrapper.find('.image')).toHaveLength(5);
    });

    it('tests click event', () => {
        const photos = ['https://photogalleryproject.s3.us-east-2.amazonaws.com/image1.jpeg', 'https://photogalleryproject.s3.us-east-2.amazonaws.com/image2.jpeg', 'https://photogalleryproject.s3.us-east-2.amazonaws.com/image3.jpeg', 'https://photogalleryproject.s3.us-east-2.amazonaws.com/image4.jpeg', 'https://photogalleryproject.s3.us-east-2.amazonaws.com/image5.jpeg'];

        const button1 = shallow((<PhotoCollage photos={photos} renderCarousel={() => 1}></PhotoCollage>));
        button1.find('.image').at(0).simulate('click')
        expect(button1).toHaveLength(1);

        const button2 = shallow((<PhotoCollage photos={photos} renderCarousel={() => 1}></PhotoCollage>));
        button2.find('.image').at(1).simulate('click')
        expect(button2).toHaveLength(1);

        const button3 = shallow((<PhotoCollage photos={photos} renderCarousel={() => 1}></PhotoCollage>));
        button3.find('.image').at(2).simulate('click')
        expect(button3).toHaveLength(1);

        const button4 = shallow((<PhotoCollage photos={photos} renderCarousel={() => 1}></PhotoCollage>));
        button4.find('.image').at(3).simulate('click')
        expect(button4).toHaveLength(1);

        const button5 = shallow((<PhotoCollage photos={photos} renderCarousel={() => 1}></PhotoCollage>));
        button5.find('.image').at(4).simulate('click')
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

  const descriptions = ['this is a test', 'this is the room', 'this is the bathroom', 'this is the balcony'];

  const description = shallow(<DescriptionList descriptions={descriptions}/>);
  it ('renders correctly', () => {
      expect(description).toMatchSnapshot();
  });

  it('tests click events for back arrow', () => {
      const mockCallBack = jest.fn();

      const button = shallow((<LeftArrow onClick={mockCallBack}></LeftArrow>));
      button.find('.back-arrow').simulate('click');
      expect(button).toHaveLength(1);
  })

  it('tests click events for next arrow', () => {
      const mockCB = jest.fn();

      const nextButton = shallow((<RightArrow onClick={mockCB}></RightArrow>));
      nextButton.find('.next-arrow').simulate('click');
      expect(nextButton).toHaveLength(1);
  });
});

describe('<ThumbnailGallery />', () => {
    const photos = ['https://photogalleryproject.s3.us-east-2.amazonaws.com/image1.jpeg', 'https://photogalleryproject.s3.us-east-2.amazonaws.com/image2.jpeg', 'https://photogalleryproject.s3.us-east-2.amazonaws.com/image3.jpeg', 'https://photogalleryproject.s3.us-east-2.amazonaws.com/image4.jpeg', 'https://photogalleryproject.s3.us-east-2.amazonaws.com/image5.jpeg'];

    let wrapper = shallow(<ThumbnailGallery photos={photos} />);
    it ('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it ('test click event', () => {
        const mockCallback = jest.fn();

        const button = shallow((<Thumbnails handleClick={mockCallback}></Thumbnails>));
        button.find('.thumbnail').simulate('click');
        expect(mockCallback).toHaveBeenCalled();
    });

    it ('tests click event to see if it triggers a component method to run', () => {
        const mockCallback = jest.fn();
        const photos = ['https://photogalleryproject.s3.us-east-2.amazonaws.com/image1.jpeg', 'https://photogalleryproject.s3.us-east-2.amazonaws.com/image2.jpeg', 'https://photogalleryproject.s3.us-east-2.amazonaws.com/image3.jpeg', 'https://photogalleryproject.s3.us-east-2.amazonaws.com/image4.jpeg', 'https://photogalleryproject.s3.us-east-2.amazonaws.com/image5.jpeg'];


        const wrap = mount((<ThumbnailGallery photos={photos} ></ThumbnailGallery>));
        wrap.find('.thumbnail').at(1).simulate('click');
        expect(wrap.state('currentThumbnailIndex')).toBe(0);
        expect(wrap.state('translateValue')).toBeGreaterThanOrEqual(0);
    });

    it ('tests state change', () => {
        const photos = ['https://photogalleryproject.s3.us-east-2.amazonaws.com/image1.jpeg', 'https://photogalleryproject.s3.us-east-2.amazonaws.com/image2.jpeg', 'https://photogalleryproject.s3.us-east-2.amazonaws.com/image3.jpeg', 'https://photogalleryproject.s3.us-east-2.amazonaws.com/image4.jpeg', 'https://photogalleryproject.s3.us-east-2.amazonaws.com/image5.jpeg'];

        let wrap = shallow(<ThumbnailGallery photos={photos}/>);
        expect(wrap.state('currentThumbnailIndex')).toBeGreaterThanOrEqual(0);
        expect(wrap.state('translateValue')).toBeGreaterThanOrEqual(0);
    });
});












//1) test descriptions are on page 
//2) test that clicks work
//3) test that props are changing on clicks 

// describe('<App />', () => {
//     it('should change the state componentState componentDidMount method is invoked', () => {
//         expect(wrapper.state('componentState')).toEqual('mounted');
//     });
// });


// describe('<Share />', () => {
//     it('should call function when button is clicked', () => {
//         // const button = shallow(<Button name='share-button' handleClick={func} />)
//         button.simulate('click');
//         expect(func).toHaveBeenCalled();
//     });

//     it('should render correctly', () => {
//         // const button = shallow(<Button name='share-button' />);
//         expect(button).toMatchSnapshot();
//     });
// })


// //view photos should be clickable 
// describe('<ViewPhotos />', () => {
//     it('should call function when button is clicked', () => {
//         // const button = shallow(<Button name='view-photos-button' handleClick={func} />)
//         button.simulate('click');
//         expect(func).toHaveBeenCalled();
//     });

//     it('should render correctly', () => {
//         // const button = shallow(<Button name='view-photos-button' />);
//         expect(button).toMatchSnapshot();
//     });
// })
// //view photos should be clickable 

// //App should render 6 components 