import React from 'react';
import PhotoCollage from './PhotoCollage.jsx';
import axios from 'axios';

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
    
    fetchPhotos(listingId) {
        axios.get('/api/displayphotos', {
            params: {
                listing_id: listingId,
            }
        })
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        })
    }

    render() {
        return (
            <PhotoCollage />
        );
    }
}

export default App; 