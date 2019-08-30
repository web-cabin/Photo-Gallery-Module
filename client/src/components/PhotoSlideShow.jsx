import React from 'react';
import styled from 'styled-components';


const SliderWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;


export const BackArrow = styled.div`
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

export const NextArrow = styled.div`
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


export const Slides = styled.div`
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
        translateValue: 0
      }
  }
  
    render() {
      console.log('rendering photoslideshow');
      return (
        <div>
          <SliderWrapper style={{
              transform: `translateX(${this.props.translateValue}px)`,
              transition: 'transform ease 0.25s'
            }}> 
              {
                this.props.photos.map((photo, i) => (
                  <Slide key={i} photo={photo} />
                ))
              }
          </SliderWrapper>
            
         <LeftArrow goToPrevSlide={this.props.goToPrevSlide} index={this.props.index} handleClick={this.props.handleClick.bind(this)}/>

         <RightArrow goToNextSlide={this.props.goToNextSlide} index={this.props.index} handleClick={this.props.handleClick.bind(this)}/> 

      </div>
      );
    }
  }
  


export const Slide = ({ photo }) => {
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

  
export const LeftArrow = ({ handleClick, index }) => {
    return (
      <BackArrow className="back-arrow" onClick={() => handleClick(index - 1)} >
      </BackArrow>
    );
  }
  
  
export const RightArrow = ({ handleClick, index }) => {
    return (
      <NextArrow className="next-arrow"  onClick={() => handleClick(index + 1)} >
      </NextArrow>
    );
  }


export default PhotoSlideShow;



