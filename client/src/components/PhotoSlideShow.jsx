import React from 'react';
import styled from 'styled-components';
import ThumbnailGallery from './ThumbnailGallery.jsx';

const SliderContainer = styled.div`
  display: flex;
  margin: 0 auto;
  overflow: hidden;
  white-space: nowrap;
  width: 785px;
  float: left;
  margin: 130px;
`;

// height: 500px

// white-space: nowrap;
// flex-direction: row;
// flex-wrap: nowrap;

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

const Description = styled.div`
font-family: Roboto, Helvetica Neue, sans-serif;
font-size: 15px;
font-weight: 325;
line-height: 1.43;
color: #484848;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 150px;
`;

const DescriptionContainer = styled.div`
  position: relative; 
  max-width: 300px;
  height: 300px;
  overflow: hidden;
  margin: 0 auto;
  white-space: nowrap;
  top: 200px;
`;

const DescriptionWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

class PhotoSlideShow extends React.Component {
  constructor(props) {
      super(props);
      
      this.state = {
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
      if(this.state.currentIndex === this.props.photos.length - 1) {
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
      console.log('rendering photoslideshow');
      return (
        <div>
        <SliderContainer>
          <SliderWrapper style={{
              transform: `translateX(${this.state.translateValue}px)`,
              transition: 'transform ease-out 0.45s'
            }}> 
              {
                this.props.photos.map((photo, i) => (
                  <Slide key={i} photo={photo} />
                ))
              }
          </SliderWrapper>
            
        </SliderContainer>
         <LeftArrow goToPrevSlide={this.goToPrevSlide} />

         <RightArrow goToNextSlide={this.goToNextSlide}/> 

         <ThumbnailGallery photos={this.props.photos} />

      <DescriptionContainer>        
      <DescriptionWrapper> 
        {this.props.descriptions}
      {/* {
        this.props.descriptions.map((description, i) => {
          <DescriptionList key={i} description={description} />
        })
      }  */}
      </DescriptionWrapper>
      </DescriptionContainer>
   
      </div>
      );
    }
  }
  


const Slide = ({ photo }) => {
    var styles = {
        backgroundImage: `url(${photo})`,
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

  const DescriptionList = ({ description }) => {
    return (
      <Description className="description">{description}</Description>
    );
  }


export default PhotoSlideShow; 

