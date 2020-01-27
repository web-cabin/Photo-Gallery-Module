import React, { Component } from 'react';

const Container = styled.div`
  display: flex;
`;

const SliderWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const Slide = styled.div`
  display: inline-block;
  height: 525px;
  width: 785px;
  top: 15%;
  border-radius: 15px;
`;


class PhotoSlideShow extends Component {
  constructor(props) {
      super(props);
      this.state = {
        translateValue: 0
      }
  }
  render() {
    return (
        <Container>
          <SliderWrapper style={{
              transform: `translateX(${this.props.translateValue}px)`,
              transition: 'transform ease 0.25s'
            }}> 
              {
                this.props.photos.map((photo, i) => (
                  <Slide className="slide" key={i} style={{
                    backgroundImage: `url(${photo})`,
                    backgroundSize:'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '50% 60%'}} 
                  />
                ))
              }
          </SliderWrapper>
        </Container>
    );
  }
}

export default PhotoSlideShow;



