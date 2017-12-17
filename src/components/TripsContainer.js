import React from 'react'
import Trip from './Trip'
import { connect } from 'react-redux';
import * as actions from '../actions';

const TripsContainer = (props) =>{
  console.log('TC props are', props)
  const tripDivs = props.trips.map(trip =>
    <Trip
    key = {trip.id}
    id = {trip.id}
    title = {trip.title}/>
  )
  console.log(props.trips[0].title)
  return(
    <div>{tripDivs}</div>
  )
}


export default TripsContainer
