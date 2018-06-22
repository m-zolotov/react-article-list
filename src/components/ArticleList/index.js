import React, { Component } from 'react';
import Article from '../Article';

import './style.css';

export default class ArticleList extends Component {
    state = {
        openArticleID: null
    };

    toggleOpenArticle = openArticleID => ev => {
        this.setState({ openArticleID });
    };

    render () {
        const articleElements = this.props.articles.map((article) => <li key={article.id} className="ArticleList__item">
            <Article article={article}
                     isOpen={article.id === this.state.openArticleID}
                     toggleOpen={this.toggleOpenArticle(article.id)} />
        </li>);

        return (
            <ul className="ArticleList">
                {articleElements}
            </ul>
        )
    }
}