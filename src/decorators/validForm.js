import React, { Component as ReactComponent } from 'react';

export default (Component) => class ValidForm extends ReactComponent {

    state = {
        isValid: true
    };

    validInput = (ev) => {
        ev && ev.preventDefault && ev.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    render() {
        return <Component {...this.props} {...this.state} onChange={this.validInput} />
    }
}