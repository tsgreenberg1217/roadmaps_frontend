import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';


class Login extends React.Component{
  constructor(){
    super()
    this.state = {
      name: '',
      password: ''
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
  }

  handleNameChange(name){
    this.setState({
      name: name
    })
  }

  handlePasswordChange(password){
    this.setState({
      password: password
    })
  }

  render(){
    return(
      <form>
      <input
      type="text"
      onChange = {(e) => this.handleNameChange(e.target.value)}
      />

      <input
      type="password"
      onChange = {(e) => this.handlePasswordChange(e.target.value)}
      />

      <button type="Submit"/>
      </form>
    )
  }
}

export default Login
