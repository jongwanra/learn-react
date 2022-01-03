import React from 'react';
import styled from 'styled-components';

const Image = (props) => {
  const { shape, src, size } = props;
  const styles = {
    src,
    size,
  };
  if (shape === 'circle') {
    return <ImageCircle {...styles}></ImageCircle>;
  }
  if (shape === 'rectangle') {
    return (
      <AspectOutter>
        <AspectInner {...styles}></AspectInner>
      </AspectOutter>
    );
  }
};

Image.defaultProps = {
  shape: 'circle',
  src: 'https://cdn.pixabay.com/photo/2021/12/11/07/59/hotel-6862159__340.jpg',
  size: 36,
};

const ImageCircle = styled.div`
  /* 변수 만들기 */
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);

  background-image: url('${(props) => props.src}');
  background-size: cover;
  margin: 4px;
`;
// 바깥 div
const AspectOutter = styled.div`
  width: 100%;
  min-width: 250px;
`;

// 내부 div
const AspectInner = styled.div`
  position: relative;
  padding-top: 75%;
  overflow: hidden;

  background-image: url('${(props) => props.src}');
  background-size: cover;
`;
export default Image;
