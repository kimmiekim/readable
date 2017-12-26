import { LOAD_COMMENT, ADD_COMMENT, EDIT_COMMENT, REMOVE_COMMENT } from '../actions/actionTypes'

function comment(state, action){
  const { comments, parentId, commentId } = action

  switch (action.type){
    case LOAD_COMMENT:
      return {...state, [parentId]: action.comments}
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
