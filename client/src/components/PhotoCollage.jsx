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
    left: 0%;
    position: absolute;
    transform: scale(1);
    transition: -ms-transform 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s, -webkit-transform 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s, transform 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s, opacity 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
    height: 478px;
    width: 720px; 
    box-sizing: border-box;
    cursor: pointer;
    -webkit-transition: all .5s ease;
    -moz-transition: all .5s ease;
    -ms-transition: all .5s ease;
    -o-transition: all .5s ease;
    transition: all .5s ease;
    border: solid 1px black;
    z-index: -1; 
    transition: opacity 0.2s;
`;

    // ${ImageOne}:hover {
    //     transform: scale(0.9);
    //     box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    //     -webkit-transform: scale(1.2);
    //     -moz-transform: scale(1.2);
    //     -o-transform: scale(1.2);
    //     -ms-transform: scale(1.2); 
    //     transform: scale(1.2)
    // }

// const ContainerOne = styled.div`
//     &:hover ${ImageOne} {
//         display: none;
//     }
// `;

const ImageTwo = styled.img`
    display: inline-block;
    position: absolute;
    transform: scale(1);
    left: 50%;
    transition: -ms-transform 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s, -webkit-transform 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s, transform 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s, opacity 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
    height: 239px;
    width: 360px; 
    box-sizing: border-box;
    cursor: pointer;
    border: solid 1px black;
    z-index: 1; 
    transition: opacity 0.2s;
`;

const ImageThree = styled.img`
    display: inline-block;
    position: absolute;
    transform: scale(1);
    right: 0%;
    transition: -ms-transform 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s, -webkit-transform 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s, transform 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s, opacity 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
    height: 239px;
    width: 360px; 
    box-sizing: border-box;
    cursor: pointer;
    border: solid 1px black;
    z-index: 1; 
    transition: opacity 0.2s;
`;

const ImageFour = styled.img`
    display: inline-block;
    position: absolute;
    transform: scale(1);
    left: 50%;
    top: 31%;
    transition: -ms-transform 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s, -webkit-transform 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s, transform 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s, opacity 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
    height: 239px;
    width: 360px; 
    box-sizing: border-box;
    cursor: pointer;
    border: solid 1px black;
    z-index: 1; 
    transition: opacity 0.2s;
`;

const ImageFive = styled.img`
    display: inline-block;
    position: absolute;
    transform: scale(1);
    right: 0%;
    top: 31%;
    transition: -ms-transform 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s, -webkit-transform 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s, transform 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s, opacity 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
    height: 239px;
    width: 360px; 
    box-sizing: border-box;
    cursor: pointer;
    border: solid 1px black;
    z-index: 1; 
    transition: opacity 0.2s;
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
