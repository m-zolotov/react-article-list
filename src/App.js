import React, { Component } from 'react';
import Filter from './components/Filter';
import ArticleList from './components/ArticleList';
import {HashRouter as Router, Route, NavLink} from 'react-router-dom';
import Counter from './components/Counter';

import './style/style.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <nav className="App__nav">
                        <NavLink to="/counter" className="App__nav-link" activeClassName="App__nav-link--active">Counter</NavLink>
                        <NavLink to="/filter" className="App__nav-link" activeClassName="App__nav-link--active">Filter</NavLink>
                        <NavLink to="/articles" className="App__nav-link" activeClassName="App__nav-link--active">ArticleList</NavLink>
                    </nav>
                    <Route path="/counter" component={Counter} />
                    <Route path="/filter" component={Filter} />
                    <Route path="/articles" component={ArticleList} />
                </div>
            </Router>
        );
    }
}

export default App;
