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
    const stopDivs = this.props.stops.map(stop =>{
      return (<Stop
            duration = {stop.duration}
            order = {stop.order}
            trip_id = {stop.trip_id}
            name = {stop.name}
            id = {stop.id}
            length = {this.props.length}/>)}
    )
    return(
      <div>{stopDivs}</div>
    )
  }


}



export default withRouter(connect(null, actions)(StopContainer))
