import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';
import ImageUploader from './ImageUploader'
import {Form, Button} from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'


class CreateTrip extends React.Component{
  constructor(){
    super()
    this.state={
      trip: ''
    }
    this.handleTripChange = this.handleTripChange.bind(this)
  }


  handleTripChange(value){
    this.setState({
      trip: value
    })
  }


  render(){
    return(
      <div>
        <Form onSubmit = {()=>this.props.createTrip(this.state.trip, this.props.history)}>
          <input type = "text"
          onChange={(e)=>this.handleTripChange(e.target.value)}/>
          <Button type="Submit">Submit</Button>
        </Form>
      </div>
    )
  }
}

export default withRouter(connect(null, actions)(CreateTrip));
