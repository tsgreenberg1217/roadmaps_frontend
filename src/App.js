import React, { Component } from 'react';
import Login from './components/Login'
import AuthAdapter from './services/AuthAdapter'
import './App.css';


class App extends Component {
logIn(loginParams){
    AuthAdapter.login(loginParams)
      .then( user => {
        if (!user.error) {
          this.setState({
            auth: { isLoggedIn: true, user: user}
          })
          localStorage.setItem('jwt', user.jwt )
        }
      })
  }

logout(){
  localStorage.removeItem('jwt')
  this.setState({ auth: { isLoggedIn: false, user:{}}})
}

componentWillMount(){
      if (localStorage.getItem('jwt')) {
       AuthAdapter.currentUser()
         .then(user => {
           if (!user.error) {
             console.log("fetch user");
             this.setState({
               auth: {
                 isLoggedIn: true,
                 user: user
               }
             })
           }
         })
     }
   }


  render() {
    return (
      <div>
      This is the login page
      <Login />
      </div>
    );
  }
}

export default App;
