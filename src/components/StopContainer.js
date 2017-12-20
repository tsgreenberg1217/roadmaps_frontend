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

  componentDidMount(){
    debugger
  }



  render(){
    console.log('sc props are', this.props.stops)
    return(
      <div>hello from sc</div>
    )
  }


}



export default withRouter(connect(null, actions)(StopContainer))
