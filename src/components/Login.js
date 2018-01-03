import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import * as actions from '../actions';
import { Segment, Form, Button } from 'semantic-ui-react'



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
    const titlePhoto  = 'https://c1.staticflickr.com/3/2357/2516643521_2c33144d43_b.jpg'
    return(
      <Segment style = {
        {
          backgroundImage: `url(${titlePhoto})`,
          minHeight: "900px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "0% 70%"

        }}   >
          <Form inverted onSubmit = {(e) => this.handleSubmit(e)}>
            <Form.Group widths='equal'>
              <Form.Input label='Username' placeholder='Username' onChange = {(e) => this.handleNameChange(e.target.value)}/>
              <Form.Input type = "password" label='Password' placeholder='Password' onChange = {(e) => this.handlePasswordChange(e.target.value)}/>
            </Form.Group>
            <Button type='submit'>Submit</Button>
          </Form>
      </Segment>

    )
  }
}



export default withRouter(connect(null, actions)(Login));
