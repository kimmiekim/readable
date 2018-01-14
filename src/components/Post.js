import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Comment from './Comment'

import { loadComment } from '../actions/commentActions'
import { fetchComments } from '../api/api'

class Post extends Component{
  // componentWillMount() {
  //   this.props.fetchComments(this.props.post.id)
  //   console.log("testing props form post component: ", this.props)
  //
  // }

  render(){
    const { post } = this.props

    return (
      <div className="post-box">
        <div className="post-likes">
          <h1>vote: { post.voteScore }</h1>
        </div>
        <div className="post-info">
          <p>title: { post.title }</p>
          <p>author: { post.author }</p>
          <p>body: { post.body } </p>

        <ul className="comment-list">
          {/* {comments.comments? comments.comments.map(c => console.log(c)): null}

          {comments.comments? comments.comments.map(c => {
              c.filter(c.Parentid === post.is)

          }): null} */}
          <Comment parentId = {post.id} />
        </ul>
      </div>
      </div>
    )
  }
}

{/* function mapStateToProps({comments, post}) {
  console.log("comments are :",comments)
  return {
    comments
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchComments: fetchComments}, dispatch)
} */}


export default connect()(Post)
