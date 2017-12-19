import {login, confirm, signup, fetchNewTrip, fetchTrip, destroyTrip, createStop, showStops} from '../services/backendApi'




export function fetchStops(){
  const id = history.location.pathname.split('/')[2]
  showStops(id)

}


export function submitStop(stop, trip_id){
  return function(dispatch){
    const stopParams = {stop, trip_id}
    createStop(stopParams).then( json => {
      debugger
      dispatch({
        type: "CREATE_STOP",
        payload: json
      })
    })
  }
}

export function deleteTrip(trip_id){
  return function(dispatch){
    destroyTrip(trip_id).then( user => {
      dispatch({
        type: "DELETE_TRIP",
        payload: user
      })
    })
  }
}

export function refreshShowTrip(history){
  const id = history.location.pathname.split('/')[2]
  return function(dispatch){

    fetchTrip(id).then( json =>{
      dispatch({
        type: "SELECT_TRIP",
        payload: json.id
      })
      history.push(`/${name}/${id}`)
    })
  }


}


export function getTrip(trip_id, history, name){
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
