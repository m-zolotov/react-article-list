import React, { Component } from 'react';
import Select from 'react-select';
import DayPicker, { DateUtils } from 'react-day-picker';
import ArticleList from "./components/ArticleList";

import {articles} from './fixtures/fixtures';

import 'react-select/dist/react-select.css';
import 'react-day-picker/lib/style.css';
import './style/style.css';

class App extends Component {
    static defaultProps = {
        numberOfMonths: 2,
    };

    state = {
        selection: null
    };

    getInitialState() {
        return {
            from: undefined,
            to: undefined,
        };
    }

    handleDayClick = (day) => {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
    };

    handleResetClick() {
        this.setState(this.getInitialState());
    }

    changeSelection = selection => this.setState({selection});

    render() {
        const { from, to } = this.state;
        const modifiers = { start: from, end: to };
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }));

        return (
            <div className="App">
                <form action="" className="filter-form">
                    <div className="filter-form-select">
                        <Select options={options} value={this.state.selection} onChange={this.changeSelection} />
                    </div>
                    <div className="filter-form-day-picker">
                        <p className="filter-form-day-picker__title">
                            {!from && !to && 'Please select the first day.'}
                            {from && !to && 'Please select the last day.'}
                            {from &&
                            to &&
                            `Selected from ${from.toLocaleDateString()} to
                            ${to.toLocaleDateString()}`}{' '}
                            {from &&
                            to && (
                                <button className="link" onClick={this.handleResetClick}>
                                    Reset
                                </button>
                            )}
                        </p>
                        <DayPicker
                            className="Selectable"
                            numberOfMonths={this.props.numberOfMonths}
                            selectedDays={[from, { from, to }]}
                            modifiers={modifiers}
                            onDayClick={this.handleDayClick}
                        />
                    </div>
                </form>
                <ArticleList articles={articles} />
            </div>
        );
    }
}

export default App;
