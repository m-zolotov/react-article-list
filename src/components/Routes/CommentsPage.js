import React from 'react';
import CommentsPagination from '../CommentsPagination';

export default function CommentsPage({match}) {
    return <CommentsPagination page={match.params.page} />
}