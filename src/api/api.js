import * as types from '../actions/actionTypes'

export const url = `${process.env.REACT_APP_BACKEND}`
export const headers = {
  'Accept': 'application/json',
  'Authorization': 'bambambam',
  'Content-Type': 'application/json'
}

export function fetchPostSuccess(posts) {
  return {type: types.LOAD_POST, posts}
}

export function fetchPosts() {
  return function(dispatch) {
      console.log('fetching from url', url);
      return fetch(`${url}posts`, { headers })
      .then(posts => {
        posts = posts.json()
        console.log("posts", posts)
        posts.then((data)=>{
          console.log("data", data);
          dispatch(fetchPostSuccess(data))
        })
      }).catch(error => {
        throw(error)
      })
  }
}

export function fetchCommentsSuccess(parentId, comments){
  return {type: types.LOAD_COMMENT, parentId, comments}
}

export function fetchComments(parentId) {
  // console.log("success")
  return function(dispatch){
    return fetch(`${url}posts/${parentId}/comments`, {headers})
    .then(comments => {

        // dispatch(fetchCommentsSuccess(parentId, comments))

      comments = comments.json()
      console.log("comments hello?", comments)
      comments.then(data => {
        dispatch(fetchCommentsSuccess(parentId, data))
      })
    })
  }
}
