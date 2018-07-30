import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import toggleOpen from '../../decorators/toggleOpen';
import Comment from '../Comment';
import CommentForm from '../CommentForm';

import './style.css';

CommentList.propTypes = {
    comments: PropTypes.array.isRequired,
    // From toggleOpen decorator
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
};

CommentList.defaultProps = {
    comments: []
};

function getBody({article: {comments = [], id}, isOpen}) {
    if (!isOpen) return null;
    if (!comments.length) return (
        <Fragment>
            <p className="CommentList__hint">No comments yet</p>
            <CommentForm articleId = {id} />
        </Fragment>
    );

    return (
        <Fragment>
            <ul className="CommentList">
                {comments.map(id => <li key={id} className="CommentList__item"><Comment id={id}/></li>)}
            </ul>
            <CommentForm articleId = {id} />
        </Fragment>
    )
}

function CommentList ({article, isOpen, toggleOpen}) {
    const text = isOpen ? 'Hide comments' : 'Show comments';
    return (
        <Fragment>
            <button className="button button--light" onClick={toggleOpen}>{text}</button>
            {getBody({article, isOpen})}
        </Fragment>
    )
}

export default toggleOpen(CommentList);