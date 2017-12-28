import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';
import { withRouter } from 'react-router-dom'

import CreateStop from './CreateStop'
import StopContainer from './StopContainer'
import MyMapComponent from './MyMapComponent'
import FriendSearch from './FriendSearch'
import FriendsContainer from './FriendsContainer'

import { Embed, Container } from 'semantic-ui-react'




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
    return(

      <div>
        <h3>this is the trip show page!</h3>
        <h3>{this.props.trips.selected_trip.title}</h3>

        <FriendSearch/>


        <Container>
          <CreateStop
          trip_id = {this.props.trips.selected_trip.id}/>

          {(this.props.trips.selected_trip.id !== undefined)
            ? <StopContainer
            stops = {this.props.trips.selected_trip.stops}/>
            : <div>nothing</div>}
        </Container>

        {(this.props.stops !== undefined) ?
          <MyMapComponent center = {location} stops = {this.props.stops.stops}/>
          : <div>no stops</div>}


        {(this.props.trips.selected_trip.friends !== undefined) ?
          <FriendsContainer friend = {this.props.trips.selected_trip.friends}/>
          :<p>no friends to show</p>
        }
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

export default withRouter(connect(mapStateToProps, actions)(TripShow));
