import {combineReducers} from 'redux'

const defaultState = {
  login: false,
  user: {},
  selected_trip: {}
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
        const filteredTrips = state.user.user_trips.filter( trip => trip.id === action.payload)
        console.log(filteredTrips)
        console.log(state.selected_trip)
        return {...state, selected_trip: filteredTrips}
    default:
      return state
  }
}


export default combineReducers({
  auth: loginReducer,
})
