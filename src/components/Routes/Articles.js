import React, { Component, Fragment } from 'react';
import ArticleList from '../ArticleList';
import Article from '../Article';
import {Route} from 'react-router-dom';

class Articles extends Component {
    render(){
        return (
            <Fragment>
                <ArticleList />
                <Route path="/articles" children={this.getIndex} exact />
                <Route path="/articles/:id" render={this.getArticle} />
            </Fragment>
        )
    }

    getArticle = ({match}) => {
        const {id} = match.params;
        return <Article id={id} isOpen key={id}/>
    };

    getIndex = ({match}) => {
        if(!match) return <h2>Article Page</h2>;
        return <h2>Please select article</h2>
    }
}

export default Articles;