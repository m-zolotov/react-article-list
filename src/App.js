import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import Select from 'react-select';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import ArticleList from "./components/ArticleList";

import {articles} from './fixtures/fixtures';

import 'react-select/dist/react-select.css';
import 'react-day-picker/lib/style.css';
import './style/style.css';

class App extends Component {
    state = {
        selection: null,
        from: undefined,
        to: undefined
    };

    changeSelection = selection => this.setState({selection});

    render() {
        const { from, to } = this.state;
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }));

        return (
            <div className="App">
                <Select options={options} value={this.state.selection} onChange={this.changeSelection} />
                <DayPickerInput format="LL" value={from} />

                <DayPickerInput format="LL" />
                <ArticleList articles={articles} value={to} />
            </div>
        );
    }
}

export default App;
