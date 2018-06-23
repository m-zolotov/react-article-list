import React, { Component } from 'react';
import Accordion from '../../decorators/accordion';
import Article from '../Article';

import './style.css';

class ArticleList extends Component {
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

export default Accordion(ArticleList);