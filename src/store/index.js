import {createStore} from 'redux';
import reducer from '../reducer';

const store = createStore(reducer);

// Dev only
window.store = store;

export default store