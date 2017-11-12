export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const LOAD_POST = 'LOAD_POST'

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
