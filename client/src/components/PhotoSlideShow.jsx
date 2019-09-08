import React from 'react';


const Container = styled.div`
  display: flex;
`;

//flex-direction: row
//align items: stretch


const SliderWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;


// export const BackArrow = styled.div`
// display: flex;
// height: 50px;
// width: 50px;
// display: flex;
// align-items: center;
// justify-content: center;
// background: #f9f9f9;
// cursor: pointer;
// transition: transform ease-in .1s;
// position: absolute;
// top: 46%;
// left: 2%;
// z-index: 999;
// color: #fff;
// background-image: url('https://photogalleryproject.s3.us-east-2.amazonaws.com/backarrow.png');
// `;

// export const NextArrow = styled.div`
// height: 50px;
// width: 50px;
// display: flex;
// align-items: center;
// justify-content: center;
// background: #f9f9f9;
// border-radius: 50%;
// cursor: pointer;
// transition: transform ease-in .1s;
// position: absolute;
// top: 46%;
// right: 30%;
// z-index: 999;
// color: #fff;
// background-image: url('https://photogalleryproject.s3.us-east-2.amazonaws.com/nextarrow.png');
// `;


export const Slide = styled.div`
  display: inline-block;
  height: 525px;
  width: 785px;
  top: 15%;
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
          <Container>
          <SliderWrapper style={{
              transform: `translateX(${this.props.translateValue}px)`,
              transition: 'transform ease 0.25s'
            }}> 
              {
                this.props.photos.map((photo, i) => (
                //   var styles = {
                //     backgroundImage: `url(${photo})`,
                //     backgroundSize:'cover',
                //     backgroundRepeat: 'no-repeat',
                //     backgroundPosition: '50% 60%'
                // }
                  <Slide className="slide" key={i} style={{
                  backgroundImage: `url(${photo})`,
                  backgroundSize:'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: '50% 60%'}} />
                ))
              }
          </SliderWrapper>
{/*             
         <LeftArrow  index={this.props.index} handleClick={this.props.handleClick}/>

         <RightArrow index={this.props.index} handleClick={this.props.handleClick}/>  */}
         </Container>
      );
    }
  }
  


// export const Slide = ({ photo }) => {
//     var styles = {
//         backgroundImage: `url(${photo})`,
//         backgroundSize:'cover',
//         backgroundRepeat: 'no-repeat',
//         backgroundPosition: '50% 60%'
//     }
//     return (
//         <Slides className="slide" style={styles}></Slides>
//     );
//   };

  
// export const LeftArrow = ({ handleClick, index }) => {
//     return (
//       <BackArrow className="back-arrow" onClick={() => handleClick(index - 1)} >
//       </BackArrow>
//     );
//   }
  
  
// export const RightArrow = ({ handleClick, index }) => {
//     return (
//       <NextArrow className="next-arrow"  onClick={() => handleClick(index + 1)} >
//       </NextArrow>
//     );
//   }


export default PhotoSlideShow;



