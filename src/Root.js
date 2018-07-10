import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

Root.propTypes = {
};

export default function Root(props) {
    return (
        <Provider store={store}>
            <App {...props}/>
        </Provider>
    )
    
}