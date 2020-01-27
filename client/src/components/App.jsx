import React, { Component } from 'react';
import PhotoCollage from './PhotoCollage.jsx';
import $ from 'jquery';
import PhotoSlideShow from './PhotoSlideShow.jsx';
import ThumbnailGallery from './ThumbnailGallery.jsx';
import Descriptions from './Descriptions.jsx'; 
import LeftArrow from './LeftArrow.jsx'; 
import RightArrow from './RightArrow.jsx';

const ThumbnailDescriptionContainer = styled.div`
    position: relative; 
    max-width: 25%;
    overflow: hidden;
    margin: 0 auto;
    white-space: nowrap;
    float: right;
    top: 180px;
    right: 2%;
    `;

const SliderContainer = styled.div`
  display: flex;
  flex-direction: row; 
  position: relative;
  margin: 0 auto;
  overflow: hidden;
  white-space: nowrap;
  max-width: 785px
  height: 100%;
  float: left;
`;

const SliderArrowContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  height: 100%;
  width: 70%;
  left: 0%;
  top: 15%;
`;

const Button = styled.a`
    position: absolute;
    margin: 0 auto;
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    height: 24px;
    font-weight: 500;
    color: #484848;
    border-radius: 3px;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    width: 7rem;
    background: white;
    z-index: 3;
    right: 1%;
    top: 50%;
    text-align: center;
    border-radius: 4px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
`;

const ExitButton = styled.div`
    height: 50px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f9f9f9;
    cursor: pointer;
    transition: transform ease-in .1s;
    position: absolute;
    top: 7%;
    float: right;
    right: 2%;
    z-index: 999;
    color: #fff;
    background-image: url('https://photogalleryproject.s3.us-east-2.amazonaws.com/ExitButton.png
    ');
`;  


class App extends Component {
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
            renderPhotoGallery: false,
        }
    }

    componentDidMount = () => {
        this.fetchPhotos();
    };

    fetchPhotos = () => {
        $.ajax({
            url: `http://localhost:3000/api/listings/${id}`,
            method: 'GET',
            success: (response) => {
                this.setState({
                    photos: response[0].photo_url.toString().split(','),
                    descriptions: response[0].description,
                });
            },
            error: (data) => {
                console.log('failure to retrieve', data); 
            }
        });
    };

    renderCarousel = () => {
        this.setState({
            showSlideshow: true,
        });
    };

    handleButtonClick = () => {
        this.setState({
            renderPhotoGallery: true,
        });
    };

    handleExitClick = () => {
        this.setState({
            showSlideshow: false,
            renderPhotoGallery: false,
        });
    };


    goToPrevSlide = () => {
        if(this.state.currentIndex === 0)
            return;
        
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1,
            translateSlideValue: prevState.translateSlideValue + this.slideWidth(),
            translateThumbnailValue: prevState.translateThumbnailValue + this.thumbnailWidth(),
            currentPhoto: this.state.photos[prevState.currentIndex - 1],
            currentDescription: this.state.descriptions[prevState.currentIndex - 1],
        }));
    };

    
    goToNextSlide = () => {
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
    };

    slideWidth = () => {
        return document.querySelector('.slide').clientWidth;
    };


    thumbnailWidth = () => {
        return document.querySelector('.thumbnail').clientWidth;
    };


    handleClick = event => {
        var thumbnails = document.querySelectorAll('.thumbnail');
        let thumbnailsArray = (Array.prototype.slice.call(thumbnails));
        var slides = document.querySelectorAll('.slide');
        let slidesArray = (Array.prototype.slice.call(slides));
        if (event > this.state.currentIndex) {
            this.goToNextSlide();
        } else if (event < this.state.currentIndex) {
            this.goToPrevSlide();
        }
    };

    render() {
        return (
            <div className="container">
                {this.state.showSlideshow || this.state.renderPhotoGallery ? 
                <div>
                    <SliderArrowContainer>
                        <LeftArrow index={this.state.currentIndex} handleClick={this.handleClick}/>
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
                         <RightArrow index={this.state.currentIndex} handleClick={this.handleClick}/>
                    </SliderArrowContainer> 
                    <ExitButton onClick={this.handleExitClick}/>
                    <ThumbnailDescriptionContainer>
                        <ThumbnailGallery 
                            photos={this.state.photos} 
                            index={this.state.currentIndex}
                            translateValue={this.state.translateThumbnailValue}
                            goToPrevSlide={this.goToPrevSlide}
                            goToNextSlide={this.goToNextSlide}
                            thumbnailWidth={this.thumbnailWidth}
                            handleClick={this.handleClick}
                        />       
                        <Descriptions 
                            descriptions={this.state.descriptions}
                            photos={this.state.photos} 
                            index={this.state.currentIndex}
                            goToPrevSlide={this.goToPrevSlide}
                            goToNextSlide={this.goToNextSlide} 
                            handleClick={this.handleClick}
                        />
                    </ThumbnailDescriptionContainer>
                </div>
                : 
                <div>
                    <PhotoCollage photos={this.state.photos} renderCarousel={this.renderCarousel}/>
                    <Button onClick={this.handleButtonClick}> View Photos </Button>
                </div>}
            </div>
        );
    }
}

  
export default App; 
