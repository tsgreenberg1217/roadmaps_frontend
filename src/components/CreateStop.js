import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';
import { withRouter } from 'react-router-dom'


class CreateStop extends React.Component{
  constructor(){
    super()
    this.state={
      order: '1',
      stop: ''
    }
    this.handleStopChange = this.handleStopChange.bind(this)
  }


  handleStopChange(value){
    this.setState({
      stop: value
    })
  }


  handleOrderChange(num){
    this.setState({
      order: num
    })
  }

  handleStopDispatch(e,state,trip_id){
    e.preventDefault()
    this.props.submitStop(state,trip_id)
    //is this syncronus?
    // this.props.refreshShowTrip(history)
  }



  render(){
    return(
      <div>
        <form onSubmit = {(e)=>this.handleStopDispatch(e,this.state, this.props.trip_id)}>
          <input
            type="number"
            name="order"
            value= {this.state.order}
            min="1" max="23"
            onChange = {(e) =>this.handleOrderChange(e.target.value)}
            />
          <input type = "text"
          onChange={(e)=>this.handleStopChange(e.target.value)}/>
          <button type="Submit" />
        </form>
      </div>
    )
  }
}

export default withRouter(connect(null, actions)(CreateStop));
