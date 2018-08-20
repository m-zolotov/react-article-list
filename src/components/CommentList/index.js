import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader';
import toggleOpen from '../../decorators/toggleOpen';
import Comment from '../Comment';
import CommentForm from '../CommentForm';
import {loadArticleComments} from "../../actions";
import {connect} from 'react-redux';

import './style.css';

function getBody({article: {comments = [], id, commentsLoaded, commentsLoading}, isOpen}) {
    if (!isOpen) return null;
    if (commentsLoading) return <Loader />;
    if (!commentsLoaded) return null;

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

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array.isRequired,
        // From toggleOpen decorator
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    };

    static defaultProps = {
        comments: []
    };

    componentWillReceiveProps ({isOpen, article, loadArticleComments}) {
        if (!this.props.isOpen && isOpen && !article.commentsLoading && !article.commentsLoaded) {
            loadArticleComments(article.id)
        }
    }

    render() {
        const {article, isOpen, toggleOpen} = this.props;
        const text = isOpen ? 'Hide comments' : 'Show comments';
        return (
            <Fragment>
                <button className="button button--light" onClick={toggleOpen}>{text}</button>
                {getBody({article, isOpen})}
            </Fragment>
        )
    }
}

export default connect(null, {loadArticleComments})(toggleOpen(CommentList));