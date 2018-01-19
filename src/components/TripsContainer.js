import React from 'react'
import Trip from './Trip'
import { connect } from 'react-redux';
import * as actions from '../actions';
import { withRouter } from 'react-router-dom'
import {Segment, Card,Item } from 'semantic-ui-react'


const TripsContainer = (props) =>{
  const tripDivs = props.trips.map(trip =>
    <Trip
    stops = {trip.stops}
    key = {trip.id}
    id = {trip.id}
    title = {trip.title}
    photo = {trip.photo}
    name = {props.name}/>
  )
  return(
    <Item.Group style = {{padding: '0%'}}>
    {tripDivs}
    </Item.Group>
  )
}


export default withRouter(connect(null, actions)(TripsContainer))
