import React from 'react';
import styled from 'styled-components';

const SliderContainer = styled.div`
  display: flex;
  margin: 0 auto;
  overflow: hidden;
  white-space: nowrap;
  width: 785px;
  float: left;
  margin: 130px;
`;

// height: 500px;

const SliderWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

const BackArrow = styled.div`
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f9f9f9;
  cursor: pointer;
  transition: transform ease-in .1s;
  position: absolute;
  top: 46%;
  left: 60px;
  z-index: 999;
  color: #fff;
  background-image: url('https://photogalleryproject.s3.us-east-2.amazonaws.com/backarrow.png');
  `;

  const NextArrow = styled.div`
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f9f9f9;
  border-radius: 50%;
  cursor: pointer;
  transition: transform ease-in .1s;
  position: absolute;
  top: 46%;
  right: 435px;
  z-index: 999;
  color: #fff;
  background-image: url('https://photogalleryproject.s3.us-east-2.amazonaws.com/nextarrow.png');
  `;
  
  
  const Slides = styled.div`
    display: inline-block;
    height: 525px;
    width: 785px;
    top: 30px;
    border-radius: 15px;
  `;

class PhotoSlideShow extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        images: [
          "https://photogalleryproject.s3.us-east-2.amazonaws.com/image1.jpeg",
          "https://photogalleryproject.s3.us-east-2.amazonaws.com/image2.jpeg",
          "https://photogalleryproject.s3.us-east-2.amazonaws.com/image3.jpeg",
          "https://photogalleryproject.s3.us-east-2.amazonaws.com/image4.jpeg",
          "https://photogalleryproject.s3.us-east-2.amazonaws.com/image5.jpeg",
          "https://photogalleryproject.s3.us-east-2.amazonaws.com/image6.jpeg",
          "https://photogalleryproject.s3.us-east-2.amazonaws.com/image7.jpeg",
          "https://photogalleryproject.s3.us-east-2.amazonaws.com/image8.jpeg"
        ],
        currentIndex: 0,
        translateValue: 0
      }
      this.goToPrevSlide = this.goToPrevSlide.bind(this);
      this.goToNextSlide = this.goToNextSlide.bind(this);
      this.slideWidth = this.slideWidth.bind(this);
    }
  
    goToPrevSlide() {
      if(this.state.currentIndex === 0)
        return;
      
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex - 1,
        translateValue: prevState.translateValue + this.slideWidth()
      }))
    }
  
    goToNextSlide() {
      // Exiting the method early if we are at the end of the images array.
      // We also want to reset currentIndex and translateValue, so we return
      // to the first image in the array.
      if(this.state.currentIndex === this.state.images.length - 1) {
        return this.setState({
          currentIndex: 0,
          translateValue: 0
        })
      }
      
      // This will not run if we met the if condition above
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex + 1,
        translateValue: prevState.translateValue + -(this.slideWidth())
      }));
    }
  
    slideWidth() {
       return document.querySelector('.slide').clientWidth;
    }
  
    render() {
      return (
        <div>
        <SliderContainer>
          <SliderWrapper style={{
              transform: `translateX(${this.state.translateValue}px)`,
              transition: 'transform ease-out 0.45s'
            }}> 
              {
                this.state.images.map((image, i) => (
                  <Slide key={i} image={image} />
                ))
              }
          </SliderWrapper>
            
        </SliderContainer>
      <LeftArrow goToPrevSlide={this.goToPrevSlide} />

      <RightArrow goToNextSlide={this.goToNextSlide}/> 
      </div>
      );
    }
  }
  


const Slide = ({ image }) => {
    var styles = {
        backgroundImage: `url(${image})`,
        backgroundSize:'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 60%'
    }
    return (
        <Slides className="slide" style={styles}></Slides>
    );
  };

  
  const LeftArrow = (props) => {
    return (
      <BackArrow onClick={props.goToPrevSlide}>
      </BackArrow>
    );
  }
  
  
  const RightArrow = (props) => {
    return (
      <NextArrow onClick={props.goToNextSlide}>
      </NextArrow>
    );
  }


export default PhotoSlideShow; 

