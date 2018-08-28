import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {filtratedArtislesSelector} from '../../selectors';
import {loadAllArticles} from '../../actions';
import Loader from "../Loader";
import {NavLink} from 'react-router-dom';

import './style.css';

class ArticleList extends Component {
    static propTypes = {
        // From connect
        articles: PropTypes.array.isRequired,
        // From accordion decorators
        openItemID: PropTypes.string,
        toggleOpenItem: PropTypes.func
    };

    componentDidMount() {
        const {loading, loaded, loadAllArticles} = this.props;
        if (!loaded && !loading) loadAllArticles();
    }

    render () {
        const {articles, loading} = this.props;
        if (loading) return <Loader />;
        const articleElements = articles.map((article) => <li key={article.id} className="ArticleList__item">
            <NavLink to={`/articles/${article.id}`} activeStyle={{fontWeight: 'bold'}}>
                {article.title}
            </NavLink>
            {/*<Article article={article}
                     isOpen={article.id === openItemID}
                     toggleOpen={toggleOpenItem(article.id)} />*/}
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
        articles: filtratedArtislesSelector(state),
        loading: state.articles.loading,
        loaded: state.articles.loaded
    }
}, {loadAllArticles})(ArticleList);