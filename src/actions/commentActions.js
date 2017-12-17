import * as types from './actionTypes'
import * as API from '../api/api'

export function loadComment({parentId, comments}){
  // return (dispatch) => {
  //   API.fetchComments(parentId).then(comments => {
  //     console.log("hello?", comments)
  //     dispatch({ type: types.LOAD_COMMENT, parentId, comments })
  //   })
  // }
  return {
    type: types.LOAD_COMMENT,
    parentId,
    comments
  }
  // return {
  //   type: API.fetchComments(parentId),
  //   parentId,
  //   comments
  // }
}

export function editPost({title, body, author, category}) {
  return {
    type: types.EDIT_POST,
    title,
    body,
    author,
    category
  }
}

export function addComment({comment, parentId}) {
  return {
    type: types.ADD_COMMENT,
    comment,
    parentId
  }
}

export function editComment({comment, commentId}) {
  return {
    type: types.EDIT_COMMENT,
    comment,
    commentId
  }
}

export function removeComment({commentId}) {
  return {
    type: types.REMOVE_COMMENT,
    commentId
  }
}
