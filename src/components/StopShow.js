import React from 'react'
import * as actions from '../actions'
import { connect } from 'react-redux';
import ImageUploader from './ImageUploader'
import CreateActivity from './CreateActivity'


class StopShow extends React.Component{
  constructor(){
    super()
    this.state = {}
  }

  componentDidMount(){
    const stop_id = this.props.history.location.pathname.split("/")[3]
    const trip_id = this.props.history.location.pathname.split("/")[2]
    // debugger
    this.props.refreshStop(trip_id,stop_id)

  }
  componentWillReceiveProps(){
  }


  render(){
    return(
      <div>
      <h2>{this.props.stop.name}</h2>
      <CreateActivity/>
      <ImageUploader/>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    stop : state.stops.selected_stop
  }
}

export default connect(mapStateToProps, actions)(StopShow)
