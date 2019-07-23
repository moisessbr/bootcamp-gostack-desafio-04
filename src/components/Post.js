import React from 'react';
import './style/Post.css';
import Comment from './Comment';

function Post({data}){
  console.log(data);
    return (
    <section className="post">
      <header className="post-author">        
        <img className="post-author-avatar" src={data.author.avatar}/>
        <div className="post-author-data">
          <span className="post-author-name">{data.author.name}</span>
          <span className="post-author-date">{data.date}</span>
        </div>
      </header>
      <main>
        <section className="post-content">{data.content}</section>
        <hr className="hr-division"></hr>
        {data.comments.map(comment => <Comment data={comment} key={comment.id}/>)}
      </main>
    </section> 
  )
}

export default Post;