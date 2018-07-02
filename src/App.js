import React, { Component } from 'react';
import Filter from "./components/Filter";
import ArticleList from "./components/ArticleList";
import {articles} from './fixtures/fixtures';

import './style/style.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Filter articles={articles} />
                <ArticleList articles={articles} />
            </div>
        );
    }
}

export default App;
