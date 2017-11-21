import { ADD_POST, EDIT_POST, LOAD_POST } from '../actions'

function posts(state, action){
  const { title, body, author, category, posts } = action

  switch (action.type){
    case LOAD_POST:
      // for (let num in action.posts){
      //   posts[ action.posts[num].id ] = action.posts[num]
      // }
      // return posts
      return action.posts
      console.log("action posts", action.posts)

    case ADD_POST:
      return {}
    case EDIT_POST:
      return {}
    default:
      return {}
  }
}

export default posts
