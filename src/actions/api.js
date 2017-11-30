import * as types from './actionTypes'

export function fetchPostSuccess(posts) {
  return {type: types.LOAD_POST, posts}
}

export function fetchPosts() {
  return function(dispatch) {
    // setTimeout(()=> {
      const url = `${process.env.REACT_APP_BACKEND}posts`
      console.log('fetching from url', url);

      return fetch(url, { headers: { 'Authorization': 'bambambam' }})
      .then(posts => {
        posts = posts.json()

        posts.then((data)=>{
          console.log("data", data);
          dispatch(fetchPostSuccess(data))
        })
      }).catch(error => {
        throw(error)
      })

    // }, 1)

  }
}
