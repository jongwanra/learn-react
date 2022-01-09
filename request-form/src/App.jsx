import React from 'react';
import Image from './components/Image';
import Form from './components/Form';
import styled from 'styled-components';
import { img1, img2, img3, img4 } from './assets/images/index.js';

function App() {
  return (
    <Container className="App">
      <Wrapper>
        <Image imgUrl={img1} />
        <Image imgUrl={img2} />
        <Image imgUrl={img3} />
        <Image imgUrl={img4} />
        <Form />
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
`;

const Wrapper = styled.div`
  position: relative;
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
`;

export default App;
