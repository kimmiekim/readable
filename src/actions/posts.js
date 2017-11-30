import * as types from './actionTypes'

export function loadPost({ posts }){
  return {
    type: types.LOAD_POST,
    posts
  }
}

export function addPost({title, body, author, category}) {
  return {
    type: types.ADD_POST,
    title,
    body,
    author,
    category
  }
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
