import React from 'react';
import styled from 'styled-components';
import { Eco } from '@material-ui/icons';
const Spinner = (props) => {
  return (
    <Outter>
      <Eco style={{ colir: '#673ab7', fontSize: '150px' }} />
    </Outter>
  );
};

const Outter = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #af81ff;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Spinner;
