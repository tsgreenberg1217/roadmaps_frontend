import React, { Component } from 'react';
import Login from './components/Login'
import SignUp from './components/SignUp'
import SignUp_new from './components/SignUp_new'

import OnTrips from './components/OnTrips'
import Profile from './components/Profile'
import TripShow from './components/TripShow'
import AuthAdapter from './services/AuthAdapter'
import AllTrips from './components/AllTrips'
import StopShow from './components/StopShow'
import NavBar from './components/NavBar'
import Login_new from './components/Login_new'

import { withRouter, Route, browserHistory, Switch } from "react-router-dom";
import {connect} from 'react-redux'
import * as actions from './actions'


class App extends Component {

  componentDidMount(){
    const token = localStorage.getItem("token")
    if(token){
      this.props.confirmUser(token)
    }
    else if (this.props.history.location.pathname === '/signup'){
      this.props.history.push('/signup')
    }
    else{
      this.props.history.push(`/login`)
    }
  }

  render() {
    return (
        <div>
        { (this.props.login && this.props.history.location.pathname !== '/login' && this.props.history.location.pathname !== '/signup')
        ? <NavBar/> : null}
          <Switch>
            <Route exact path="/login" component={Login_new}/>
            <Route path="/signup" component={SignUp_new}/>
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
