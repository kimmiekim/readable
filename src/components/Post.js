import React from 'react'

const Post = ({post}) => {
  return (
    <div className="post-box">
      <div className="post-likes">
        <h1>{ post.voteScore }</h1>
      </div>
      <div className="post-info">
        <h1>{ post.title }</h1>
        <h3>{ post.author }</h3>
      </div>
      <ul className="comment-list">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
    </div>
  )
}




export default Post
