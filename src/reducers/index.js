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

function tripReducer(state = )

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
  stops: stopReducer
})
