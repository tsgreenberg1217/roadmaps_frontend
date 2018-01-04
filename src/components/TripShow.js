import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';
import { withRouter } from 'react-router-dom'

import CreateStop from './CreateStop'
import StopContainer from './StopContainer'
import MyMapComponent from './MyMapComponent'
import FriendsContainer from './FriendsContainer'

import { Embed, Container, Modal, Button } from 'semantic-ui-react'




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

      <Container>
        <Container style = {{width: "290px", float: 'left'}}>
        <h3>{this.props.trips.selected_trip.title}</h3>
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

        <Container style = {{float: 'right', width: '670px'}}>
        {(this.props.stops !== undefined) ?

          <MyMapComponent center = {location} stops = {this.props.stops.stops} style = {{float: 'left'}}/>
          : <div>no stops</div>}
        </Container>

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
