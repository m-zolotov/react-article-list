import React, { Component } from 'react';
import PropTypes from 'prop-types';
import accordion from '../../decorators/accordion';
import Article from '../Article';
import {connect} from 'react-redux';
import {filtratedArtislesSelector} from '../../selectors';

import './style.css';

class ArticleList extends Component {
    static propTypes = {
        // From connect
        articles: PropTypes.array.isRequired,
        // From accordion decorators
        openItemID: PropTypes.string,
        toggleOpenItem: PropTypes.func.isRequired
    };

    render () {
        const {articles, openItemID, toggleOpenItem} = this.props;
        const articleElements = articles.map((article) => <li key={article.id} className="ArticleList__item">
            <Article article={article}
                     isOpen={article.id === openItemID}
                     toggleOpen={toggleOpenItem(article.id)} />
        </li>);

        return (
            <ul className="ArticleList">
                {articleElements}
            </ul>
        )
    }
}

export default connect((state) => {
    return {
        articles: filtratedArtislesSelector(state)
    }
})(accordion(ArticleList));