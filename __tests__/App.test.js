import React from 'react';
import { shallow, mount, render } from 'enzyme';
import PhotoCollage from '../client/src/components/PhotoCollage.jsx';
import PhotoSlideShow, { DescriptionList } from '../client/src/components/PhotoSlideShow.jsx';
import App from '../client/src/components/PhotoCollage.jsx';
import ThumbnailGallery, { Thumbnails } from '../client/src/components/ThumbnailGallery.jsx';
import { wrap } from 'module';


//photo collage should render 5 images onto the page 
describe('<PhotoCollage />', () => {
    it('renders five images', () => {
        const photos = ['https://photogalleryproject.s3.us-east-2.amazonaws.com/image1.jpeg', 'https://photogalleryproject.s3.us-east-2.amazonaws.com/image2.jpeg', 'https://photogalleryproject.s3.us-east-2.amazonaws.com/image3.jpeg', 'https://photogalleryproject.s3.us-east-2.amazonaws.com/image4.jpeg', 'https://photogalleryproject.s3.us-east-2.amazonaws.com/image5.jpeg'];

        const wrapper = shallow(<PhotoCollage photos={photos} />);

        expect(wrapper.find('.image')).toHaveLength(5);
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
});

describe('<ThumbnailGallery />', () => {
    const photos = ['https://photogalleryproject.s3.us-east-2.amazonaws.com/image1.jpeg', 'https://photogalleryproject.s3.us-east-2.amazonaws.com/image2.jpeg', 'https://photogalleryproject.s3.us-east-2.amazonaws.com/image3.jpeg', 'https://photogalleryproject.s3.us-east-2.amazonaws.com/image4.jpeg', 'https://photogalleryproject.s3.us-east-2.amazonaws.com/image5.jpeg'];

    let wrapper = shallow(<ThumbnailGallery photos={photos} />);
    it ('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it ('tests for clicks', () => {
        let wrap = shallow(<ThumbnailGallery />)
        wrap.find(Thumbnails).at(0).simulate('click');
        expect(wrap.state('currentThumbnailIndex')).toBeGreaterThan(0);
    })


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