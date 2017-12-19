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

  // componentWillMount(){
  //
  //   (this.props.stops.stops[0] !== undefined) ?
  //   console.log('yes')
  //   : this.props.fetchStops(this.props.history)
  // }

  componentWillReceiveProps(){
    // debugger
    // (this.props.stops.id !== undefined) ? console.log('we have stops') : console.log('oops')
  }

  render(){
    console.log('this SC props are:',this.props)
    return(
      <div>
      </div>
    )
  }

}



const mapStateToProps = (state) => {
  return {
    stops: state.stops
  }
}



export default withRouter(connect(mapStateToProps, actions)(StopContainer))
