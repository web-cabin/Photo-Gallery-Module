import React from 'react'; 
import styled from 'styled-components';


const DescriptionWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

export const Description = styled.div`
font-family: Roboto, Helvetica Neue, sans-serif;
font-size: 15px;
font-weight: 325;
line-height: 1.43;
color: #484848;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 200px;
overflow-wrap: normal;
`;

const Descriptions = (props) => {
  return (
      <div>
          <DescriptionWrapper>
          { props.descriptions[props.index]
            //   <Description className="description" key={index} handleClick={props.handleClick.bind(this, index)}>{description}</Description>
          }
          </DescriptionWrapper>
      </div>
  );
}

export default Descriptions; 




// export const DescriptionList = ({ description }) => {
//     return (
//       <Description className="description">{description}</Description>
//     );
//   }