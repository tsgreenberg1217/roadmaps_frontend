import React from 'react'
import * as actions from '../actions';
import { connect } from 'react-redux';
import Stop from './Stop'
import { withRouter } from 'react-router-dom'



class StopContainer extends React.Component{
  constructor(){
    super()
    this.state = {

    }
  }


  render(){
    console.log(this.props.stops) // this is undefined after you delete a trip, lets figure out why
    const stopDivs = this.props.stops.map(stop =>{
      return (<Stop
            order = {stop.order}
            trip_id = {stop.trip_id}
            name = {stop.name}
            id = {stop.id}/>)}
    )
    console.log('sc props are', this.props.stops)
    return(
      <div>{stopDivs}</div>
    )
  }


}



export default withRouter(connect(null, actions)(StopContainer))
