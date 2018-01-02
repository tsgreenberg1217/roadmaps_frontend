import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import * as actions from '../actions';
import { Segment, Form } from 'semantic-ui-react'



class Login extends React.Component{
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
    this.props.loginUser(this.state, this.props.history)
  }

  render(){

    return(
      <div>
      <Segment inverted>
        <Form inverted onSubmit = {(e) => this.handleSubmit(e)}>
          <Form.Group widths='equal'>
            <Form.Input label='First name' placeholder='First name' onChange = {(e) => this.handleNameChange(e.target.value)}/>
            <Form.Input label='Last name' placeholder='Last name' onChange = {(e) => this.handlePasswordChange(e.target.value)}/>
          </Form.Group>
          <Form.Checkbox label='I agree to the Terms and Conditions' />
          <Button type='submit'>Submit</Button>
        </Form>
      </Segment>
        <h3>this is the login page</h3>
          <form onSubmit = {(e) => this.handleSubmit(e)}>

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

      </div>
    )
  }
}



export default withRouter(connect(null, actions)(Login));
