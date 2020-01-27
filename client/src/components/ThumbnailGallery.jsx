import React, { Component } from 'react';

const ThumbnailWrapper = styled.div`
    position: relative; 
    flex-direction:row;
    height: 100%;
    width: 100%; 
    top: 10%;
    right: 5%;
`;

class ThumbnailGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      borderColor: false, 
    }
  }
  render() {
    return (
      <div>
           <ThumbnailWrapper style={{
               transform: `translateX(${this.props.translateValue}px)`,
               transition: 'transform ease-out 0.45s'
            }}>
                {this.props.photos.map((image, index) => (
                    <Thumbnails image={image} borderColor={this.state.borderColor} key={index} id="thumbnailId" handleClick={this.props.handleClick.bind(this, index)} />
                ))}
          </ThumbnailWrapper>
      </div>
    );
  }
}

export default ThumbnailGallery; 