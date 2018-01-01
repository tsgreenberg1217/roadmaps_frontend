import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';
import { withRouter } from 'react-router-dom'

import {Button, Form} from 'semantic-ui-react'


class CreateStop extends React.Component{
  constructor(){
    super()
    this.state={
      order: 1,
      city: '',
      state: ''
    }
    this.handleCityChange = this.handleCityChange.bind(this)
    this.handleStateChange = this.handleStateChange.bind(this)
    this.handleStopDispatch = this.handleStopDispatch.bind(this)
  }

  componentDidMount(){
    console.log(this.props)
  }


  handleCityChange(value){
    this.setState({
      city: value
    }, () => console.log(this.state))
  }
  handleStateChange(value){
    this.setState({
      state: value
    }, () => console.log(this.state))
  }

  handleStopDispatch(e,state,trip_id){
    e.preventDefault()
    this.props.submitStop(this.state,trip_id)

    //is this syncronus?
    // this.props.refreshShowTrip(history)
  }



  render(){
    return(

      <Form onSubmit = {(e)=>this.handleStopDispatch(e,this.state, this.props.trip_id)}>
        <Form.Field>
          <label>City</label>
          <input placeholder='Miami'
          value = {this.state.city}
          onChange={(e)=>this.handleCityChange(e.target.value)}/>
          <label>State</label>
          <input placeholder='FL'
          value = {this.state.state}
          onChange={(e)=>this.handleStateChange(e.target.value)}/>
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>

    )
  }
}

const mapStateToProps = (state) =>{
  return{
    stops: state.stops,
    trip: state.trips
  }
}

export default withRouter(connect(mapStateToProps, actions)(CreateStop));
