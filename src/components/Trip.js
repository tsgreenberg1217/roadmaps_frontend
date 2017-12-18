import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';
import { withRouter } from 'react-router-dom'



class Trip extends React.Component{
  render(){
    return (
      <div key = {this.props.id}
        onClick = {()=> this.props.getTrip(this.props.id, this.props.history, this.props.name)}>
        {this.props.title}
      </div>
    )
  }
}

export default withRouter(connect(null, actions)(Trip));
