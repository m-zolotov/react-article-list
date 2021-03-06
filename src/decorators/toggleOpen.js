import React, { Component as ReactComponent } from 'react';

export default (Component) => class ToggleComponent extends ReactComponent {

    state = {
        isOpen: false,
    };

    toggleOpen = (ev) => {
        ev && ev.preventDefault && ev.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    render() {
        return <Component {...this.props} {...this.state} toggleOpen={this.toggleOpen} />
    }
}