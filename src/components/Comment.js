import React from 'react'

const Comment = ({comment}) => {
  return (
    <div>
      <div className="comment-box">
        <p>{comment.body}</p>
        <p>by: {comment.author}</p>
      </div>
    </div>
  )
}
export default Comment
