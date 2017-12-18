import React, { Component } from 'react';
import Login from './components/Login'
import SignUp from './components/SignUp'
import Profile from './components/Profile'
import TripShow from './components/TripShow'
import AuthAdapter from './services/AuthAdapter'
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
    // console.log('APP is rendering', this.props);
    return (
        <div>
          <Switch>
            <Route exact path="/" component = {Login}/>
            <Route path="/signup" component = {SignUp}/>
            <Route path="/profile/trip" component = {TripShow}/>
            <Route path="/profile" component = {Profile}/>
          </Switch>
        </div>


    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user
  }
}

export default withRouter(connect(mapStateToProps, actions)(App));
