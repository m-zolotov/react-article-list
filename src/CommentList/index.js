import React, { Component, Fragment } from 'react';
import Comment from '../Comment';

import './style.css';

export default class CommentList extends Component {
    static defaultProps = {
        comments: []
    };

    state = {
        isOpen: false
    };

    getBody() {
        if (!this.state.isOpen) return null;

        const {comments} = this.props;
        if (!comments.length) return <p>No comments yet</p>;

        return (
            <ul className="CommentList">
                {comments.map(comment => <li key={comment.id} className="CommentList__item"><Comment comment={comment} /></li>)}
            </ul>
        )
    };

    toggleOpen = ev => this.setState({
        isOpen: !this.state.isOpen
    });

    render() {
        const text = this.state.isOpen ? 'Close comments' : 'Open comments';
        return (
            <Fragment>
                <button className="button button--light" onClick = {this.toggleOpen}>{text}</button>
                {this.getBody()}
            </Fragment>
        )
    }
}