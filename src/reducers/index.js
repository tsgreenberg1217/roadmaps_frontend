import {combineReducers} from 'redux'

const defaultState = {
  login: false,
  user: {}
}

function loginReducer(state = defaultState, action) {
  console.log('action sent to reducer', action)
  switch (action.type) {
    case "FETCH_USER":
        return {login: true, user: action.payload}
    case "CONFIRM_USER":
        return {login: true, user: action.payload}
    case 'SIGNUP_USER':
        return {login: true, user: action.payload}
    default:
      return state
  }
}


export default combineReducers({
  auth: loginReducer
})
