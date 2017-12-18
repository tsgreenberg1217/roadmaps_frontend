import {login, confirm, signup, fetchNewTrip, fetchTrip} from '../services/backendApi'
// import {browserHistory } from "react-router-dom";


export function getTrip(trip_id){
  return function(dispatch){
    fetchTrip(trip_id).then(json => {
      dispatch({
        type: "SELECT_TRIP",
        payload: json
      })
    })

  }
}


export function loginUser(value){
  return function(dispatch){
    login(value).then(json => {
      if (!json.error){
        // debugger
        localStorage.setItem("token", json.jwt)
        dispatch({
          type: "FETCH_USER",
          payload: json.user
        })
        history.push("/profile")

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
      localStorage.setItem("token", json["token"])
      dispatch({
        type: "SIGNUP_USER",
        payload: json.user
      })
    }).then( () => {debugger} )
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
