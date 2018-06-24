import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import Select from 'react-select';
import ArticleList from "./components/ArticleList";

import {articles} from './fixtures/fixtures';

import 'react-select/dist/react-select.css';
import './style/style.css';

class App extends Component {
    state = {
        selection: null
    };

    changeSelection = selection => this.setState({selection});

    render() {
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }));

        return (
            <div className="App">
                <Select options={options} value={this.state.selection} onChange={this.changeSelection} />
                <ArticleList articles={articles} />
            </div>
        );
    }
}

export default App;
