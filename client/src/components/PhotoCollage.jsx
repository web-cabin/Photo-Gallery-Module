import React from 'react';


const Container = styled.div`
    display: flex;
    width: 100%;
    height: 25%;

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
    height: 50%
    width: 50%; 
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
    height: 25%;
    width: 25%; 
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
    height: 25%;
    width: 25%; 
    box-sizing: border-box;
    cursor: pointer;
    border: solid 1px black;
    z-index: -1; 
    transition: transform .4s;  
`;

const ImageFour = styled.img`
    display: inline-block;
    position: absolute;
    transform: scale(1);
    left: 50%;
    top: 35%;
    height: 25%;
    width: 25%; 
    box-sizing: border-box;
    cursor: pointer;
    border: solid 1px black;
    z-index: -1; 
    transition: transform .4s;  
`;

const ImageFive = styled.img`
    display: inline-block;
    position: absolute;
    transform: scale(1);
    right: 0%;
    top: 35%;
    height: 25%;
    width: 25%; 
    box-sizing: border-box;
    cursor: pointer;
    border: solid 1px black;
    z-index: -1; 
    transition: transform .4s;  
`;

const NavBar = styled.img`
    display: inline-block;
    position: absolute;
    top: 0%;
    left: 5%;
`;

const ListingInfo = styled.img`
    display: inline-block;
    position: absolute;
    top: 65%;
    left: 12%;
`;

const WebCabinLogo = styled.img`
    position: absolute;
    top: 1%;
    left: 5%
    height: 60px;
    width: 60px;
`;

const PhotoCollage = ({ photos, renderCarousel }) => {
    return (
        <Container>
            <NavBar src={'https://photogalleryproject.s3.us-east-2.amazonaws.com/NavBar.png'} />
            <WebCabinLogo src={'https://photogalleryproject.s3.us-east-2.amazonaws.com/WebCabinLogo.png'} />
            <ImageOne  src={`${photos[0]}`} id="image" onClick={() => renderCarousel()}/>
            <ImageTwo src={`${photos[1]}`} id="image" onClick={() => renderCarousel()} />
            <ImageThree src={`${photos[2]}`} id="image" onClick={() => renderCarousel()} />
            <ImageFour src={`${photos[3]}`} id="image" onClick={() => renderCarousel()} />
            <ImageFive src={`${photos[4]}`} id="image" onClick={() => renderCarousel()} />
            <ListingInfo src={'https://photogalleryproject.s3.us-east-2.amazonaws.com/ListingInfo.png'} />
        </Container>
    );
}

export default PhotoCollage;
