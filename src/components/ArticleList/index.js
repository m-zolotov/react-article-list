import React, { Component } from 'react';
import PropTypes from 'prop-types';
import accordion from '../../decorators/accordion';
import Article from '../Article';
import {connect} from 'react-redux';

import './style.css';
import filters from "../../reducer/filters";

class ArticleList extends Component {
    static propTypes = {
        // From connect
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

export default connect(({filters, articles}) => {
    const {selected, dateRange: {from, to}} = filters;

    const filteredArticles = articles.filter(
        article => {
            const published = Date.parse(article.date);
            return(!selected.length || selected.includes(article.id)) &&
                (!from || !to || (published > from && published < to))
        }
    );

    return {
        articles: filteredArticles
    }
})(accordion(ArticleList));