import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';
import { withRouter } from 'react-router-dom'



class TripShow extends React.Component{
  constructor(){
    super()
    this.state = {}
  }


  render(){
    return(
      <div>
      <h3>this is the trip show page!</h3>
      <h3>{this.props.trip.title}</h3>
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return{
    trip: state.auth.selected_trip
  }
}

export default withRouter(connect(mapStateToProps, actions)(TripShow));
