import { createStore } from 'redux';

export default createStore((state, action) => {
  console.log('redux state of store: ', state, 'action:', action);
  // state가 undefined일 경우
  if (!state) {
    return { number: 0 };
  }

  if (action.type === 'INCREMENT') {
    return { ...state, number: state.number + action.size };
  }
  return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
