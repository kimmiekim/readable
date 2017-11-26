import * as types from './index'

export function fetchPostSuccess(posts) {
  return {type: types.LOAD_POST, posts}
}

export function fetchPosts() {
  return function(dispatch) {
    const url = `${process.env.REACT_APP_BACKEND}posts`
    console.log('fetching from url', url);

     return fetch(url, { headers: { 'Authorization': 'bambambam' }})
      .then(posts => {
        posts = posts.json()
        dispatch(fetchPostSuccess(posts))
        console.log("api posts", posts)
      }).catch(error => {
        throw(error)
      })
  }
}
