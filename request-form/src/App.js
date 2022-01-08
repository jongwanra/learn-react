import React from 'react';
import Image from './components/Image';
import Form from './components/Form';
import styled from 'styled-components';
import { imgOrigin } from './assets/images/index.js';

function App() {
  return (
    <Container className="App">
      <Image imgUrl={imgOrigin} />
      <Form />
    </Container>
  );
}

const Container = styled.div`
  width: 1100px;
  height: 100%;
  box-sizing: border-box;
  margin: 0 auto;
`;
export default App;
