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
        const filteredTrip = state.user.user_trips.find( trip => trip.id === action.payload)
        // console.log(filteredTrip)
        // console.log('state in reducer is',state.selected_trip)
        return {...state, login: true, user:state.user ,selected_trip: filteredTrip}
    default:
      return state
  }
}

// function tripReducer(state = defaultState, action){
//   switch (action.type) {
//     case "SELECT_TRIP":
//     console.log(state);
//         const filteredTrip = state.user.user_trips.find( trip => trip.id === action.payload)
//         console.log(filteredTrip)
//         console.log(state.selected_trip)
//         return {...state, login: true, user:state.user ,selected_trip: filteredTrip}
//     default:
//       return state
//   }
//
// }


export default combineReducers({
  auth: loginReducer
})
