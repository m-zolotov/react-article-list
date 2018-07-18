import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import './style.css';

Comment.propTypes = {
    id: PropTypes.string.isRequired,

    // From connect
    comment: PropTypes.shape({
        user: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired
};

function Comment({comment}) {
    return (
        <Fragment>
            <h5 className="Comment__title">{comment.user}</h5>
            <p className="Comment__section">{comment.text}</p>
        </Fragment>
    )
}

export default connect((state, ownProps) => {
    return {
        comment: state.comments.find(comment => comment.id === ownProps.id)
    }
})(Comment);