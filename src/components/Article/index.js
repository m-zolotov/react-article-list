import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import CommentList from '../CommentList/index';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {deleteArticle, loadArticle} from '../../actions';
import Loader from "../Loader";

import './style.css';

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string,
            comments: PropTypes.array
        }).isRequired
    };

    state = {
        updateIndex: 0,
    };

    componentWillReceiveProps({isOpen, loadArticle, article}) {
        if (isOpen && !article.text && !article.loading) loadArticle(article.id)// !this.props.isOpen - дополнительное отслеживание
    };

    getBody() {
        const {article, isOpen} = this.props;
        if(!isOpen) return null;
        if(article.loading) return <Loader />
        return (
            <section className="Article__section">
                <p>{article.text}</p>
                <CommentList article = {article} ref = {this.setCommentsRef} key={this.state.updateIndex} />
            </section>
        )
    };

    handleDelete = () => {
        const {deleteArticle, article} = this.props;
        deleteArticle(article.id);
    };

    setCommentsRef = ref => {
        this.comments = ref
    };

    render() {
        const {article, isOpen, toggleOpen} = this.props;

        return (
            <Fragment>
                <h3 className="Article__title">{article.title}</h3>
                <button className="button button--primary" onClick = {toggleOpen}>
                    {isOpen ? 'Close' : 'Open'}
                </button>
                <button className="button button--primary" onClick={this.handleDelete}>Delete me</button>
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

export default connect(null, {deleteArticle, loadArticle})(Article)