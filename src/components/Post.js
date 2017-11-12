import React from 'react'

const Post = (props) => {
  return (
    <div className = "posting">
      <div className= "image">
        <img src="http://placekitten.com/500/300" />
      </div>
      <div className="comment-box">
        <div className="post-likes">
          <h1>&hearts;</h1>
        </div>
        <ul className="comment-list">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </div>
    </div>
    )
}


export default Post
