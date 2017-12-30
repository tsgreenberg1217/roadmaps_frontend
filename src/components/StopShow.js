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


  render(){
    return(
      <div>
      Welcome to the stop show page
      <CreateActivity/>
      <ImageUploader/>
      </div>
    )
  }

}

export default connect(null, actions)(StopShow)
