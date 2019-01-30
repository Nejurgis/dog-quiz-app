import { combineReducers } from 'redux'
import breeds from './reducer'
import answerReducer from './answerReducer'

export default combineReducers({
  breeds,
  answerReducer
})