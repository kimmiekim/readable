import { ADD_POST, EDIT_POST, LOAD_POST, REMOVE_POST } from '../actions/actionTypes'

function posts(state = {}, action){
  const { title, body, author, category, posts } = action

  switch (action.type){
    case LOAD_POST:
      // for (let num in action.posts){
      //   posts[ action.posts[num].id ] = action.posts[num]
      // }
      // return posts
      console.log("checking state", state)
      return action.posts

    case ADD_POST:
      return [
        ...state,
        {
          title: action.title,
          body: action.body,
          author: action.author,
          category: action.category
        }
      ]
    case EDIT_POST:
      return []
    case REMOVE_POST:
      return []
    default:
      return state
  }
}

export default posts
