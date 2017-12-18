import React from 'react'
import TripsContainer from './TripsContainer'
import CreateTrip from './CreateTrip'
import { connect } from 'react-redux';
import * as actions from '../actions';



class Profile extends React.Component{
  render(){
    console.log('rerender', this.props)
    // console.log('selected trip is...', this.props.selected )
    const phrase = `welcome to your profile, ${this.props.user.name}`
    return(
      <div>
        <button
        onClick = {this.props.logoutUser} >
        Logout
        </button>

        {phrase}

        <CreateTrip />

        {(this.props.trips) ? <TripsContainer trips = {this.props.trips} />
        : <div>enter some trips</div>}
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
export default connect(mapStateToProps, actions)(Profile);
