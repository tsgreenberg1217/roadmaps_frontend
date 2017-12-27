import React from 'react'
import * as actions from '../actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import TripsContainer from './TripsContainer'
import CreateTrip from './CreateTrip'
import OnTrips from './OnTrips'
import UserTrips from './UserTrips'




class Profile extends React.Component{
  constructor(){
    super()
    this.state = {}
  }



  render(){
    console.log(this.props.ui.user_trips)
    return(
      <div>
      <UserTrips/>
      </div>
    )
  }


}

const mapStateToProps = (state) => {
  console.log(state);
  return{
    ui: state.ui,
    user: state.auth
  }
}
export default withRouter(connect(mapStateToProps, actions)(Profile));
