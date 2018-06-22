import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import toggleOpen from '../../decorators/toggleOpen';
import Comment from '../Comment';

import './style.css';

CommentList.propTypes = {
    comments: PropTypes.array.isRequired
};

CommentList.defaultProps = {
    comments: []
};

function getBody({comments, isOpen}) {
    if (!isOpen) return null;
    if (!comments.length) return <p>No comments yet</p>;

    return (
        <ul className="CommentList">
            {comments.map(comment => <li key={comment.id} className="CommentList__item"><Comment comment={comment} /></li>)}
        </ul>
    )
}

function CommentList ({comments = [], isOpen, toggleOpen}) {
    const text = isOpen ? 'Hide comments' : 'Show comments';
    return (
        <Fragment>
            <button className="button button--light" onClick={toggleOpen}>{text}</button>
            {getBody({comments, isOpen})}
        </Fragment>
    )
}

export default toggleOpen(CommentList);