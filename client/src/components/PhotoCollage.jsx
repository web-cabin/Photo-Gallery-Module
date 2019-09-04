import React from 'react';
import styled from 'styled-components';



const Container = styled.div`
    &: hover #image:not(:hover) {
        background-color: #000;
        filter: brightness(50%);
    }
`;

const ImageOne = styled.img`
    display: inline-block;
    top: 10%;
    left: 0%;
    position: absolute;
    transform: scale(1);
    height: 478px;
    width: 720px; 
    box-sizing: border-box;
    cursor: pointer;
    border: solid 1px black;
    z-index: -1; 
    transition: transform .4s;  
`;

const ImageTwo = styled.img`
    display: inline-block;
    position: absolute;
    transform: scale(1);
    left: 50%;
    top: 10%;
    height: 239px;
    width: 360px; 
    box-sizing: border-box;
    cursor: pointer;
    border: solid 1px black;
    z-index: 1; 
    transition: transform .4s;  
`;

const ImageThree = styled.img`
    display: inline-block;
    position: absolute;
    transform: scale(1);
    top: 10%;
    right: 0%;
    height: 239px;
    width: 360px; 
    box-sizing: border-box;
    cursor: pointer;
    border: solid 1px black;
    z-index: 1; 
    transition: transform .4s;  
`;

const ImageFour = styled.img`
    display: inline-block;
    position: absolute;
    transform: scale(1);
    left: 50%;
    top: 40%;
    height: 239px;
    width: 360px; 
    box-sizing: border-box;
    cursor: pointer;
    border: solid 1px black;
    z-index: 1; 
    transition: transform .4s;  
`;

const ImageFive = styled.img`
    display: inline-block;
    position: absolute;
    transform: scale(1);
    right: 0%;
    top: 40%;
    height: 239px;
    width: 360px; 
    box-sizing: border-box;
    cursor: pointer;
    border: solid 1px black;
    z-index: 1; 
    transition: transform .4s;  
`;


const PhotoCollage = ({ photos, renderCarousel }) => {
    return (
        <Container>
        <ImageOne  src={`${photos[0]}`} id="image" onClick={() => renderCarousel()}/>
        <ImageTwo src={`${photos[1]}`} id="image" onClick={() => renderCarousel()} />
        <ImageThree src={`${photos[2]}`} id="image" onClick={() => renderCarousel()} />
        <ImageFour src={`${photos[3]}`} id="image" onClick={() => renderCarousel()} />
        <ImageFive src={`${photos[4]}`} id="image" onClick={() => renderCarousel()} />
        </Container>
    );
}

export default PhotoCollage;
