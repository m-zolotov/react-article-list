import React, { Component as ReactComponent } from 'react';

export default (Component) => class Accordion extends ReactComponent {

    state = {
        openItemID: null
    };

    toggleOpenItem = openItemID => ev => {
        this.setState({
            openItemID: openItemID === this.state.openItemID ? null : openItemID
        });
    };

    render() {
        return <Component {...this.props} {...this.state} toggleOpenItem={this.toggleOpenItem} />
    }
}