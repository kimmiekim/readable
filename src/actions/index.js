export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const LOAD_POST = 'LOAD_POST'
export const ADD_COMMENT = 'ADD_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const REMOVE_COMMENT = 'REMOVE_COMMENT'
export const INCREMENT_VOTE_SCORE = 'INCREMENT_VOTE_SCORE'

export function loadPost({ posts }){
  return {
    type: LOAD_POST,
    posts
  }
}

export function addPost({title, body, author, category}) {
  return {
    type: ADD_POST,
    title,
    body,
    author,
    category
  }
}

export function editPost({title, body, author, category}) {
  return {
    type: EDIT_POST,
    title,
    body,
    author,
    category
  }
}

export function addComment({comment, parentId}) {
  return {
    type: ADD_COMMENT,
    comment,
    parentId
  }
}

export function editComment({comment, commentId}) {
  return {
    type: EDIT_COMMENT,
    comment,
    commentId
  }
}

export function removeComment({commentId}) {
  return {
    type: REMOVE_COMMENT,
    commentId
  }
}
