import React from 'react'
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom'
import * as actions from '../actions';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import SignUp from './SignUp'



class Login_new extends React.Component{
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
    const titlePhoto  = 'https://travisallendotcom.files.wordpress.com/2012/04/070.jpg'
    const inputStyle = { color: `white`,
                        background: `none`,
                        border: `none`,
                        fontSize:`“50px`,
                        width: `350px`,
                        height: `95px`,
                        borderBottom: `1px solid white`,
                        margin: '2%'}

    const font  ={   fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
                      fontSize: '48px',
                      fontStyle: 'normal',
                      fontVariant: 'normal',
                      fontWeight: '500',
                      lineHeight: '26.4px',
                      color: 'white',
                      margin: '2%'}
    return(
      <div className='login-form'
      style = {{
          backgroundImage: `url(${titlePhoto})`,
          minHeight: "900px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "0% 70%",
          margin: '0',
          textAlign: 'center',
          display: 'block',
        }}>
  {/*
    Heads up! The styles below are necessary for the correct render of this example.
    You can do same with CSS, the main idea is that all the elements up to the `Grid`
    below must have a height of 100%.
  */}
  <style>{`
    body > div,
    body > div > div,
    body > div > div > div.login-form {
      height: 100%;
    }
  `}</style>
  <Grid
    textAlign='center'
    style={{ height: '100%' }}
    verticalAlign='middle'
  >
    <Grid.Column style={{ maxWidth: 450 }}>
      <Form
      size='large'
      onSubmit = {(e) => this.handleSubmit(e)}
      >
        <Segment stacked>
        <Header as='h2' color='teal' textAlign='center' >
        Log-in to your account
        </Header>
          <Form.Input
            fluid
            icon='user'
            iconPosition='left'
            placeholder='username'
            onChange = {(e) => this.handleNameChange(e.target.value)}
          />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='password'
            type='password'
            onChange = {(e) => this.handlePasswordChange(e.target.value)}
          />

          <Button color='teal' fluid size='large'>Login</Button>
        </Segment>
      </Form>
      <Message>
      Not part of Roadmaps? <Link to = '/signup'>Sign up</Link>
      </Message>
    </Grid.Column>
  </Grid>
</div>
    )
  }
}



export default withRouter(connect(null, actions)(Login_new));
