import { LOAD_COMMENT, ADD_COMMENT, EDIT_COMMENT, REMOVE_COMMENT } from '../actions/actionTypes'

function comment(state={}, action){
  const { comments, parentId, commentId } = action

  switch (action.type){
    case LOAD_COMMENT:
      // return Object.assign({}, state, {[parentId]: comments})
      return {...state, comments: comments}
      // return Object.assign({}, state, {comments: comments})
    case ADD_COMMENT:
      return {}

    case EDIT_COMMENT:
      return {}
    case REMOVE_COMMENT:
      return {}
    default:
      return {}
  }
}

export default comment
