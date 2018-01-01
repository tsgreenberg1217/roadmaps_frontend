


import {combineReducers} from 'redux'

const defaultState = {
  login: false,
  user: {},
  selected_trip: {}
}

const defaultUi = {
  user_trips: true
}

const stopDefault = {
  stops: {},
  selected_stop: {},

}

const tripDefault = {
  trips: {},
  on_trips: {},
  selected_trip: {},
  every_trip: {}
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

    case "EVERY_TRIP":
        return {...state, every_trip: action.payload}

    case "ALL_TRIPS":
        return {...state, trips: action.payload}

    case "ALL_ONTRIPS":
        return {...state, on_trips: action.payload}

    case 'NEW_TRIP':
        return {...state, login: true, trips: action.payload}

    case "SELECT_TRIP":
    debugger
        return {...state ,selected_trip: action.payload}

    case "DELETE_TRIP":
        return {...state, login: true, trips:action.payload}

    case "REFRESH_TRIPS":
        const filteredTrip = action.payload.trips.find( trip => trip.id === action.payload.id)
        return {...state ,trips: action.payload.trips ,selected_trip: filteredTrip}

     case "REFRESH_TRIP":
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

    case "SELECT_STOP":
      return {...state, selected_stop: action.payload}

    default:
      return state

  }
}

function uiReducer(state = defaultUi, action){
  switch (action.type) {

    case "TOGGLE_TRIP":
      return {...state, user_trips: !state.user_trips}

    default:
      return state

  }
}




export default combineReducers({
  auth: loginReducer,
  stops: stopReducer,
  ui: uiReducer,
  trips: tripReducer
})
