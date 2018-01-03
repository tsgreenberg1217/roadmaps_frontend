import React from 'react'
import TripsContainer from './TripsContainer'
import CreateTrip from './CreateTrip'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import * as actions from '../actions';
import { Button, Header, Image, Modal, Icon } from 'semantic-ui-react'




class UserTrips extends React.Component{
  constructor(){
    super()
    this.state = {}
  }

  componentDidMount(){
    this.props.allTrips()
  }



  render(){
    const phrase = `${this.props.user.name}`
    return(
      <div>

        <h3>{phrase}</h3>

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
