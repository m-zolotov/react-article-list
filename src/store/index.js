import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducers';
import logger from '../middlewares/logger';
import randomId from '../middlewares/randomId'

const enhancer = applyMiddleware(logger, randomId);

const store = createStore(reducer, {}, enhancer);

// Dev only
window.store = store;

export default store