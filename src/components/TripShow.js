import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';
import { withRouter } from 'react-router-dom'
import CreateStop from './CreateStop'
import StopContainer from './StopContainer'



class TripShow extends React.Component{
  constructor(){
    super()
    this.state = {
      spot: ''
    }
  }

  componentWillReceiveProps(){
    (this.props.trip.selected_trip.id !== undefined)
    ? console.log('location recieved')
    : this.props.refreshShowTrip(this.props.history)
  }


  render(){
    return(
      <div>
        <h3>this is the trip show page!</h3>
        <CreateStop trip_id = {this.props.trip.selected_trip.id}/>
        <h3>{this.props.trip.selected_trip.title}</h3>
        <StopContainer
        stops = {this.props.stops} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    trip: state.auth,
    stops: state.stops
  }
}

export default withRouter(connect(mapStateToProps, actions)(TripShow));
