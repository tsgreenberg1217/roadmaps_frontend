import React from 'react'
import * as actions from '../actions'
import {connect} from 'react-redux'
import Activity from './Activity'
import { Segment } from 'semantic-ui-react'



class ActivityContainer extends React.Component{
  constructor(){
    super()
    this.state = {}
  }

  render(){
    const activityDivs = this.props.activities.map(act =>
      <Activity
      pictures = {act.activity_pictures}
      name = {act.name}
      id = {act.id}
      pictures = {act.pictures}
      />
    )
    return(
      <div>
      {activityDivs}
      </div>
    )
  }
}


export default connect(null,actions)(ActivityContainer)
