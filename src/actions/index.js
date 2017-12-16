import {login, confirm} from '../services/backendApi'

export function loginUser(value){
  return function(dispatch){
    login(value).then(json => {
      if (!json.error){
        localStorage.setItem("token", json["token"])
        console.log('json', json);
        dispatch({
          type: "FETCH_USER",
          payload: json.user
        })
      }
      else{
        console.log('invalid login')
      }
    })
  }
}

export function signupUser(value){
  return function(dispatch){

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

export function someAction() {
  return {type: 'SOMETHING'}
}
