import {destroyStop,login, confirm, signup, fetchNewTrip, fetchTrip, destroyTrip, createStop, showStops, getAllTrips} from '../services/backendApi'


export function deleteStop(stop_id, trip_id){
  //
  return function(dispatch){

    destroyStop(stop_id, trip_id).then(json => {
      //refactor to just get trip
      const trip_id = json.trip[0].id
      const trip = json.trip.find(trip => trip.id === trip_id)
      trip.stops = json.stops

      dispatch({
        type: "REFRESH_TRIP",
        payload: trip
      })
    })
  }
}

export function allTrips(){
  return function(dispatch){
      getAllTrips().then(json => {
      dispatch({
        type: "ALL_TRIPS",
        payload: json
      })
    })
  }
}

export function submitStop(state, trip_id){
  return function(dispatch){
    const stopParams = {state, trip_id}

    createStop(stopParams).then( json => {
      dispatch({
        type: "CREATE_STOP",
        payload: json.stops
      })
      // refactor to just get trip back
      // is this syncronus?
      const trip = json.trip.find(trip => trip.id === json.stop.trip_id)
      trip.stops = json.stops
      dispatch({
        type: "REFRESH_TRIP",
        payload: trip
      })
    })
  }
}

export function deleteTrip(trip_id){

  return function(dispatch){
    destroyTrip(trip_id).then( user => {
      //
      dispatch({
        type: "DELETE_TRIP",
        payload: user.user_trips
      })
    })
  }
}

export function refreshShowTrip(history){
  const id = parseInt(history.location.pathname.split('/')[2])
  return function(dispatch){
      fetchTrip(id).then(json =>{
        // const obj = {trips: json, id: id}
        json.trip.stops = json.stops
        dispatch({
          type: "REFRESH_TRIP",
          payload: json.trip
        })
        // debugger
        // const stops = obj.trips.find(trip => trip.id === id).stops
        dispatch({
          type: "ALL_STOPS",
          payload: json.stops
        })
      })
    }
  }





export function getTrip(trip_id, history, name){
  //
  return function(dispatch){

      dispatch({
        type: "SELECT_TRIP",
        payload: trip_id
      })
      history.push(`/${name}/${trip_id}`)
    }
  }



export function loginUser(value, history){
  return function(dispatch){
    login(value).then(json => {
      if (!json.error){
        localStorage.setItem("token", json.jwt)
        json.user.user_trips = json.trips
        dispatch({
          type: "FETCH_USER",
          payload: json.user
        })
        history.push(`/${json.user.name}`)

      }
      else{
        console.log('invalid login')
      }
    })
  }
}

export function createTrip(value){
  const token = localStorage.token
  return function(dispatch){
    fetchNewTrip({value, token}).then(json => {
      dispatch({
        type: "NEW_TRIP",
        payload: json
      })
    })

  }
}

export function signupUser(value){
  return function(dispatch){
    signup(value).then(json => {
      localStorage.setItem("token", json.jwt)
      dispatch({
        type: "SIGNUP_USER",
        payload: json.user
      })
    })
  }
}

export function confirmUser(token){
  return function(dispatch){
    confirm(token).then(json =>{
      dispatch({
        type: "CONFIRM_USER",
        payload: json
      })
    })
  }
}

export function logoutUser(){
  return function(dispatch){
    localStorage.removeItem("token")
    dispatch({
      type: "LOGOUT_USER",
      payload: null
    })

  }
}

export function someAction() {
  return {type: 'SOMETHING'}
}
