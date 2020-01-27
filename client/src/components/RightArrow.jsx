import React from 'react';

const NextArrow = styled.div`
    height: 50px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f9f9f9;
    border-radius: 50%;
    cursor: pointer;
    transition: transform ease-in .1s;
    position: absolute;
    top: 30%;
    right: 5%;
    z-index: 999;
    color: #fff;
    background-image: url('https://photogalleryproject.s3.us-east-2.amazonaws.com/nextarrow.png');
`;

const RightArrow = ({ handleClick, index }) => {
  return (
    <NextArrow className="next-arrow"  onClick={() => handleClick(index + 1)} >
    </NextArrow>
  );
}

export default RightArrow; 