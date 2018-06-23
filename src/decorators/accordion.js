import React, { Component as ReactComponent } from 'react';

export default (OriginalComponent) => class AccordionComponent extends ReactComponent {

    state = {
        openArticleID: null
    };

    accordionToggleOpen = openArticleID => ev => {
        this.setState({ openArticleID });
    };

    render() {
        return <OriginalComponent {...this.props} {...this.state} accordionToggleOpen={this.accordionToggleOpen} />
    }
}