
// const URL_START = 'https://safe-caverns-60257.herokuapp.com/api/v1'
const URL_START = 'http://localhost:3000/api/v1'

const HEADERS = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',

}

const T_HEADER = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': `Token ${localStorage.token}`
}


export function destroyPicture(picture_id){
  return fetch(`${URL_START}/trips/id/stops/id/activities/:id/pictures/${picture_id}`,{
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Token ${localStorage.token}`
    },
    method: "DELETE",
    body: JSON.stringify({picture_id})
  }).then(res => res.json())
}

export function destroyActivity(activity_id){
  return fetch(`${URL_START}/trips/:id/stops/:id/activities/${activity_id}`,{
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Token ${localStorage.token}`
    },
    method: "DELETE",
    body: JSON.stringify({activity_id})
  }).then(res => res.json())
}


export function fetchEveryTrip(){
  return fetch(`${URL_START}/everytrip`,{
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Token ${localStorage.token}`
    }
  }).then(res => res.json())
}


export function createPicture(activity_id, url){
  return fetch(`${URL_START}/trips/id/stops/id/activities/${activity_id}/pictures`,{
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Token ${localStorage.token}`
    },
    method: "POST",
    body: JSON.stringify({activity_id,url})
  }).then(res => res.json())
}

export function fetchStop(trip_id,stop_id){
  return fetch(`${URL_START}/trips/${trip_id}/stops/${stop_id}`,{
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Token ${localStorage.token}`
    }
  }).then(res => res.json())
}


export function createActivity(trip_id,stop_id,activity){
  return fetch(`${URL_START}/trips/:id/stops/${stop_id}/activities`,{
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Token ${localStorage.token}`
    },
    method: "POST",
    body: JSON.stringify({trip_id,stop_id,activity})
  }).then(res => res.json())
}

export function updateStopOrder(trip_id, stop_id, move){
  return fetch(`${URL_START}/update-order`,{
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Token ${localStorage.token}`
    },
    method: "PATCH",
    body: JSON.stringify({trip_id,stop_id, move})
  }).then(res => res.json())
}


export function getAllOnTrips(){
  return fetch(`${URL_START}/ontrips`,{
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Token ${localStorage.token}`
    }
  }).then(res => res.json())
}

export function createFriendship(friend, trip_id){
  const friendParams = {friend, trip_id}
  return fetch(`${URL_START}/friendships`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Token ${localStorage.token}`
    },
    method: 'POST',
    body: JSON.stringify(friendParams)
  }).then(res => res.json())
}

export function destroyStop(stop_id,trip_id){
  return fetch(`${URL_START}/trips/${trip_id}/stops/${stop_id}`,{
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Token ${localStorage.token}`
    },
    method: "DELETE"
  }).then(res => res.json())
}


export function getAllTrips(){
  return fetch(`${URL_START}/trips`,{
    headers:{
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Token ${localStorage.token}`
    }
  }).then(res => res.json())
}

export function createStop(state, trip_id){
  const stop = `${state.city}, ${state.state.toUpperCase()}`
  const stopParams = {stop, trip_id}
  return fetch(`${URL_START}/trips/${trip_id}/stops`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Token ${localStorage.token}`
    },
    method: 'POST',
    body: JSON.stringify(stopParams)
  }).then(res => res.json())
}

export function destroyTrip(trip_id){
  return fetch(`${URL_START}/trips/${trip_id}`,{
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Token ${localStorage.token}`
    },
    method: "DELETE"
  }).then(res => res.json())
}


export function fetchTrip(trip_id){
  return fetch(`${URL_START}/trips/${trip_id}`,{
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Token ${localStorage.token}`
    },
  }).then(res => res.json())
}

export function fetchNewTrip(trip_params){
  return fetch(`${URL_START}/trips`,{
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Token ${localStorage.token}`
    },
    method: "POST",
    body: JSON.stringify(trip_params)
  }).then(res => res.json())
}

export function login(user_params){
  debugger
  return fetch(`${URL_START}/auth`,{
    headers: HEADERS,
    method: 'POST',
    body: JSON.stringify(user_params)
  }).then(res => res.json())
}



export function confirm(token){
  return fetch(`${URL_START}/current_user`,{
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Token ${localStorage.token}`
    }
  }).then(res => res.json())
}

export function signup(user_params){
  debugger
  return fetch(`${URL_START}/users`, {
    headers: HEADERS,
    method: 'POST',
    body: JSON.stringify(user_params)
  }).then(res => res.json())
}
