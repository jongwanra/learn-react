// store를 설정하는 파일
import { createWrapper } from "next-redux-wrapper";
import { createStore, compose, applyMiddleware } from "redux";
import reducer from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";
const configureStore = () => {
  // 배포용일 때는 데브툴 연결을 해제해야한다. 안해주면 배포했을 때, 리덕스 정보 전부 유출..
  const middlewares = [];
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(reducer, enhancer);
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === "development",
});
export default wrapper;
