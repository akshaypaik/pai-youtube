import React from 'react';
import './CommentsContainer.css';
import CommentsCard from './CommentsCard/CommentsCard';

const CommentsContainer = ({ commentsList }) => {
  return (
    <div className='comments-container'>
        {commentsList.map((comment) => <CommentsCard key={comment.id} commentInfo={comment} />)}
    </div>
  )
}

export default CommentsContainer