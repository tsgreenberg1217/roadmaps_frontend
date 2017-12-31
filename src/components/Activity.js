import React from 'react'
import * as actions from '../actions'
import {connect} from 'react-redux'
import ImageUploader from './ImageUploader'
import ImageContainer from './ImageContainer'


class Activity extends React.Component{
  constructor(){
    super()
  }

  render(){
    return(
      <div>
      <h3>{this.props.name}</h3>
      <ImageContainer pictures = {this.props}/>
      <ImageUploader id = {this.props.id}/>
      </div>

    )
  }
}


export default connect(null, actions)(Activity)
