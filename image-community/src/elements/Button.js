import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
  const { width, height, placeholder, background } = props;

  return <React.Fragment></React.Fragment>;
};

Button.defaultProps = {
  width: '40px',
  height: '40px',
  placeholder: '',
  background: '#C4C4C4',
};

const Button = styled.button`
  width: ${(props) => props.width};
`;
export default Button;
