import React from 'react'
import TripsContainer from './TripsContainer'
import CreateTrip from './CreateTrip'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import * as actions from '../actions';



class Profile extends React.Component{
  render(){
    const phrase = `welcome to your profile, ${this.props.user.name}`
    return(
      <div>
        <button
        onClick = {this.props.logoutUser} >
        Logout
        </button>

        {phrase}

        <CreateTrip />

        {(this.props.trips) ?
          <TripsContainer
            trips = {this.props.trips}
            name = {this.props.user.name}/>
        : <div>null</div>}
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    trips: state.auth.user.user_trips
  }
}
// <TripsContainer trips = {this.props.trips}/>
export default withRouter(connect(mapStateToProps, actions)(Profile));
