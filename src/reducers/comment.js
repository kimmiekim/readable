import { ADD_COMMENT, EDIT_COMMENT, REMOVE_COMMENT } from '../actions/actionTypes'

function comment(state, action){
  const { comment, parentId } = action

  switch (action.type){
    case ADD_COMMENT:
    console.log(state)
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
