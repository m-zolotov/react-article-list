import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import DayPicker, { DateUtils } from 'react-day-picker';
import {connect} from 'react-redux';
import {changeDateRange, changeSelection} from '../../actions';
import {mapToArr} from "../../helpers";

import 'react-select/dist/react-select.css';
import 'react-day-picker/lib/style.css';
import './style.css';


class Filter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    static defaultProps = {
        numberOfMonths: 2,
    };

    handleDayClick = (day) => {
        const {changeDateRange, range} = this.props;
        changeDateRange(DateUtils.addDayToRange(day, range));
    };

    handleChangeSelect = selected => this.props.changeSelection(selected.map(option => option.value));

    render() {
        const { articles, selected } = this.props;
        const { from, to } = this.props.range;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`;


        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }));

        return (
            <form action="" className="filter-form">
                <div className="filter-form-select">
                    <Select
                        options={options}
                        value={selected}
                        onChange={this.handleChangeSelect}
                        multi
                    />
                </div>
                <div className="filter-form-day-picker">
                    <DayPicker
                        className="Selectable"
                        numberOfMonths={this.props.numberOfMonths}
                        selectedDays={day => DateUtils.isDayInRange(day, { from, to })}
                        onDayClick={this.handleDayClick}
                    />
                    {selectedRange}
                </div>
            </form>
        )
    }
}

export default connect(state => ({
    articles: mapToArr(state.articles.entities),
    range: state.filters.dateRange,
    selected: state.filters.selected
}), {changeDateRange, changeSelection})(Filter);
