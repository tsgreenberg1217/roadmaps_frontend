import React from 'react'
import * as actions from '../actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'



class StopContainer extends React.Component{
  constructor(){
    super()
    this.state = {

    }
  }
  //
  // componentDidMount(){
  //   debugger
  // }


  render(){
    const stopDivs = this.props.stops.map(stop =>
      <div>{stop.name}</div>
    )
    console.log('sc props are', this.props.stops)
    return(
      <div>{stopDivs}</div>
    )
  }


}



export default withRouter(connect(null, actions)(StopContainer))
