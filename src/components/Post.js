import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Comment from './Comment'
import { fetchComments } from '../api/api'
import { loadComment } from '../actions/commentActions'
import * as API from '../api/api'

class Post extends Component{
  componentDidMount() {
    // actions.loadComment(this.props.post.id)
    // console.log("checking",   actions.loadComment(this.props.post.id))
    // API.fetchComments(this.props.post.id)
    this.props.loadComment(this.props.post.id)
    console.log("checking comments", this.props)

  }

  render(){
    const { post, comments } = this.props
    {console.log("post working??",comments)}

    return (
      <div className="post-box">
        <div className="post-likes">
          <h1>vote: { post.voteScore }</h1>
        </div>
        <div className="post-info">
          <p>title: { post.title }</p>
          <p>author: { post.author }</p>
          <p>body: { post.body } </p>

        </div>
        <ul className="comment-list">
          {/* <li><Comment parentId = {post.parentId} /></li> */}
          {/* {console.log("comment working?", comments)} */}
          {/* {console.log("testing comments", comment)} */}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({comments}, {post}) {
  return {
    comments: comments
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({loadComment: loadComment}, dispatch)
}


export default connect(mapStateToProps, matchDispatchToProps)(Post)
