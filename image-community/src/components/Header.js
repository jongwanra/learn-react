import React from 'react';
import HeaderGrid from '../elements/HeaderGrid';
const Header = (props) => {
  return (
    <React.Fragment>
      <HeaderGrid></HeaderGrid>
    </React.Fragment>
  );
};

Header.defaultProps = {
  btn: {
    placeholder: '로그인',
  },
};
export default Header;
