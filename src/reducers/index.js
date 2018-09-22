import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import auth from './auth';

const rootReducer = combineReducers({ auth });

export default createStore(rootReducer, applyMiddleware(thunk));
