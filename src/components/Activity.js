import React from 'react'
import * as actions from '../actions'
import {connect} from 'react-redux'
import ImageUploader from './ImageUploader'


class Activity extends React.Component{
  constructor(){
    super()
  }

  render(){
    return(
      <div>
      <h3>{this.props.name}</h3>
      <ImageUploader/>
      </div>

    )
  }
}

export default connect(null, actions)(Activity)
