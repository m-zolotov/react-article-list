import React, { Component } from 'react';
import moment from 'moment';
import Select from 'react-select';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { formatDate, parseDate } from 'react-day-picker/moment';
import ArticleList from "./components/ArticleList";

import {articles} from './fixtures/fixtures';

import 'react-select/dist/react-select.css';
import 'react-day-picker/lib/style.css';
import './style/style.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.handleFromChange = this.handleFromChange.bind(this);
        this.handleToChange = this.handleToChange.bind(this);
        this.state = {
            from: undefined,
            to: undefined,
            selection: null
        };
    }

    changeSelection = selection => this.setState({selection});

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }
    focusTo() {
        // Focus to `to` field. A timeout is required here because the overlays
        // already set timeouts to work well with input fields
        this.timeout = setTimeout(() => this.to.getInput().focus(), 0);
    }
    showFromMonth() {
        const { from, to } = this.state;
        if (!from) {
            return;
        }
        if (moment(to).diff(moment(from), 'months') < 2) {
            this.to.getDayPicker().showMonth(from);
        }
    }
    handleFromChange(from) {
        // Change the from date and focus the "to" input field
        this.setState({ from });
    }
    handleToChange(to) {
        this.setState({ to }, this.showFromMonth);
    }

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
                    <Select options={options} value={this.state.selection} onChange={this.changeSelection} />
                    <div className="filter-form-day-picker">
                        <DayPickerInput
                            value={from}
                            placeholder="From"
                            format="LL"
                            formatDate={formatDate}
                            parseDate={parseDate}
                            dayPickerProps={{
                                selectedDays: [from, { from, to }],
                                disabledDays: { after: to },
                                toMonth: to,
                                modifiers,
                                numberOfMonths: 1,
                                onDayClick: () => this.to.getInput().focus(),
                            }}
                            onDayChange={this.handleFromChange}
                        />
                        {' '}-{' '}
                        <span className="InputFromTo-to">
                            <DayPickerInput
                                ref={el => (this.to = el)}
                                value={to}
                                placeholder="To"
                                format="LL"
                                formatDate={formatDate}
                                parseDate={parseDate}
                                dayPickerProps={{
                                    selectedDays: [from, { from, to }],
                                    disabledDays: { before: from },
                                    modifiers,
                                    month: from,
                                    fromMonth: from,
                                    numberOfMonths: 1,
                                }}
                                onDayChange={this.handleToChange}
                            />
                        </span>
                    </div>
                </form>
                <ArticleList articles={articles} />
            </div>
        );
    }
}

export default App;
