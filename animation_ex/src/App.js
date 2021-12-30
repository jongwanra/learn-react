import styled, { keyframes } from 'styled-components';
function App() {
  return (
    <div className="App">
      <Box></Box>
    </div>
  );
}
const boxAnimation = keyframes`
  0% {
    border-radius: 0px;
  }
  50% {
    border-radius: 25px;
    top: 400px;
    left: 500px;
  }
  100% {
    border-radius: 50px;
    top: 50px;
    left: 20px;
  }
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: green;
  border-radius: 50%;
  position: absolute;
  top: 20px;
  left: 20px;
  animation: ${boxAnimation} 2s 1s infinite linear;
`;

export default App;
