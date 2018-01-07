import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';
import { withRouter } from 'react-router-dom'

import CreateStop from './CreateStop'
import StopContainer from './StopContainer'
import MyMapComponent from './MyMapComponent'
import FriendsContainer from './FriendsContainer'
import FriendSearch from './FriendSearch'


import {Segment, Embed, Container, Modal, Button, Grid } from 'semantic-ui-react'




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
    const location = {
      lat: 40.75,
      lng: -73.98
    }
    console.log(this.props.trips.selected_trip.friends)
    return(
      <Container>
      <Grid columns = {3}>

      <Grid.Column/>
        <Grid.Column >
        <FriendSearch/>
        </Grid.Column>
        <Grid.Column >
        {(this.props.trips.selected_trip.friends !== undefined && this.props.trips.selected_trip.friends[0] !== "there are no friends") ?
          <FriendsContainer friend = {this.props.trips.selected_trip.friends}/>
          : null}
          </Grid.Column >


      </Grid>
      <Grid columns = {3}>

        <Grid.Column>
            {(this.props.trips.selected_trip.stops) ?
            <CreateStop
            stops_list = {this.props.trips.selected_trip.stops}
            trip_id = {this.props.trips.selected_trip.id}/> : <div/>}

            {(this.props.trips.selected_trip.id !== undefined)
              ? <StopContainer
              length = {this.props.trips.selected_trip.stops.length}
              stops = {this.props.trips.selected_trip.stops}
              />
              : <div>nothing</div>}
          </Grid.Column>

          <Grid.Column>
        {(this.props.stops.stops !== undefined) ?

          <MyMapComponent stops = {this.props.stops.stops}/>
          : <div>no stops</div>}
        </Grid.Column>

      </Grid>

      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    trips: state.trips,
    stops: state.stops
  }
}

export default withRouter(connect(mapStateToProps, actions)(TripShow));
