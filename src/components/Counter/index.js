import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
    static propTypes = {
        counter: PropTypes.number
    };

    render () {
        return (
            <h2>{this.props.counter}</h2>
        )
    }
}

export default Counter;