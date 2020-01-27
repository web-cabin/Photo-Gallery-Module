import React from 'react';

const Thumbnail = styled.div`
    display: inline-flex;
    height: 58px;
    width: 58px;
    border-radius: 5px;
    margin: 7px;
    padding: 5px;
`;

const Thumbnails = ({ image, handleClick }) => {
  var styles = {
      backgroundImage: `url(${image})`,
      backgroundSize:'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top 50% right 50%',
  }
  return (
      <Thumbnail className="thumbnail" style={styles} onClick={(event) => handleClick(event)}></Thumbnail>
  );
}

export default Thumbnails;

