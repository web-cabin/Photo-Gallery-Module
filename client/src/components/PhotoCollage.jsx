import React from 'react';
import styled from 'styled-components';

const ImageOne = styled.img`
    display: inline-block;
    left: 0%;
    position: absolute;
    transform: scale(1);
    opacity: 1;
    transition: -ms-transform 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s, -webkit-transform 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s, transform 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s, opacity 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
    height: 456px;
    width: 684px; 
    box-sizing: border-box;
    cursor: pointer;
`;

const ImageTwo = styled.img`
    display: inline-block;
    position: absolute;
    transform: scale(1);
    left: 50%;
    opacity: 1;
    transition: -ms-transform 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s, -webkit-transform 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s, transform 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s, opacity 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
    height: 227.333px;
    width: 341px; 
    box-sizing: border-box;
    cursor: pointer;
`;

const ImageThree = styled.img`
    display: inline-block;
    position: absolute;
    transform: scale(1);
    right: 0%;
    opacity: 1;
    transition: -ms-transform 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s, -webkit-transform 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s, transform 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s, opacity 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
    height: 227.333px;
    width: 341px; 
    box-sizing: border-box;
    cursor: pointer;
`;

const ImageFour = styled.img`
    display: inline-block;
    position: absolute;
    transform: scale(1);
    left: 50%;
    top: 31%;
    opacity: 1;
    transition: -ms-transform 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s, -webkit-transform 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s, transform 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s, opacity 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
    height: 227.333px;
    width: 341px; 
    box-sizing: border-box;
    cursor: pointer;
`;

const ImageFive = styled.img`
    display: inline-block;
    position: absolute;
    transform: scale(1);
    right: 0%;
    top: 31%;
    opacity: 1;
    transition: -ms-transform 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s, -webkit-transform 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s, transform 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s, opacity 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
    height: 227.333px;
    width: 341px; 
    box-sizing: border-box;
    cursor: pointer;
`;

const PhotoCollage = (props) => {
    return (
        <div>
        <ImageOne src="https://api.adorable.io/avatars/285/abott@adorable.png" />
        <ImageTwo src="https://api.adorable.io/avatars/285/abott@adorable.png" />
        <ImageThree src="https://api.adorable.io/avatars/285/abott@adorable.png" />
        <ImageFour src="https://api.adorable.io/avatars/285/abott@adorable.png" />
        <ImageFive src="https://api.adorable.io/avatars/285/abott@adorable.png" />

        </div>
    );
}

export default PhotoCollage;
