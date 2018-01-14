import { LOAD_COMMENT, ADD_COMMENT, EDIT_COMMENT, REMOVE_COMMENT } from '../actions/actionTypes'

function comments(state ={}, action){
  const { comments, parentId, commentId } = action

  switch (action.type){
    case LOAD_COMMENT:
      return [...state, ...comments]
    case ADD_COMMENT:
      return {...state}
    case EDIT_COMMENT:
      return {...state}
    case REMOVE_COMMENT:
      return {...state}
    default:
      return state
  }
}

export default comments
