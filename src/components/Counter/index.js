import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {increment} from '../../actions/counter';

class Counter extends Component {
    static propTypes = {
        counter: PropTypes.number
    };

    handleIncrement = () => {
        console.log('---', 'Incrementing');
        this.props.increment()
    };

    render () {
        return (
            <Fragment>
                <h2>{this.props.counter}</h2>
                <button onClick={this.handleIncrement}>Increment me</button>
            </Fragment>
        )
    }
}

export default connect((state) => ({
    counter: state.count
}), { increment })(Counter);