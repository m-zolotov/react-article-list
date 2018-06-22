import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import CommentList from '../CommentList';

import './style.css';

export default class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            comments: PropTypes.array
        }).isRequired
    };

    constructor(props){
        super(props);

        this.state = {
            isOpen: false,
        }
    };
    toggleOpen = (ev) => {
        ev.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        })
    };
    getBody() {
        if(!this.state.isOpen) return null;
        const {article} = this.props;
        return (
            <section className="Article__section">
                <p>{article.text}</p>
                <CommentList comments={article.comments} />
            </section>
        )
    };

    render() {
        const {article} = this.props;
        const {isOpen} = this.state;

        return (
            <Fragment>
                <h3 className="Article__title">{article.title}</h3>
                <button className="button button--primary" onClick = {this.toggleOpen}>{isOpen ? 'Close' : 'Open'}</button>
                {this.getBody()}
            </Fragment>
        )
    }
}