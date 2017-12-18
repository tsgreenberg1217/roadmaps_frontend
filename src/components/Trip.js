import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';
import { withRouter } from 'react-router-dom'



class Trip extends React.Component{
  render(){
    return (
      <div key = {this.props.id}
        >
        {this.props.title}

        <button
        onClick = {()=> this.props.getTrip(this.props.id, this.props.history, this.props.name)}> go </button>

        <button
        onClick = {() => this.props.deleteTrip(this.props.id)}
        >
        delete
        </button>


      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  }
}

export default withRouter(connect(mapStateToProps, actions)(Trip));
