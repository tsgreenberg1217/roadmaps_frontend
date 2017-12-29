

const HEADERS = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',

}

export function updateStopOrder(trip_id, stop_id, move){
  return fetch('http://localhost:3000/api/v1/update-order',{
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
  return fetch('http://localhost:3000/api/v1/ontrips',{
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Token ${localStorage.token}`
    }
  }).then(res => res.json())
}

export function createFriendship(friend, trip_id){
  const friendParams = {friend, trip_id}
  return fetch('http://localhost:3000/api/v1/friendships', {
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
  return fetch(`http://localhost:3000/api/v1/stops/${stop_id}`,{
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Token ${localStorage.token}`
    },
    method: "DELETE"
  }).then(res => res.json())
}


export function getAllTrips(){
  return fetch('http://localhost:3000/api/v1/trips',{
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Token ${localStorage.token}`
    }
  }).then(res => res.json())
}

export function createStop(stopParams){
  return fetch('http://localhost:3000/api/v1/stops', {
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
  return fetch(`http://localhost:3000/api/v1/trips/${trip_id}`,{
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Token ${localStorage.token}`
    },
    method: "DELETE"
  }).then(res => res.json())
}


export function fetchTrip(trip_id){
  return fetch(`http://localhost:3000/api/v1/trips/${trip_id}`,{
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Token ${localStorage.token}`
    },
  }).then(res => res.json())
}

export function fetchNewTrip(trip_params){
  return fetch('http://localhost:3000/api/v1/trips',{
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Token ${trip_params.token}`
    },
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
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Token ${token}`
    }
  }).then(res => res.json())
}

export function signup(user_params){
  return fetch('http://localhost:3000/api/v1/users', {
    headers: HEADERS,
    method: 'POST',
    body: JSON.stringify(user_params)
  }).then(res => res.json())
}
