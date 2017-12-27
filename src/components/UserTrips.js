import React from 'react'
import TripsContainer from './TripsContainer'
import CreateTrip from './CreateTrip'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import * as actions from '../actions';



class UserTrips extends React.Component{
  constructor(){
    super()
    this.state = {}
  }

  componentDidMount(){
    this.props.allTrips()
  }


  render(){
    // debugger
    const phrase = `welcome to your profile, ${this.props.user.name}, these are your trips`
    return(
      <div>
      <button onClick = {() => this.props.history.push(`${this.props.user.name}/invited`)}>see the trips youre on</button>

        <button
        onClick = {this.props.logoutUser} >
        Logout
        </button>
        {phrase}

        <CreateTrip />

        {(this.props.trips.trips.length !== undefined) ?
          <TripsContainer
            trips = {this.props.trips.trips}
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
export default withRouter(connect(mapStateToProps, actions)(UserTrips));
