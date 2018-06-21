import React from 'react';
import Article from '../Article';

import './style.css';

export default function ArticleList({articles}) {
    const ArticleElements = articles.map((article) => <li key={article.id}><Article article = {article} /></li>);
    return (
        <ul className="ArticleList">
            {ArticleElements}
        </ul>
    )
}