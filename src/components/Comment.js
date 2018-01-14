import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { loadComment } from '../actions/commentActions'
import { fetchComments } from '../api/api'

class Comment extends Component{
  componentWillMount() {
    this.props.fetchComments(this.props.parentId)
  }

  render(){
    const { parentId, comments } = this.props

    return (
      <div>
        {/* <p>{this.props.comment.body}</p> */}
        {/* {comments.map(c => <li key={c.id}>{c.body}</li>)} */}
        {console.log("comments returned are: ", typeof comments)}
        {}
      </div>
    )
  }
}

function mapStateToProps({comments, posts}) {
  console.log("comments are :",comments)
  return {
    comments
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchComments: fetchComments}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Comment)
