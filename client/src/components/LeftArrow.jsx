import React from 'react';

const BackArrow = styled.div`
    display: flex;
    height: 50px;
    width: 50px;
    align-items: center;
    justify-content: center;
    background: #f9f9f9;
    cursor: pointer;
    transition: transform ease-in .1s;
    position: absolute;
    top: 30%;
    left: 5%;
    z-index: 999;
    color: #fff;
    background-image: url('https://photogalleryproject.s3.us-east-2.amazonaws.com/backarrow.png');
`;
   
const LeftArrow = ({ handleClick, index }) => {
  return (
    <BackArrow className="back-arrow" onClick={() => handleClick(index - 1)} >
    </BackArrow>
  );
}

export default LeftArrow; 