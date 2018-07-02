import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import CommentList from '../CommentList/index';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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

    getBody() {
        const {article, isOpen} = this.props;
        if(!isOpen) return null;
        return (
            <section className="Article__section">
                <p>{article.text}</p>
                <CommentList comments={article.comments} />
            </section>
        )
    };

    render() {
        const {article, isOpen, toggleOpen} = this.props;

        return (
            <Fragment>
                <h3 className="Article__title">{article.title}</h3>
                <button className="button button--primary" onClick = {toggleOpen}>
                    {isOpen ? 'Close' : 'Open'}
                </button>
                <ReactCSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={50}>
                    {this.getBody()}
                </ReactCSSTransitionGroup>
            </Fragment>
        )
    }
}