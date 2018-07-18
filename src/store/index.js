import {createStore} from 'redux';
import reducer from '../reducers';

const store = createStore(reducer);

// Dev only
window.store = store;

export default store