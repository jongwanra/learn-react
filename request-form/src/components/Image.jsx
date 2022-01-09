import React from 'react';
import styled from 'styled-components';
const Image = (props) => {
  return ( 
    <Container>
      <ImageBox {...props}></ImageBox>
    </Container>
  );
};

const Container = styled.div``;
const ImageBox = styled.img.attrs((props) => ({
  src: props.imgUrl,
}))`
  display: block;
  width: 100%;
`;

export default Image;
