import React, { Component, Fragment } from 'react';
import './style.css';

export default class Article extends Component {
    constructor(props){
        super(props);
        this.state = {
            isOpen: false
        }
    };
    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };
    getBody() {
        if(!this.state.isOpen) return null;
        const {article} = this.props;
        return <section>{article.text}</section>
    };

    render() {
        const {article} = this.props;
        const {isOpen} = this.state;

        return (
            <Fragment>
                <h3 className="Article__title">{article.title}</h3>
                <button className="button" onClick = {this.toggleOpen}>{isOpen ? 'Close' : 'Open'}</button>
                {this.getBody()}
            </Fragment>
        )
    }
}