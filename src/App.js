import React, { Component } from 'react';
import Filter from './components/Filter';
import ArticleList from './components/ArticleList';
import Counter from './components/Counter';

import './style/style.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Counter />
                <Filter />
                <ArticleList />
            </div>
        );
    }
}

export default App;
