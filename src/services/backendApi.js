

const HEADERS = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',

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
