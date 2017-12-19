import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';
import { withRouter } from 'react-router-dom'



class TripShow extends React.Component{
  constructor(){
    super()
    this.state = {}
  }

  componentWillReceiveProps(){
    (this.props.trip.selected_trip.id !== undefined)
    ? console.log('location shown')
    : this.props.refreshShowTrip(this.props.history)
  }

  render(){
    // console.log('state in render is',this.props.trip)
    return(
      <div>
        <h3>this is the trip show page!</h3>
        <h3>{this.props.trip.selected_trip.title}</h3>
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return{
    trip: state.auth
  }
}

export default withRouter(connect(mapStateToProps, actions)(TripShow));
