import React from 'react';
import PhotoCollage from './PhotoCollage.jsx';
import axios from 'axios';
import $ from 'jquery';
import PhotoSlideShow from './PhotoSlideShow.jsx';
import ThumbnailGallery from './ThumbnailGallery.jsx';
import styled from 'styled-components';


const ThumbnailContainer = styled.div`
    position: relative; 
    max-width: 300px;
    overflow: hidden;
    margin: 0 auto;
    white-space: nowrap;
    float: right;
    border: solid 1px blue;
    top: 130px;
    right: 60px;
`;

const SliderContainer = styled.div`
  display: flex;
  margin: 0 auto;
  overflow: hidden;
  white-space: nowrap;
  width: 785px;
  float: left;
  margin: 130px;
`;

export const Description = styled.div`
font-family: Roboto, Helvetica Neue, sans-serif;
font-size: 15px;
font-weight: 325;
line-height: 1.43;
color: #484848;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 200px;
`;

const DescriptionContainer = styled.div`
  position: relative;
  height: 300px;
  width: 300px;
  overflow: hidden;
  margin: 0 auto;
  white-space: nowrap;
  border: solid 1px blue; 
  top: 250px;
  right: 40px;
`;

const DescriptionWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;



class App extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            photos: [],
            descriptions: [],
            currentPhoto: '',
            showSlideshow: false,
            currentIndex: 0,
            translateSlideValue: 0,
            translateThumbnailValue: 0,
        }
        this.fetchPhotos = this.fetchPhotos.bind(this);
        this.renderCarousel = this.renderCarousel.bind(this);
        this.handleIndexChange = this.handleIndexChange.bind(this);
        this.goToPrevSlide = this.goToPrevSlide.bind(this);
        this.goToNextSlide = this.goToNextSlide.bind(this);
        this.slideWidth = this.slideWidth.bind(this);
        this.thumbnailWidth = this.thumbnailWidth.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

componentDidMount() {
    this.fetchPhotos();
}
    
fetchPhotos() {
    $.ajax({
        url: '/api/displayphotos/8',
        method: 'GET',
        success: (response) => {
            // array.toString().split(',');
            // console.log(response[0].description);
            console.log(response);
            this.setState({
                photos: response[0].photo_url.toString().split(','),
                descriptions: response[0].description,
            });
        },
        error: (data) => {
            console.log('failure to retrieve', data); 
        }
    })
}

renderCarousel() {
    this.setState({
        showSlideshow: true,
    });
}

handleIndexChange(index) {
    this.setState({
        index: index,
    });
    console.log(index);
}

goToPrevSlide() {
    if(this.state.currentIndex === 0)
        return;
    
    this.setState(prevState => ({
        currentIndex: prevState.currentIndex - 1,
        translateSlideValue: prevState.translateSlideValue + this.slideWidth(),
        translateThumbnailValue: prevState.translateThumbnailValue + this.thumbnailWidth(),
        currentPhoto: this.state.photos[prevState.currentIndex - 1],
    }))
}

    
goToNextSlide() {
// Exiting the method early if we are at the end of the images array.
// We also want to reset currentIndex and translateValue, so we return
// to the first image in the array.
    if(this.state.currentIndex === this.state.photos.length - 1) {
        return this.setState({
        currentIndex: 0,
        translateSlideValue: 0,
        translateThumbnailValue: 0,
        currentPhoto: this.state.photos[0],
        })
    }

// This will not run if we met the if condition above
    this.setState(prevState => ({
        currentIndex: prevState.currentIndex + 1,
        translateSlideValue: prevState.translateSlideValue + -(this.slideWidth()),
        translateThumbnailValue: prevState.translateThumbnailValue + -(this.thumbnailWidth()),
        currentPhoto: this.state.photos[prevState.currentIndex + 1],
    }));
}

slideWidth() {
    return document.querySelector('.slide').clientWidth;
}


thumbnailWidth() {
    return document.querySelector('.thumbnail').clientWidth;
}


handleClick(event) {
    var thumbnails = document.querySelectorAll('.thumbnail');
    let thumbnailsArray = (Array.prototype.slice.call(thumbnails));
    var slides = document.querySelectorAll('.slide');
    let slidesArray = (Array.prototype.slice.call(slides));
    console.log(event);
    if (event > this.state.currentIndex) {
        this.goToNextSlide();
    } else if (event < this.state.currentIndex) {
        this.goToPrevSlide();
    }
// this.setState({
//   currentThumbnailIndex: event,
// });
}

    render() {
        console.log(this.state.currentIndex);
        return (
            <div className="container">
                {this.state.showSlideshow? 
                <div>
                <ThumbnailContainer>
                <ThumbnailGallery 
                photos={this.state.photos} 
                index={this.state.currentIndex}
                onIndexChange={this.handleIndexChange} 
                translateValue={this.state.translateThumbnailValue}
                goToPrevSlide={this.goToPrevSlide}
                goToNextSlide={this.goToNextSlide}
                thumbnailWidth={this.thumbnailWidth}
                handleClick={this.handleClick}
                />
                </ThumbnailContainer>

                <SliderContainer>
                <PhotoSlideShow 
                photos={this.state.photos} 
                descriptions={this.state.descriptions}
                index={this.state.currentIndex} 
                onIndexChange={this.handleIndexChange} 
                translateValue={this.state.translateSlideValue}
                goToPrevSlide={this.goToPrevSlide}
                goToNextSlide={this.goToNextSlide}
                slideWidth={this.slideWidth}
                handleClick={this.handleClick}
                />
                </SliderContainer>

                <DescriptionContainer>        
                    <DescriptionWrapper> 
                        {this.state.descriptions}
                    {/* {this.state.descriptions.map((description, i) => {
                     <DescriptionList key={i} description={description} />
                     })
                    }  */}
                </DescriptionWrapper>
                </DescriptionContainer>
                </div>
                : <PhotoCollage photos={this.state.photos} renderCarousel={this.renderCarousel}/>}
            </div>
        );
    }
}


export const DescriptionList = ({ description }) => {
    return (
      <Description className="description">{description}</Description>
    );
  }




export default App; 