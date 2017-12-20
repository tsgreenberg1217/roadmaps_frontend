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
    // debugger
        return {...state,login: true, user: action.payload}
    case "CONFIRM_USER":
    // debugger
        return {...state, login: true, user: action.payload}
    case 'SIGNUP_USER':
    // debugger
        return {...state, login: true, user: action.payload}
    case "LOGOUT_USER":
    // debugger
        return {...state, login: false, user: {}}
    default:
      return state
  }
}

function tripReducer(state = tripDefault, action ){
  switch (action.type) {
    case "ALL_TRIPS":
    // debugger
      return {...state, trips: action.payload}
    case 'NEW_TRIP':
    // debugger
        return {...state, login: true, trips: action.payload}
    case "SELECT_TRIP":
    // debugger
        const filteredTrip2 = state.trips.find( trip => trip.id === action.payload)
        return {...state ,selected_trip: filteredTrip2}
    case "DELETE_TRIP":
    // debugger
        return {...state, login: true, trips:action.payload}
    case "REFRESH_TRIPS":
          const filteredTrip = action.payload.trips.find( trip => trip.id === action.payload.id)
          // debugger
          return {...state ,trips: action.payload.trips ,selected_trip: filteredTrip}
    default:
      return state
  }
}

function stopReducer(state = stopDefault, action){
  switch (action.type) {
    case "CREATE_STOP":

    let id = 0
    const orderList = Object.assign({},action.payload)
      const ordered = [orderList].map(function(stop){
        stop.id = ++id
        return stop
      })

      return {...state, stops: action.payload, ordered_stops: ordered}

    default:
      return state

  }
}




export default combineReducers({
  auth: loginReducer,
  stops: stopReducer,
  trips: tripReducer
})
