import React from 'react';
import styled from 'styled-components';

const HeaderGrid = (props) => {
  const { width, margin, padding, children } = props;
  const styles = {
    width,
    margin,
    padding,
  };
  return (
    <React.Fragment>
      <GridBox {...styles}>{children}</GridBox>
    </React.Fragment>
  );
};

HeaderGrid.defaultProps = {
  children: null,
  width: '100%',
  padding: '8px 16px',
  margin: '0 0 16px 0',
};

const GridBox = styled.div`
  width: ${(props) => props.width};
  height: 56px;
  box-sizing: border-box;
  background-color: red;
`;
export default HeaderGrid;
