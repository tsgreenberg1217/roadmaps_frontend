import React, { Component } from 'react';
import Login from './components/Login'
import SignUp from './components/SignUp'
import Profile from './components/Profile'
import AuthAdapter from './services/AuthAdapter'
import { withRouter, Route, browserHistory } from "react-router-dom";
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
            <Route exact path="/login" component = {Login}/>
            <Route exact path="/signup" component = {SignUp}/>
            <Route exact path="/profile" component = {Profile}/>
        </div>


    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user
  }
}

export default connect(mapStateToProps, actions)(App);
