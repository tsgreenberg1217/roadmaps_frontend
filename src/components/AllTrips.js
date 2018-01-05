import React from 'react'
import * as actions from '../actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import TripsContainer from './TripsContainer'
import CreateTrip from './CreateTrip'
import {Container} from 'semantic-ui-react'

class AllTrips extends React.Component{
  constructor(){
    super()
  }

  componentDidMount(){
    this.props.getEveryTrip()
  }


  render(){
    return(
      <Container>
        {(this.props.trips.every_trip.length !== undefined) ?
          <TripsContainer
            trips = {this.props.trips.every_trip}
            name = {this.props.user.name}/>
        : <div>null</div>}
      </Container>
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
