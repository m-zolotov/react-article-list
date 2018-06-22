import React, { Fragment } from 'react';
import './style.css';

export default function Comment({comment}) {
    //const comment = props;
    return (
        <Fragment>
            <h5 className="Comment__title">{comment.user}</h5>
            <p className="Comment__section">{comment.text}</p>
        </Fragment>
    )
}