import Image from './components/Image';
import Form from './components/Form';
import styled from 'styled-components';
import { img1, img2, img3, img4 } from './assets/images/index.js';

function App() {
  return (
    <Container className="App">
      <Image imgUrl={img1} height={'1478px'} />
      <Image imgUrl={img2} height={'1698px'} />
      <Image imgUrl={img3} height={'1470px'} />
      <Image imgUrl={img4} height={'812px'} />
      <Form />
    </Container>
  );
}

const Container = styled.div`
  box-sizing: border-box;
  margin: 0;
`;
export default App;
