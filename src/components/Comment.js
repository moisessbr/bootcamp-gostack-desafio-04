import React from 'react';
import './style/Comment.css';

function Comment({data}){
  return (
    <div className="comment">
      <div className="comment-avatar">
        <img src={data.author.avatar}/>       
      </div>
      <div className="comment-content">
      <p><span className="comment-author">{data.author.name}</span>{data.content}</p>
      </div>
    </div>
    )
}

export default Comment;