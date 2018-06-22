import React, { Fragment } from 'react';
import './style.css';

export default function Comment({comment}) {
    return (
        <Fragment>
            <h5 className="Comment__title">{comment.user + ', ' + comment.date}</h5>
            <p className="Comment__section">{comment.text}</p>
        </Fragment>
    )
}