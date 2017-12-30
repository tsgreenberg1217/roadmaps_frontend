

const HEADERS = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',

}

const T_HEADER = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': `Token ${localStorage.token}`
}


export function fetchStop(trip_id,stop_id){
  return fetch(`http://localhost:3000/api/v1/trips/${trip_id}/stops/${stop_id}`,{
    headers: T_HEADER
  }).then(res => res.json())
}


export function createActivity(activity,stop_id){
  return fetch('http://localhost:3000/api/v1/trips/:id/stops/:id/activities',{
    headers: T_HEADER,
    method: "POST",
    body: JSON.stringify({activity,stop_id})
  }).then(res => res.json())
}

export function updateStopOrder(trip_id, stop_id, move){
  return fetch('http://localhost:3000/api/v1/update-order',{
    headers: T_HEADER,
    method: "PATCH",
    body: JSON.stringify({trip_id,stop_id, move})
  }).then(res => res.json())
}


export function getAllOnTrips(){
  return fetch('http://localhost:3000/api/v1/ontrips',{
    headers: T_HEADER
  }).then(res => res.json())
}

export function createFriendship(friend, trip_id){
  const friendParams = {friend, trip_id}
  return fetch('http://localhost:3000/api/v1/friendships', {
    headers: T_HEADER,
    method: 'POST',
    body: JSON.stringify(friendParams)
  }).then(res => res.json())
}

export function destroyStop(stop_id,trip_id){
  return fetch(`http://localhost:3000/api/v1/trips/${trip_id}/stops/${stop_id}`,{
    headers: T_HEADER,
    method: "DELETE"
  }).then(res => res.json())
}


export function getAllTrips(){
  return fetch('http://localhost:3000/api/v1/trips',{
    headers: T_HEADER
  }).then(res => res.json())
}

export function createStop(state, trip_id){
  const stopParams = {state, trip_id}
  return fetch(`http://localhost:3000/api/v1/trips/${trip_id}/stops`, {
    headers: T_HEADER,
    method: 'POST',
    body: JSON.stringify(stopParams)
  }).then(res => res.json())
}

export function destroyTrip(trip_id){
  return fetch(`http://localhost:3000/api/v1/trips/${trip_id}`,{
    headers: T_HEADER,
    method: "DELETE"
  }).then(res => res.json())
}


export function fetchTrip(trip_id){
  return fetch(`http://localhost:3000/api/v1/trips/${trip_id}`,{
    headers: T_HEADER,
  }).then(res => res.json())
}

export function fetchNewTrip(trip_params){
  return fetch('http://localhost:3000/api/v1/trips',{
    headers: T_HEADER,
    method: "POST",
    body: JSON.stringify(trip_params)
  }).then(res => res.json())
}

export function login(user_params){
  return fetch('http://localhost:3000/api/v1/auth',{
    headers: HEADERS,
    method: 'POST',
    body: JSON.stringify(user_params)
  }).then(res => res.json())
}



export function confirm(token){
  return fetch('http://localhost:3000/api/v1/current_user',{
    headers: T_HEADER
  }).then(res => res.json())
}

export function signup(user_params){
  return fetch('http://localhost:3000/api/v1/users', {
    headers: HEADERS,
    method: 'POST',
    body: JSON.stringify(user_params)
  }).then(res => res.json())
}
