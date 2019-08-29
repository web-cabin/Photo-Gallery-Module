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
          { props.descriptions[1]
            //   props.descriptions.map((description, index) => (
            //   <DescriptionList description={description} key={index} handleClick={props.handleClick.bind(this, index)} />
            // ))
          }
          </DescriptionWrapper>
      </div>
  );
}

export const DescriptionList = ({ description }) => {
   let styles = {
    fontSize: 15,
   }
  return (
      <Description className="description" onClick={() => handleClick(event)} >`${description}`</Description>
  );
}

export default Descriptions; 




// export const DescriptionList = ({ description }) => {
//     return (
//       <Description className="description">{description}</Description>
//     );
//   }