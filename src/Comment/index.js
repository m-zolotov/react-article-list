import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './style.css';

Comment.propTypes = {
    comment: PropTypes.shape({
        user: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        date: PropTypes.string
    }).isRequired
};

export default function Comment({comment}) {
    return (
        <Fragment>
            <h5 className="Comment__title">{comment.user + ', ' + comment.date}</h5>
            <p className="Comment__section">{comment.text}</p>
        </Fragment>
    )
}