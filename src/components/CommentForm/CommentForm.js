import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import validForm from "../../decorators/validForm";

CommentList.propTypes = {
    comments: PropTypes.array.isRequired
};

CommentList.defaultProps = {
    comments: []
};

function CommentForm ({validInput}) {
    return (
        <form action="" className="CommentForm">
            <p className="CommentForm__title">Написать свой комментарий</p>
            <label htmlFor="">
                <input type="text"/>
            </label>
            <label htmlFor="">
                <input type="text"/>
            </label>
            <button className="button button--light" onChange={validInput}>Отправить</button>
        </form>
    )
}

export default validForm(CommentForm);