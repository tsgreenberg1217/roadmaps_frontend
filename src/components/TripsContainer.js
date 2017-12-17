import React from 'react'
import Trip from './Trip'
import { connect } from 'react-redux';
import * as actions from '../actions';

const TripsContainer = (props) =>{
  const tripDivs = props.trips.map(trip =>
    <Trip
    key = {trip.id}
    id = {trip.id}
    title = {trip.title}/>
  )
  return(
    <div>{tripDivs}</div>
  )
}


// export default connect(null, actions)(TripsContainer);
export default TripsContainer
