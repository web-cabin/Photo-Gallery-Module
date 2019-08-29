import React from 'react';
import PhotoCollage from './PhotoCollage.jsx';
import axios from 'axios';
import $ from 'jquery';
import PhotoSlideShow from './PhotoSlideShow.jsx';
import ThumbnailGallery from './ThumbnailGallery.jsx';
import styled from 'styled-components';
import Descriptions from './Descriptions.jsx'; 


const ThumbnailContainer = styled.div`
    position: relative; 
    max-width: 300px;
    overflow: hidden;
    margin: 0 auto;
    white-space: nowrap;
    float: right;
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


const DescriptionContainer = styled.div`
  position: relative;
  height: 300px;
  width: 300px;
  overflow: hidden;
  margin: 0 auto;
  top: 250px;
  right: 40px;
`;



class App extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            photos: [],
            descriptions: [],
            currentPhoto: '',
            currentDescription: '',
            showSlideshow: false,
            currentIndex: 0,
            translateSlideValue: 0,
            translateThumbnailValue: 0,
        }
        this.fetchPhotos = this.fetchPhotos.bind(this);
        this.renderCarousel = this.renderCarousel.bind(this);
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


goToPrevSlide() {
    if(this.state.currentIndex === 0)
        return;
    
    this.setState(prevState => ({
        currentIndex: prevState.currentIndex - 1,
        translateSlideValue: prevState.translateSlideValue + this.slideWidth(),
        translateThumbnailValue: prevState.translateThumbnailValue + this.thumbnailWidth(),
        currentPhoto: this.state.photos[prevState.currentIndex - 1],
        currentDescription: this.state.descriptions[prevState.currentIndex - 1],
    }))
}

    
goToNextSlide() {
    if(this.state.currentIndex === this.state.photos.length - 1) {
        return this.setState({
        currentIndex: 0,
        translateSlideValue: 0,
        translateThumbnailValue: 0,
        currentPhoto: this.state.photos[0],
        currentDescription: this.state.descriptions[0],
        })
    }
    this.setState(prevState => ({
        currentIndex: prevState.currentIndex + 1,
        translateSlideValue: prevState.translateSlideValue + -(this.slideWidth()),
        translateThumbnailValue: prevState.translateThumbnailValue + -(this.thumbnailWidth()),
        currentPhoto: this.state.photos[prevState.currentIndex + 1],
        currentDescription: this.state.descriptions[prevState.currentIndex + 1],
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
                index={this.state.currentIndex} 
                translateValue={this.state.translateSlideValue}
                goToPrevSlide={this.goToPrevSlide}
                goToNextSlide={this.goToNextSlide}
                slideWidth={this.slideWidth}
                handleClick={this.handleClick}
                />
                </SliderContainer>

                <DescriptionContainer>        
                <Descriptions 
                descriptions={this.state.descriptions}
                index={this.state.currentIndex}
                goToPrevSlide={this.goToPrevSlide}
                goToNextSlide={this.goToNextSlide} 
                handleClick={this.handleClick}
                />
                </DescriptionContainer>
                </div>
                : <PhotoCollage photos={this.state.photos} renderCarousel={this.renderCarousel}/>}
            </div>
        );
    }
}



export default App; 