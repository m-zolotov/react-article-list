import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {commentSelectorFactory} from '../../selectors';

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

const mapStateToProps = () => {
    const commentSelector = commentSelectorFactory();

    return (state, ownProps) => {
        return {
            comment: commentSelector(state, ownProps)
        }
    }
};

export default connect(mapStateToProps)(Comment);