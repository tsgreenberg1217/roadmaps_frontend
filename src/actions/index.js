import {destroyActivity, fetchEveryTrip, createPicture ,fetchStop,createActivity,updateStopOrder, destroyStop,login, confirm, signup, fetchNewTrip, fetchTrip, destroyTrip, createStop, showStops, getAllTrips, createFriendship, getAllOnTrips} from '../services/backendApi'



export function deleteActivity(activity_id){
  return function(dispatch){
    destroyActivity(activity_id).then(json =>{
      json.stop.activities = json.activities
      dispatch({
        type: "SELECT_STOP",
        payload: json.stop
      })
    })
  }
}

export function getEveryTrip(){
  return function(dispatch){
    fetchEveryTrip().then(json => {
      dispatch({
        type: "EVERY_TRIP",
        payload: json
      })
    })
  }
}

export function submitPicture(activity_id, url){
  return function(dispatch){
    createPicture(activity_id, url).then( json =>{
      console.log('this picture json is this: ', json)
      debugger
      dispatch({
        type: "SELECT_STOP",
        payload: json
      })
    })
  }

}
export function refreshStop(trip_id, stop_id){
  return function(dispatch){
    fetchStop(trip_id, stop_id).then(json => {
      json.stop.activities = json.activities
      dispatch({
        type: "SELECT_STOP",
        payload: json.stop
      })
    })
  }
}

export function getStop(trip_id,stop_id, history){
  return function(dispatch){
    fetchStop(trip_id,stop_id).then(json => {
      json.stop.activities = json.activities
      dispatch({
        type: "SELECT_STOP",
        payload: json.stop
      })
      history.push(`${trip_id}/${stop_id}`)

    })
  }
}



export function submitActivity(trip_id,stop_id,activity){
  return function(dispatch){
    createActivity(trip_id,stop_id,activity).then(json => {
      json.stop.activities = json.activities
      dispatch({
        type: "SELECT_STOP",
        payload: json.stop
      })
    })

  }
}

export function changeOrder(trip_id, stop_id, move){
  return function(dispatch){
    updateStopOrder(trip_id, stop_id, move).then(json => {
      json.trip.stops = json.stops
      dispatch({
        type: "REFRESH_TRIP",
        payload: json.trip
      })
      dispatch({
        type: "ALL_STOPS",
        payload: json.stops
      })
    })
  }
}

export function toggleTrips(){
  return function(dispatch){
    dispatch({
      type: "TOGGLE_TRIP"
    })
  }
}

export function submitFriendship(friend, history){
  const trip_id = parseInt(history.location.pathname.split('/')[2])
  return function(dispatch){
    createFriendship(friend, trip_id).then(json => {
      json.trip.friends = json.friends
      json.trip.stops = json.stops
      dispatch({
        type: "REFRESH_TRIP",
        payload: json.trip
      })
      dispatch({
        type: "ALL_STOPS",
        payload: json.stops
      })
    })
  }
}

export function deleteStop(stop_id, trip_id){
  return function(dispatch){
    destroyStop(stop_id, trip_id).then(json => {
      json.trip.stops = json.stops
      json.trip.friends = json.friends
      dispatch({
        type: "REFRESH_TRIP",
        payload: json.trip
      })
      dispatch({
        type: "ALL_STOPS",
        payload: json.stops
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

export function getOnTrips(){
  return function(dispatch){
    getAllOnTrips().then(json => {
      dispatch({
        type: "ALL_ONTRIPS",
        payload: json
      })
    })
  }

}


export function submitStop(state, trip_id){
  return function(dispatch){
    createStop(state, trip_id).then( json => {
      dispatch({
        type: "CREATE_STOP",
        payload: json.stops
      })

      const trip = json.trip.find(trip => trip.id === json.stop.trip_id)
      trip.stops = json.stops
      trip.friends = json.friends
      dispatch({
        type: "SELECT_TRIP",
        payload: trip
      })
    })
  }
}

export function deleteTrip(trip_id){
  return function(dispatch){
    destroyTrip(trip_id).then( user => {
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
        json.trip.friends = json.friends
        json.trip.stops = json.stops
          dispatch({
          type: "SELECT_TRIP",
          payload: json.trip
        })
        dispatch({
          type: "ALL_STOPS",
          payload: json.stops
        })
      })
    }
  }



export function getTrip(trip_id, history, name){
  return function(dispatch){
    fetchTrip(trip_id).then(json =>{
      json.trip.friends = json.friends
      json.trip.stops = json.stops
      dispatch({
        type: "SELECT_TRIP",
        payload: json.trip
      })
      history.push(`/${name}/${trip_id}`)
    })
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
        dispatch({
          type: "ALL_TRIPS",
          payload: json.trips
        })
        history.push(`/${json.user.name}`)

      }
      else{
        console.log('invalid login')
      }
    })
  }
}

export function createTrip(value, history){
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

export function logoutUser(history){
  return function(dispatch){
    localStorage.removeItem("token")
    dispatch({
      type: "LOGOUT_USER",
      payload: null
    })
    history.push(`/`)

  }
}
