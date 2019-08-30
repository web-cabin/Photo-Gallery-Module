import React from 'react';
import styled from 'styled-components';


const ThumbnailWrapper = styled.div`
    position: relative;
    height: 100%;
    width: 100%; 
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



class ThumbnailGallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      borderColor: '#ffffff',
    }
    this.thumbnailClick = this.thumbnailClick.bind(this);
  }

  thumbnailClick() {
    this.setState({
      borderColor: 'black',
    })
  }

  render() {
    return (
      <div>
           <ThumbnailWrapper style={{
               transform: `translateX(${this.props.translateValue}px)`,
               transition: 'transform ease-out 0.45s'
            }}>
          {
              this.props.photos.map((image, index) => (
              <Thumbnails image={image} borderColor={this.state.borderColor} thumbnailClick={this.thumbnailClick} key={index} id="thumbnailId" handleClick={this.props.handleClick.bind(this, index)} />
            ))
          }
          </ThumbnailWrapper>
      </div>
    );
  }
}


export const Thumbnails = ({ image, handleClick, borderColor, thumbnailClick }) => {
    var styles = {
        backgroundImage: `url(${image})`,
        backgroundSize:'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top 50% right 50%',
        border: `${borderColor}`,
    }
    return (
        <Thumbnail className="thumbnail" style={styles} onClick={() => thumbnailClick} onClick={(event) => handleClick(event)} ></Thumbnail>
    );
}

export default ThumbnailGallery; 