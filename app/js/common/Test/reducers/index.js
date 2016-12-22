import { UPDATE_TEXT } from '../actions'

const SimpleFormReducer = (state = '', action) => {
  switch (action.type) {
    case UPDATE_TEXT:
      return action.text
    default: 
      return state
  }
}

export default SimpleFormReducer
