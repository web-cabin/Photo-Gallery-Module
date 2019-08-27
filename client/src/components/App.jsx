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
            showSlideshow: false,
        }
        this.fetchPhotos = this.fetchPhotos.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.fetchPhotos();
    }
    
    fetchPhotos() {
        $.ajax({
            url: '/api/displayphotos/1',
            method: 'GET',
            success: (response) => {
                // array.toString().split(',');
                console.log(response[0].photo_url.toString().split(','));
                response = response[0].photo_url.toString().split(',');
                this.setState({
                    photos: response,
                });
            },
            error: (data) => {
                console.log('failure to retrieve', data); 
            }
        })
    }

    handleChange() {
        this.setState({
            showSlideshow: true,
        })
    }

    render() {
        return (
            <div className="container">
                <PhotoCollage photos={this.state.photos} onChange={this.handleChange}/>
                <div>
                    {this.state.showSlideshow && <PhotoSlideShow photos={this.state.photos} />}
                </div>
            </div>
        );
    }
}

export default App; 