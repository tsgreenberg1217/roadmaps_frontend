import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';
import { withRouter } from 'react-router-dom'
import CreateStop from './CreateStop'
import StopContainer from './StopContainer'
import MyFancyComponent from './MyMapComponent'



class TripShow extends React.Component{
  constructor(){
    super()
    this.state = {
    }
  }


  componentDidMount(){
    this.props.refreshShowTrip(this.props.history)
  }



  render(){
    // debugger
    const location = {
      lat: 40.75,
      lng: -73.98
    }
    return(
      <div>
        <h3>this is the trip show page!</h3>
        <h3>{this.props.trips.selected_trip.title}</h3>

        <CreateStop
        trip_id = {this.props.trips.selected_trip.id}/>

        {(this.props.trips.selected_trip.id !== undefined)
        ? <StopContainer
        stops = {this.props.trips.selected_trip.stops}/>
        : <div>nothing</div>}

        <MyFancyComponent center = {location}/>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    trips: state.trips,
    stops: state.stops
  }
}
// <CreateStop trip_id = {this.props.trip.selected_trip.id}/>
// <h3>{this.props.trip.selected_trip.title}</h3>
// <StopContainer
// stops = {this.props.stops} />
export default withRouter(connect(mapStateToProps, actions)(TripShow));
