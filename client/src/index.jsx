import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import WebFont from 'webfontloader';

WebFont.load({
    google: {
      families: ['Titillium Web:300,400,700', 'Montserrat Thin', 'Nunito Sans Light', 'Roboto Light', 'Helvetica Neue Light', 'sans-serif']
    }
  });

// ReactDOM.render(<App />, document.getElementById('photogallery')); 