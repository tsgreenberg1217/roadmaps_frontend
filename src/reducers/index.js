import {combineReducers} from 'redux'

const defaultState = {
  login: false,
  user: {},
  selected_trip: {}
}

function loginReducer(state = defaultState, action) {
  // console.log('action sent to reducer', action)
  switch (action.type) {
    case "FETCH_USER":
        return {...state,login: true, user: action.payload}
    case "CONFIRM_USER":
        return {...state, login: true, user: action.payload}
    case 'SIGNUP_USER':
        return {...state, login: true, user: action.payload}
    case 'NEW_TRIP':
        return {...state, login: true, user: action.payload}
    case "LOGOUT_USER":
        return {...state, login: false, user: {}}
    case "SELECT_TRIP":
        return {...state, selected_trip: action.payload}
    default:
      return state
  }
}

function tripReducer(state = defaultState, action){
  switch (action.type) {
    case "SELECT_TRIP":
      console.log(state)
      return {...state, selected_trip: action.payload}
    default:
    return state

  }
}


export default combineReducers({
  auth: loginReducer,
  trip: tripReducer
})
