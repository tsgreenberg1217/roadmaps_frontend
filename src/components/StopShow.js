import React from 'react'
import * as actions from '../actions'
import { connect } from 'react-redux';



class StopShow extends React.Component{
  constructor(){
    super()
    this.state = {}
  }


  render(){
    return(
      <div>
      Welcome to the stop show page
      </div>
    )
  }

}

export default connect(null, actions)(StopShow)
