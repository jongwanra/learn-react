// 모든 page들의 공통적인 부분들을 담당하는 컴포넌트
import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import "antd/dist/antd.css";
// next 에서 제공해주는 head태그
import { Provider } from "react-redux";
import { store } from "../redux/store";

const Nodebird = ({ Component }) => {
  return (
    <Provider store={store}>
      <Head>
        <meta charSet="utf-8"></meta>
        <title>NodeBird</title>
      </Head>
      <div>공통 메뉴</div>
      <Component />
    </Provider>
  );
};

Nodebird.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

// export default wrapper.withRedux(Nodebird);
export default Nodebird;
