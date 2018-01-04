import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Form, Button } from 'semantic-ui-react'


class CreateActivity extends React.Component{

  constructor(){
    super()
    this.state = {
      activity: ''
    }
  }



  handleChange(value){
    this.setState({
      activity: value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.submitActivity(this.props.stop.trip_id, this.props.stop.id, this.state.activity)
  }


  render(){
    return(
      <div>
      <Form onSubmit = {(e) => this.handleSubmit(e)}>
      <input
        type = "text"
        placeholder = "what did you do?"
        onChange = {(e)=>this.handleChange(e.target.value)}
        value = {this.state.activity}/>
      <Button type= "Submit">submit</Button>
      </Form>
      </div>
    )
  }
}

export default connect(null, actions)(CreateActivity)
