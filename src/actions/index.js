import {login, confirm, signup, fetchNewTrip, fetchTrip} from '../services/backendApi'


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
        // debugger
        localStorage.setItem("token", json.jwt)
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
