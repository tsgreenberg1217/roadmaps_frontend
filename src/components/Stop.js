import React from 'react'
import * as actions from '../actions';
import { connect } from 'react-redux';

class Stop extends React.Component{

  constructor(){
    super()
    this.state = {}
  }

  handleDelete(stop_id, trip_id){
    debugger
    this.props.deleteStop(stop_id,trip_id)
  }

  render(){
    return (
      <div>
        <p>{this.props.name}</p>
        <button
        onClick = {() => this.handleDelete(this.props.id, this.props.trip_id)}>delete</button>
      </div>
    )
  }
}

export default connect(null,actions)(Stop)
