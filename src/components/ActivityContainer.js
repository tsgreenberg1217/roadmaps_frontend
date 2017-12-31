import React from 'react'
import * as actions from '../actions'
import {connect} from 'react-redux'
import Activity from './Activity'


class ActivityContainer extends React.Component{
  constructor(){
    super()
    this.state = {}
  }

  render(){
    const activityDivs = this.props.activities.map(act =>
      <Activity
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
