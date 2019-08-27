import React from 'react';
import PhotoCollage from './PhotoCollage.jsx';
import axios from 'axios';
import PhotoSlideShow from './PhotoSlideShow.jsx';

class App extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            photos: [],
        }
        this.fetchPhotos = this.fetchPhotos.bind(this);
    }

    componentDidMount() {
        this.fetchPhotos();
    }
    
    fetchPhotos() {
        axios.get('/api/displayphotos/1')
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        })
    }

    render() {
        return (
            <div className="container">
                {/* <PhotoCollage /> */}
                <div>
                <PhotoSlideShow />
                </div>
            </div>
        );
    }
}

export default App; 