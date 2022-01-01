import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import bucket from './modules/bucket';

const middlewares = [thunk];
const rootReducer = combineReducers({ bucket });
const enhancer = applyMiddleware(...middlewares);
const store = createStore(rootReducer, enhancer);
export default store;
