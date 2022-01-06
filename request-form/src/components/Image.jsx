import React from 'react';
import styled from 'styled-components';
const Image = (props) => {
  return (
    <>
      <ImageBox {...props}></ImageBox>
    </>
  );
};

const ImageBox = styled.div`
  margin: 0 auto;
  width: inherit;
  width: 1100px;
  height: ${(props) => props.height};
  background-image: url(${(props) => props.imgUrl});
  background-position: center top;
  background-size: 100% auto;
  background-repeat: no-repeat;
`;
export default Image;
