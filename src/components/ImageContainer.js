import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions'

class ImageContainer extends React.Component{
  render(){
    return(
      <div/>
    )
  }
}

export default connect(null, actions)(ImageContainer)
