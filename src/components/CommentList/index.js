import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import toggleOpen from '../../decorators/toggleOpen';
import Comment from '../Comment';

import './style.css';

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array.isRequired
    };

    static defaultProps = {
        comments: []
    };

    getBody() {
        const {comments, isOpen} = this.props;
        if (!isOpen) return null;
        if (!comments.length) return <p>No comments yet</p>;

        return (
            <ul className="CommentList">
                {comments.map(comment => <li key={comment.id} className="CommentList__item"><Comment comment={comment} /></li>)}
            </ul>
        )
    };

    render() {
        const text = this.props.isOpen ? 'Close comments' : 'Open comments';
        return (
            <Fragment>
                <button className="button button--light" onClick={this.props.toggleOpen}>{text}</button>
                {this.getBody()}
            </Fragment>
        )
    }
}

export default toggleOpen(CommentList);