import { combineReducers } from 'redux'
import SimpleFormReducer from './common/Test/reducers'

const reducer = combineReducers({
  text: SimpleFormReducer
})

export default reducer
