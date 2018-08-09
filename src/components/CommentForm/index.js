import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addComment} from '../../actions';

import './style.css';

const limits = {
    user: {
        min: 5,
        max: 10
    },
    text: {
        min: 20,
        max: 50
    }
};

class CommentForm extends Component {
    static propTypes = {
        articleId: PropTypes.string.isRequired,
        addComment: PropTypes.func.isRequired
    };

    state = {
        user: '',
        text: ''
    };

    handleSubmit = ev => {
        ev.preventDefault();
        this.props.addComment(this.state);
        this.setState({
            user: '',
            text: ''
        })
    };

    getClassName = type => this.state[type].length && this.state[type].length < limits[type].min
        ? ' CommentForm__input--error' : '';

    handleChange = type => ev => {
        const {value} = ev.target;
        if(value.length > limits[type].max) return;
        this.setState({
            [type]: value
        })
    };

    render() {
        return (
            <form className="CommentForm" onSubmit={this.handleSubmit}>
                <p className="CommentForm__title heading--line">Написать свой комментарий</p>
                <label htmlFor="" className="CommentForm__label">
                    <input type="text" value={this.state.user}
                           placeholder="Введите свое имя"
                           className={"CommentForm__input CommentForm__input--user" + this.getClassName('user')}
                           onChange={this.handleChange('user')} />
                </label>
                <label htmlFor="" className="CommentForm__label">
                    <input type="text" value={this.state.text}
                           placeholder="Напишите комментарий"
                           className={"CommentForm__input CommentForm__input--text" + this.getClassName('text')}
                           onChange={this.handleChange('text')} />
                </label>
                <button className="button button--primary CommentForm__button">Отправить</button>
            </form>
        )
    }
}

export default connect(null, (dispatch, ownProps) => ({
    addComment: (comment) => dispatch(addComment(comment, ownProps.articleId))
}))(CommentForm)