import React from 'react';

const ThumbnailWrapper = styled.div`
    position: relative; 
    flex-direction:row;
    height: 100%;
    width: 100%; 
    top: 10%;
    right: 5%;
`;

export const Thumbnail = styled.div`
    display: inline-flex;
    height: 58px;
    width: 58px;
    border-radius: 5px;
    margin: 7px;
    padding: 5px;
`;



class ThumbnailGallery extends React.Component {
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
          {
              this.props.photos.map((image, index) => (
              <Thumbnails image={image} borderColor={this.state.borderColor} key={index} id="thumbnailId" handleClick={this.props.handleClick.bind(this, index)} />
            ))
          }
          </ThumbnailWrapper>
      </div>
    );
  }
}


export const Thumbnails = ({ image, handleClick, borderColor }) => {
    var styles = {
        backgroundImage: `url(${image})`,
        backgroundSize:'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top 50% right 50%',
    }
    return (
        <Thumbnail className="thumbnail" style={styles} onClick={(event) => handleClick(event)} ></Thumbnail>
    );
}

export default ThumbnailGallery; 