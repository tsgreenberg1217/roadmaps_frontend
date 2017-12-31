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
    debugger
    this.props.refreshShowTrip(this.props.history)
  }



  render(){
    debugger
    const location = {
      lat: 40.75,
      lng: -73.98
    }
    return(

      <div>
        <h3>this is the trip show page!</h3>
        <h3>{this.props.trips.selected_trip.title}</h3>



        <Container style = {{float: 'left'}}>
          <FriendSearch/>
            {(this.props.trips.selected_trip.stops) ?
            <CreateStop
            stops_list = {this.props.trips.selected_trip.stops}
            trip_id = {this.props.trips.selected_trip.id}/> : <div/>}

            {(this.props.trips.selected_trip.id !== undefined)
              ? <StopContainer
              length = {this.props.trips.selected_trip.stops.length}
              stops = {this.props.trips.selected_trip.stops}
              style = {{display: 'block', float: 'left'}}/>
              : <div>nothing</div>}

              {(this.props.trips.selected_trip.friends !== undefined) ?
                <FriendsContainer friend = {this.props.trips.selected_trip.friends}/>
                :<p>no friends to show</p>}

        </Container>

        <Container style = {{float: 'right'}}>
        {(this.props.stops !== undefined) ?

          <MyMapComponent center = {location} stops = {this.props.stops.stops} style = {{float: 'left'}}/>
          : <div>no stops</div>}
        </Container>



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
