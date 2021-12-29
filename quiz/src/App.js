import styled from 'styled-components';
import Quiz from './Quiz';
import Result from './Result';
import { Route } from 'react-router-dom';

function App() {
  return (
    <Body className="App">
      <Container>
        <Route path="/quiz/:index" exact>
          <Quiz />
        </Route>
        <Route path="/result" exact>
          <Result />
        </Route>
      </Container>
    </Body>
  );
}
const Body = styled.div`
  background-color: red;
  box-sizing: border;
  margin: 0;
`;
const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 414px;
  height: 736px;
  margin: 0 auto;
  background-color: hotpink;
`;

export default App;
