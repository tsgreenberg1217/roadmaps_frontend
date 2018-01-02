import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';
import { withRouter} from "react-router-dom";


class SignUp extends React.Component{
  constructor(){
    super()
    this.state = {
      name: '',
      password: ''
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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

  handleSubmit(e){
    e.preventDefault()
    this.props.signupUser(this.state)
  }

  render(){
    debugger
    return(
      <div>
      <h3>this is the signup page</h3>
      <form onSubmit = {(e) => this.handleSubmit(e)}>
      <input
      type="text"
      onChange = {(e) => this.handleNameChange(e.target.value)}
      />

      <input
      type="password"
      onChange = {(e) => this.handlePasswordChange(e.target.value)}
      />

      <button type="Submit">Sign Up</button>
      </form>

      </div>
    )
  }
}



export default connect(null, actions)(SignUp)
