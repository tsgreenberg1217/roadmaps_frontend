import React from 'react'
import * as actions from '../actions'
import { connect } from 'react-redux';
import CreateActivity from './CreateActivity'
import ActivityContainer from './ActivityContainer'
import { Grid, Image, Container } from 'semantic-ui-react'



class StopShow extends React.Component{
  constructor(){
    super()
    this.state = {}
  }

  componentDidMount(){
    const stop_id = this.props.history.location.pathname.split("/")[3]
    const trip_id = this.props.history.location.pathname.split("/")[2]
    this.props.refreshStop(trip_id,stop_id)
  }



  render(){
    return(

      <Container>
      <h1>{this.props.stop.name}</h1>
      <CreateActivity stop = {this.props.stop}/>
      {(this.props.stop.activities) ? <ActivityContainer activities = {this.props.stop.activities}/> : <div/>}
      </Container>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    stop : state.stops.selected_stop
  }
}

export default connect(mapStateToProps, actions)(StopShow)
