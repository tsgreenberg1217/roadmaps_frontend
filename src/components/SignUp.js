import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';
import { withRouter} from "react-router-dom";
import { Segment, Form, Button } from 'semantic-ui-react'



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
    this.props.signupUser(this.state, this.props.history)
  }

  render(){
    const inputStyle = { color: `white`,
                        background: `none`,
                        border: `none`,
                        fontSize:`“50px`,
                        width: `350px`,
                        height: `95px`,
                        borderBottom: `1px solid white`,
                        margin: '2%'}

    return(

      <Form inverted onSubmit = {(e) => this.handleSubmit(e)}>
      <input
      style = {inputStyle}
      type="text"
       placeholder='Username'
      onChange = {(e) => this.handleNameChange(e.target.value)}
      />

      <input
      style = {inputStyle}
       placeholder='Password'
      type="password"
      onChange = {(e) => this.handlePasswordChange(e.target.value)}
      />
      <div>
      <Button type="Submit">Sign Up</Button>
      </div>
      </Form>

    )
  }
}



export default withRouter(connect(null, actions)(SignUp))
