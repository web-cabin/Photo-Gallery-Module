import React from 'react';
import styled from 'styled-components';

// const ThumbnailContainer = styled.div`
//     display: flex;
//     max-width: 252px;
//     height: 60px;
//     white-space: nowrap;
//     flex-direction: row;
//     flex-wrap: nowrap;
//     margin: 7px;
// `;

// display: flex;
// margin: 0 auto;
// overflow: hidden;
// white-space: nowrap;
// width: 785px;
// float: left;
// margin: 130px;
// margin: 7px; 
// overflow: hidden;

const ThumbnailWrapper = styled.div`
    position: relative;
    height: 100%;
    width: 100%; 
`;

const Thumbnail = styled.div`
    display: inline-flex;
    height: 58px;
    width: 58px;
    flex-basis: 80%;
    flex: 1 0 15%;
    margin-right: 20px;
    position: relative;
    border-radius: 5px;
    margin: 7px;
    padding: 5px;
    top: 120px;
`;


class ThumbnailGallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0,
      translateValue: 0,
    }
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);
    this.thumbnailWidth = this.thumbnailWidth.bind(this);
    this.handleClick = this.handleClick.bind(this); 
  }

  goToPrevSlide() {
    if(this.state.currentIndex === 0)
      return;
    
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.thumbnailWidth()
    }))
  }

  goToNextSlide() {
    // Exiting the method early if we are at the end of the images array.
    // We also want to reset currentIndex and translateValue, so we return
    // to the first image in the array.
    if(this.state.currentIndex === this.props.images.length - 1) 
      return;
    
    // This will not run if we met the if condition above
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
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
    if (event > this.state.currentIndex) {
        this.goToNextSlide();
    } else if (event < this.state.currentIndex) {
        this.goToPrevSlide();
    }
    this.setState({
        currentIndex: event,
    });
  }


  render() {
    return (
      <div>
          {/* <ThumbnailContainer> */}
           <ThumbnailWrapper style={{
               transform: `translateX(${this.state.translateValue}px)`,
               transition: 'transform ease-out 0.45s'
            }}>
          {
              this.props.images.map((image, index) => (
              <Thumbnails image={image} key={index} handleClick={this.handleClick.bind(this, index)} />
            ))
          }
          </ThumbnailWrapper>
          {/* </ThumbnailContainer> */}
      </div>
    );
  }
}


const Thumbnails = ({ image, handleClick, index }) => {
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