import React, { Component } from 'react';
import Filter from './components/Filter';
import Articles from './components/Routes/Articles';
import NewArticle from './components/Routes/NewArticle';
import CommentsPage from './components/Routes/CommentsPage';
import NotFound from './components/Routes/NotFound';
import {BrowserRouter as Router, Switch, Route, Redirect, NavLink} from 'react-router-dom';
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
                    <Switch>
                        <Route path="/counter" component={Counter} />
                        <Route path="/filter" component={Filter} />
                        <Route path="/articles/new" component={NewArticle} />
                        <Route path="/articles" component={Articles} />
                        <Route path="/comments" component={CommentsPage} />
                        {/*<Redirect from="/comments/" to="/comments/1"></Redirect>*/}
                        <Route path="*" component={NotFound} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
