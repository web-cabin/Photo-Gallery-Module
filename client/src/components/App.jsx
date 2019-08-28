import React from 'react';
import PhotoCollage from './PhotoCollage.jsx';
import axios from 'axios';
import $ from 'jquery';
import PhotoSlideShow from './PhotoSlideShow.jsx';

class App extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            photos: [],
            descriptions: [],
            showSlideshow: false,
            index: 0,
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
                {this.state.showSlideshow? <PhotoSlideShow photos={this.state.photos} descriptions={this.state.descriptions} /> : <PhotoCollage photos={this.state.photos} renderCarousel={this.renderCarousel}/>}
            </div>
        );
    }
}

export default App; 