import React, { Component } from 'react';
import AccordionComponent from '../../decorators/accordion';
import Article from '../Article';

import './style.css';

class ArticleList extends Component {
    render () {
        const {articles, accordionToggleOpen} = this.props;
        const articleElements = articles.map((article) => <li key={article.id} className="ArticleList__item">
            <Article article={article}
                     isOpen={article.id === this.props.openArticleID}
                     toggleOpen={accordionToggleOpen(article.id)} />
        </li>);

        return (
            <ul className="ArticleList">
                {articleElements}
            </ul>
        )
    }
}

export default AccordionComponent(ArticleList);