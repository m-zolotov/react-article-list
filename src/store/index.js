import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducers';
import logger from '../middlewares/logger';
import randomId from '../middlewares/randomId';
import api from '../middlewares/api';
import thunk from 'redux-thunk';

const enhancer = applyMiddleware(thunk, logger, api, randomId);

const store = createStore(reducer, {}, enhancer);

// Dev only
window.store = store;

export default store