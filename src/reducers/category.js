import { FETCH_CATEGORY } from '../actions/actionTypes'

function category(state = [], action){

  switch (action.type){
    case FETCH_CATEGORY:
      return action.category.categories
    default:
    return state
  }
}

export default category
