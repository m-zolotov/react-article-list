import React from 'react';
import Article from '../Article';

import './style.css';

ArticleList.defaultProps = {
    articles: []
};

export default function ArticleList({articles}) {
    const ArticleElements = articles.map((article) => <li key={article.id} className="ArticleList__item"><Article article = {article} /></li>);
    return (
        <ul className="ArticleList">
            {ArticleElements}
        </ul>
    )
}