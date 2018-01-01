import React from 'react'
import * as actions from '../actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import TripsContainer from './TripsContainer'
import CreateTrip from './CreateTrip'

class AllTrips extends React.Component{
  constructor(){
    super()
  }

  componentDidMount(){
    this.props.getEveryTrip()
  }


  render(){
    return(
      <div>
      <button onClick = {() => this.props.history.push(`${this.props.user.name}/invited`)}>see the trips youre on</button>

        <button
        onClick = {this.props.logoutUser} >
        Logout
        </button>

        <CreateTrip />

        {(this.props.trips.every_trip.length !== undefined) ?
          <TripsContainer
            trips = {this.props.trips.every_trip}
            name = {this.props.user.name}/>
        : <div>null</div>}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    trips: state.trips
  }
}

export default connect(mapStateToProps, actions)(AllTrips)
