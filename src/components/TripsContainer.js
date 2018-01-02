import React from 'react'
import Trip from './Trip'
import { connect } from 'react-redux';
import * as actions from '../actions';
import { withRouter } from 'react-router-dom'

const TripsContainer = (props) =>{
  console.log(props.trips)
  const tripDivs = props.trips.map(trip =>
    <Trip
    key = {trip.id}
    id = {trip.id}
    title = {trip.title}
    photo = {trip.photo}
    name = {props.name}/>
  )
  return(
    <div>{tripDivs}</div>
  )
}


export default withRouter(connect(null, actions)(TripsContainer))
