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


  componentDidMount(){
    //right now this goes first then the user is confirmed second
    this.props.refreshShowTrip(this.props.history)
  }

  // componentWillReceiveProps(){
  //   debugger
  //   if(this.props.trips.selected_trip.id === undefined){
  //     this.props.refreshShowTrip(this.props.history)
  //   }
  //
  // }


  render(){
    return(
      <div>
        <h3>this is the trip show page!</h3>
        <h3>{this.props.trips.selected_trip.title}</h3>

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
