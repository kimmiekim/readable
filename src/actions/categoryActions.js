import * as types from './actionTypes'
import * as API from '../api/api'

export const fetchCategories = () => {
  return (dispatch) => {
    API.fetchCategories().then(category => {
      dispatch({ type: types.FETCH_CATEGORY, category})
    })
  }
}
