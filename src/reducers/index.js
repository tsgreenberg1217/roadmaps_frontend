import {combineReducers} from 'redux'

const defaultState = {
  login: false,
  user: {},
  selected_trip: {}
}

const stopDefault = {
  stops: {}
}

function loginReducer(state = defaultState, action) {
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
        const filteredTrip = state.user.user_trips.find( trip => trip.id === action.payload)
        return {...state ,selected_trip: filteredTrip}
    case "DELETE_TRIP":
        return {...state, login: true, user:action.payload}


    default:
      return state
  }
}

function stopReducer(state = stopDefault, action){
  switch (action.type) {
    case "CREATE_STOP":
    debugger
      return {...state, stops: action.payload}
    default:
      return state

  }
}




export default combineReducers({
  auth: loginReducer
})
