import React, { Component } from 'react';
import Select from 'react-select';
import DayPicker, { DateUtils } from 'react-day-picker';
import {connect} from 'react-redux';

import 'react-select/dist/react-select.css';
import 'react-day-picker/lib/style.css';
import './style.css';
import accordion from "../../decorators/accordion";


class Filter extends Component {
    static defaultProps = {
        numberOfMonths: 2,
    };

    state = {
        selection: null
    };

    static getInitialState() {
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
        this.setState(Filter.getInitialState());
    }

    changeSelection = selection => this.setState({selection});

    render() {
        const { from, to } = this.state;
        const { articles } = this.props;
        const modifiers = { start: from, end: to };
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }));

        return (
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
                            <button className="link button button--primary filter-form-day-picker__btn" onClick={this.handleResetClick}>
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
        )
    }
}

export default connect(state => ({
    articles: state.articles
}))(Filter);
