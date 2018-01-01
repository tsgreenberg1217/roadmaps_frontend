import React, { Component } from 'react';
import Login from './components/Login'
import SignUp from './components/SignUp'
import OnTrips from './components/OnTrips'
import Profile from './components/Profile'
import TripShow from './components/TripShow'
import AuthAdapter from './services/AuthAdapter'
import AllTrips from './components/AllTrips'
import StopShow from './components/StopShow'
import NavBar from './components/NavBar'
import { withRouter, Route, browserHistory, Switch } from "react-router-dom";
import './App.css'
import {connect} from 'react-redux'
import * as actions from './actions'


class App extends Component {

  componentDidMount(){
    const token = localStorage.getItem("token")
    if(token){
      this.props.confirmUser(token)
    }
    else{
      console.log('token not found')
    }
  }

  render() {
    return (
        <div>
        { (this.props.login) ? <NavBar/> : null}
          <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/home" component={AllTrips}/>
            <Route path="/:user/invited" component={OnTrips}/>
            <Route path="/:user/:trip/:stop" component={StopShow}/>
            <Route path="/:user/:trip" component={TripShow}/>
            <Route path="/:user" component={Profile}/>
          </Switch>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    login: state.auth.login
  }
}

export default withRouter(connect(mapStateToProps, actions)(App));
