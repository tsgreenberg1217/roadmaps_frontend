import React, { Component } from 'react';
import Login from './components/Login'
import AuthAdapter from './services/AuthAdapter'
import './App.css'
import {connect} from 'react-redux'
import * as actions from './actions'


class App extends Component {

  componentDidMount(){
    const token = localStorage.getItem("Token")
    if(token){
      this.props.confirmUser(token)
    }
    else{
      console.log('token not found')
    }
  }

  render() {
    console.log('APP is rendering', this.props);
    return (
      <div onClick={this.props.someAction}>
        <Login />
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
