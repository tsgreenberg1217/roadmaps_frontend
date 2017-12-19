import React from 'react'
import Trip from './Trip'
import { connect } from 'react-redux';
import * as actions from '../actions';
import { withRouter } from 'react-router-dom'


const TripsContainer = (props) =>{
  // const tripDivs = props.trips.map(trip =>
  //   <Trip
  //   key = {trip.id}
  //   id = {trip.id}
  //   title = {trip.title}
  //   name = {props.name}/>
  // )
  return(
    <div>sup</div>
  )
}


// export default connect(null, actions)(TripsContainer);
export default withRouter(connect(null, actions)(TripsContainer))
