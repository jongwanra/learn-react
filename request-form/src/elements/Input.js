import React from 'react';
import styled from 'styled-components';
const Input = (props) => {
  return <Container {...props} />;
};

const Container = styled.input`
  display: block;
  box-sizing: border-box;
  border-radius: 10px;
  border: none;
  background-color: white;
  padding: 0 2%;
  width: 100%;
  height: ${(props) => (props.heightInput ? props.heightInput : '90px')};
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom : '0px'};
  font-size: 30px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  color: #969696;
`;
export default Input;
