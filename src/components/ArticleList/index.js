import React, { Component } from 'react';
import PropTypes from 'prop-types';
import accordion from '../../decorators/accordion';
import Article from '../Article';

import './style.css';

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        // From accordion decorators
        openItemID: PropTypes.string,
        toggleOpenItem: PropTypes.func.isRequired
    };

    render () {
        const {articles, toggleOpenItem} = this.props;
        const articleElements = articles.map((article) => <li key={article.id} className="ArticleList__item">
            <Article article={article}
                     isOpen={article.id === this.props.openItemID}
                     toggleOpen={toggleOpenItem(article.id)} />
        </li>);

        return (
            <ul className="ArticleList">
                {articleElements}
            </ul>
        )
    }
}

export default accordion(ArticleList);