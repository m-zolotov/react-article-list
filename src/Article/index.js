import React, { Component, Fragment } from 'react';
import CommentList from '../CommentList';

import './style.css';

export default class Article extends Component {
    constructor(props){
        super(props);
        this.state = {
            isOpenBody: false,
            isOpenComment: false
        }
    };
    toggleOpenBody = () => {
        this.setState({
            isOpenBody: !this.state.isOpenBody
        })
    };
    toggleOpenComment = () => {
        this.setState({
            isOpenComment: !this.state.isOpenComment
        })
    };
    getBody() {
        if(!this.state.isOpenBody) return null;
        const {article} = this.props;
        const {isOpenComment} = this.state;
        return (
            <section className="Article__section">
                <p>{article.text}</p>
                <button className="button button--light" onClick = {this.toggleOpenComment}>{isOpenComment ? 'Close comments' : 'Open comments'}</button>
                {this.getComment()}
            </section>
        )
    };
    getComment() {
        if(!this.state.isOpenComment) return null;
        const {article} = this.props;
        return (
            <CommentList comments={article.comments} />
        )
    }

    render() {
        const {article} = this.props;
        const {isOpenBody} = this.state;

        return (
            <Fragment>
                <h3 className="Article__title">{article.title}</h3>
                <button className="button button--primary" onClick = {this.toggleOpenBody}>{isOpenBody ? 'Close' : 'Open'}</button>
                {this.getBody()}
            </Fragment>
        )
    }
}