import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import posts from './posts'
import comment from './comment'

const rootReducer = combineReducers({
  posts,
  comment,
  routing: routerReducer
})

export default rootReducer
