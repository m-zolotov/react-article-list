import React from 'react';
import Comment from '../Comment';

import './style.css';

export default function CommentList({comments}) {
    const CommentElements = comments.map((comment) => <li key={comment.id} className="CommentList__item"><Comment comment = {comment} /></li>);
    return (
        <ul className="CommentList">
            {CommentElements}
        </ul>
    )
}