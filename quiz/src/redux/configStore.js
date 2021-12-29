import { combineReducers, createStore } from 'redux';
import quiz from './modules/quiz';

const rootReducer = combineReducers({ quiz });
const store = createStore(rootReducer);

export default store;
