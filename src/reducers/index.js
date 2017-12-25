


import {combineReducers} from 'redux'

const defaultState = {
  login: false,
  user: {},
  selected_trip: {}
}

const stopDefault = {
  stops: {},
  ordered_stops: {}
}

const tripDefault = {
  trips: {},
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
    case "LOGOUT_USER":

        return {...state, login: false, user: {}}
    default:
      return state
  }
}

function tripReducer(state = tripDefault, action ){
  switch (action.type) {

    case "ALL_TRIPS":
        return {...state, trips: action.payload}

    case 'NEW_TRIP':
        return {...state, login: true, trips: action.payload}

    case "SELECT_TRIP":
        const filteredTrip2 = state.trips.find( trip => trip.id === action.payload)
        return {...state ,selected_trip: filteredTrip2}

    case "DELETE_TRIP":
        return {...state, login: true, trips:action.payload}

    case "REFRESH_TRIPS":
          const filteredTrip = action.payload.trips.find( trip => trip.id === action.payload.id)
          return {...state ,trips: action.payload.trips ,selected_trip: filteredTrip}

     case "REFRESH_TRIP":
          // debugger
          return {...state, selected_trip: action.payload}

    default:
      return state
  }
}

function stopReducer(state = stopDefault, action){

  switch (action.type) {

    case "CREATE_STOP":
      return {...state, stops: action.payload}

    case "ALL_STOPS":
      return {...state, stops: action.payload}

    default:
      return state

  }
}




export default combineReducers({
  auth: loginReducer,
  stops: stopReducer,
  trips: tripReducer
})
