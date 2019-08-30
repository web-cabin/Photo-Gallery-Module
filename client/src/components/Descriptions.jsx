import React from 'react'; 
import styled from 'styled-components';


const DescriptionWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  font-family: 'Montserrat', sans-serif;
  color: #484848;
  font-weight: 100;
  line-height: 1.43;
  font-size: 16px;
`;


const Descriptions = (props) => {
  return (
      <div>
          <DescriptionWrapper>
          { props.descriptions[props.index] }
          </DescriptionWrapper>
      </div>
  );
}

export default Descriptions; 
