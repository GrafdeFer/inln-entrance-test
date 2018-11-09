import { combineReducers } from 'redux'
import messages from './messages'
import user from './user'
import settings from './settings'

export default combineReducers({
  messages: messages,
  user: user,
  settings: settings,
})
