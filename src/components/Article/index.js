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
        id: PropTypes.string.isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func,
        // From connect
        article: PropTypes.shape({
            id: PropTypes.string,
            title: PropTypes.string,
            text: PropTypes.string,
            comments: PropTypes.array
        })
    };

    state = {
        updateIndex: 0,
    };

    componentDidMount() {
        const {loadArticle, article, id} = this.props;
        if (!article || (!article.text && !article.loading)) loadArticle(id)// !this.props.isOpen - дополнительное отслеживание
    };

    getBody() {
        const {article, isOpen} = this.props;
        if(!isOpen) return null;
        if(article.loading) return <Loader />;

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
        if(!article) return null;

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

export default connect((state, ownProps) => ({
    article: state.articles.entities.get(ownProps.id)
}), {deleteArticle, loadArticle})(Article)