import React from 'react';
import styled from 'styled-components';

// const OuterContainer = styled.div`
//   position: relative; 
//   max-width: 252px;
//   overflow: hidden;
//   margin: 0 auto;
//   white-space: nowrap;
// `;

const ThumbnailContainer = styled.div`
    position: relative; 
    max-width: 300px;
    overflow: hidden;
    margin: 0 auto;
    white-space: nowrap;
    border: solid 1px blue;
    top: 130px;
`;

const ThumbnailWrapper = styled.div`
    position: relative;
    height: 100%;
    width: 100%; 
    border: solid 1px red;
`;

export const Thumbnail = styled.div`
    display: inline-flex;
    height: 58px;
    width: 58px;
    border-radius: 5px;
    margin: 7px;
    padding: 5px;
    top: 120px;
`;

// flex-basis: 80%;
// flex: 1 0 15%;
// margin-right: 20px;
// position: relative;


class ThumbnailGallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentThumbnailIndex: 0,
      translateValue: 0,
    }
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);
    this.thumbnailWidth = this.thumbnailWidth.bind(this);
    this.handleClick = this.handleClick.bind(this); 
  }

  goToPrevSlide() {
    if(this.state.currentThumbnailIndex === 0)
      return;
    
    this.setState(prevState => ({
      currentThumbnailIndex: prevState.currentThumbnailIndex - 1,
      translateValue: prevState.translateValue + this.thumbnailWidth()
    }))
  }

  goToNextSlide() {
    // Exiting the method early if we are at the end of the images array.
    // We also want to reset currentIndex and translateValue, so we return
    // to the first image in the array.
    if(this.state.currentThumbnailIndex === this.props.photos.length - 1) 
      return;
    
    // This will not run if we met the if condition above
    this.setState(prevState => ({
      currentThumbnailIndex: prevState.currentThumbnailIndex + 1,
      translateValue: prevState.translateValue + -(this.thumbnailWidth())
    }));
  }

  thumbnailWidth() {
    return document.querySelector('.thumbnail').clientWidth;
  }

  handleClick(event) {
    var thumbnails = document.querySelectorAll('.thumbnail');
    let thumbnailsArray = (Array.prototype.slice.call(thumbnails));
    console.log(event);
    if (event > this.state.currentThumbnailIndex) {
        this.goToNextSlide();
    } else if (event < this.state.currentThumbnailIndex) {
        this.goToPrevSlide();
    }
    this.setState({
      currentThumbnailIndex: event,
    });
  }


  render() {
    return (
      <div>
          <ThumbnailContainer>
           <ThumbnailWrapper style={{
               transform: `translateX(${this.state.translateValue}px)`,
               transition: 'transform ease-out 0.45s'
            }}>
          {
              this.props.photos.map((image, index) => (
              <Thumbnails image={image} key={index} handleClick={this.handleClick.bind(this, index)} />
            ))
          }
          </ThumbnailWrapper>
          </ThumbnailContainer>
      </div>
    );
  }
}


export const Thumbnails = ({ image, handleClick, index }) => {
    var styles = {
        backgroundImage: `url(${image})`,
        backgroundSize:'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top 50% right 50%'
    }
    return (
        <Thumbnail className="thumbnail" style={styles} onClick={(event) => handleClick(event.target.value)} ></Thumbnail>
    );
}

export default ThumbnailGallery; 