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

export function removePost({ postId, post }) {
  return {
    type: types.REMOVE_POST,
    postId,
    post
  }
}
