import React from 'react';
import PhotoCollage from './PhotoCollage.jsx';
import axios from 'axios';
import $ from 'jquery';
import PhotoSlideShow from './PhotoSlideShow.jsx';
import ThumbnailGallery from './ThumbnailGallery.jsx';
import styled from 'styled-components';


const ThumbnailContainer = styled.div`
    position: relative; 
    max-width: 300px;
    overflow: hidden;
    margin: 0 auto;
    white-space: nowrap;
    float: right;
    border: solid 1px blue;
    top: 130px;
    right: 60px;
`;

const SliderContainer = styled.div`
  display: flex;
  margin: 0 auto;
  overflow: hidden;
  white-space: nowrap;
  width: 785px;
  float: left;
  margin: 130px;
`;

export const Description = styled.div`
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
  height: 300px;
  max-width: 300px;
  overflow: hidden;
  margin: 0 auto;
  white-space: nowrap;
  top: 300px;
  border: solid 1px blue; 
`;

const DescriptionWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

class App extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            photos: [],
            descriptions: [],
            showSlideshow: false,
            index: 0,
            translateValue: 0,
        }
        this.fetchPhotos = this.fetchPhotos.bind(this);
        this.renderCarousel = this.renderCarousel.bind(this);
    }

    componentDidMount() {
        this.fetchPhotos();
    }
    
    fetchPhotos() {
        $.ajax({
            url: '/api/displayphotos/8',
            method: 'GET',
            success: (response) => {
                // array.toString().split(',');
                // console.log(response[0].description);
                console.log(response);
                this.setState({
                    photos: response[0].photo_url.toString().split(','),
                    descriptions: response[0].description,
                });
            },
            error: (data) => {
                console.log('failure to retrieve', data); 
            }
        })
    }

    renderCarousel() {
        this.setState({
            showSlideshow: true,
        });
    }


    render() {
        return (
            <div className="container">
                {this.state.showSlideshow? 
                <div>
                <ThumbnailContainer>
                <ThumbnailGallery photos={this.state.photos} />
                </ThumbnailContainer>
                <SliderContainer>
                <PhotoSlideShow photos={this.state.photos} descriptions={this.state.descriptions} />
                </SliderContainer>
                <DescriptionContainer>        
                    <DescriptionWrapper> 
                        {this.state.descriptions}
                    {/* {this.state.descriptions.map((description, i) => {
                     <DescriptionList key={i} description={description} />
                     })
                    }  */}
                </DescriptionWrapper>
                </DescriptionContainer>
                </div>
                : <PhotoCollage photos={this.state.photos} renderCarousel={this.renderCarousel}/>}
            </div>
        );
    }
}


const DescriptionList = ({ description }) => {
    return (
      <Description className="description">{description}</Description>
    );
  }


export default App; 