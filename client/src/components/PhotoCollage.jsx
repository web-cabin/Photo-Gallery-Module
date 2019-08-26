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
    -webkit-transition: all .5s ease;
    -moz-transition: all .5s ease;
    -ms-transition: all .5s ease;
    -o-transition: all .5s ease;
    transition: all .5s ease;

    ${ImageOne}:hover {
        transform: scale(0.9);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        -webkit-transform: scale(1.2);
        -moz-transform: scale(1.2);
        -o-transform: scale(1.2);
        -ms-transform: scale(1.2); 
        transform: scale(1.2)
    }
`;

const ContainerOne = styled.div`
    &:hover ${ImageOne} {
        display: none;
    }
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
        <ContainerOne>
        <ImageOne src="https://photogalleryproject.s3.us-east-2.amazonaws.com/image1.jpeg" />
        </ContainerOne>
        <ImageTwo src="https://photogalleryproject.s3.us-east-2.amazonaws.com/image2.jpeg" />
        <ImageThree src="https://photogalleryproject.s3.us-east-2.amazonaws.com/image3.jpeg" />
        <ImageFour src="https://photogalleryproject.s3.us-east-2.amazonaws.com/image4.jpeg" />
        <ImageFive src="https://photogalleryproject.s3.us-east-2.amazonaws.com/image5.jpeg" />

        </div>
    );
}

export default PhotoCollage;
